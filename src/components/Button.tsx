import type { Dispatch, SetStateAction } from "react";
import { VFC } from "react";

type Props = {
  halfSizeSymbol: string;
  displaySymbol: string;
  formula: string;
  setFormula: Dispatch<SetStateAction<string>>;
};
export const Button: VFC<Props> = ({ halfSizeSymbol, displaySymbol, formula, setFormula }) => {
  const updateFormula = () => {
    if (formula === "0") {
      setFormula(halfSizeSymbol);
    } else {
      setFormula(formula + halfSizeSymbol);
    }
  };

  return <button onClick={updateFormula}>{displaySymbol}</button>;
};

type ACButtonProps = {
  setFormula: Dispatch<SetStateAction<string>>;
};
export const ACButton: VFC<ACButtonProps> = ({ setFormula }) => {
  const clearFormula = () => {
    setFormula("0");
  };

  return <button onClick={clearFormula}>AC</button>;
};

type CEButtonProps = {
  formula: string;
  setFormula: Dispatch<SetStateAction<string>>;
};
export const CEButton: VFC<CEButtonProps> = ({ formula, setFormula }) => {
  const popFormula = () => {
    if (formula.length === 1) {
      setFormula("0");
    } else {
      setFormula(formula.slice(0, -1));
    }
  };

  return <button onClick={popFormula}>CE</button>;
};
