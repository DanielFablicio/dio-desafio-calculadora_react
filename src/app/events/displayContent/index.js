"use client";
import { EventEmitter } from "events";

//FIZ COM EVENTO POIS ACHEI QUE IA FICAR MAIS LIMPO

const displayContentStore = new EventEmitter();
let displayContent = "";

function emitDisplayChange() {
  displayContentStore.emit("change", displayContent);
}

export const updateDisplay = (value) => {
  displayContent += value;
  emitDisplayChange();
};

export function redoDisplay() {
  displayContent = displayContent.substring(0, displayContent.length - 1);
  emitDisplayChange();
}

export const clearDisplay = (refresh = true) => {
  displayContent = "";
  if (refresh) {
    emitDisplayChange();
  }
};

export const resolveContent = () => {
  let res;
  try {
    res = eval(displayContent); //EXECUTA UMA STRING DE CÓDIGO
    clearDisplay(false);
    displayContent = res.toString();
  } catch {
    displayContent = "ERROR. DO C/CE";
  }
  emitDisplayChange();
};

export const getDisplay = () => displayContent;

export default displayContentStore;
