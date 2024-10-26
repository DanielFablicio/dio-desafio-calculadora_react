"use client";
import { useEffect, useState } from "react";
import displayContentStore, { getDisplay } from "@/app/events/displayContent";
import styles from "./Display.module.css";

export default function Input() {
  const [display, setDisplay] = useState(getDisplay());
  useEffect(() => {
    // Função que atualiza o estado quando o evento 'change' é emitido
    const updateDisplay = (newDisplayValue) => setDisplay(newDisplayValue);

    // Inscreve o componente no evento de mudança
    displayContentStore.on("change", updateDisplay);

    // Limpa o evento ao desmontar o componente
    return () => {
      displayContentStore.off("change", updateDisplay);
    };
  }, []);

  return (
    <input type="text" className={styles.display} readOnly value={display} />
  );
}
