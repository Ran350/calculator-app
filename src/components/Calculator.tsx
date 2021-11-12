import { useState, VFC } from "react";
import { Display } from "./Display";
import { Inputs } from "./Inputs";

export const Calculator: VFC = () => {
  const [formula, setFormula] = useState<string>("0");

  return (
    <>
      <Display formula={formula} />
      <Inputs formula={formula}  setFormula={setFormula} />
    </>
  );
};
