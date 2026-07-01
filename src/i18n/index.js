import * as en from "./en";
import * as fr from "./fr";
import {ui} from "./ui";

const portfolios = {en, fr};

export function getPortfolio(language) {
  return portfolios[language] || portfolios.en;
}

export function getUi(language) {
  return ui[language] || ui.en;
}

export {ui};
