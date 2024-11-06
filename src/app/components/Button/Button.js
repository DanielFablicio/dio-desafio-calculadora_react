"use client";
import { updateDisplay } from "@/app/events/displayContent";
import styles from "./Button.module.css";

export default function NormalButton({ title, altValue, _width }) {
  //ELE SÓ FAZ PASSAR O PRÓPRIO CONTEÚDO PRO DISPLAY
  return (
    <button
      className={styles.button}
      style={{ width: _width }}
      onClick={() => updateDisplay(altValue ?? title)}
      //TESTA SE TEM UM VALOR ALTERNATIVO(é null?), SENÃO USA O TÍTULO MESMO. EXEMPLO: no caso de x, o alt é *
    >
      {title}
    </button>
  );
}

export function SpecialButton({ title, specFunc, _height }) {
  //TEM UMA FUNCIONALIDADE ESPECIAL, COMO LIMPAR A TELA.
  return (
    <button
      className={styles.button}
      style={{ height: _height }}
      onClick={specFunc}
    >
      {title}
    </button>
  );
}
