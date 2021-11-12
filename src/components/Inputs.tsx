import type { Dispatch, SetStateAction } from "react";
import { VFC } from "react";
import { ACButton, Button, CEButton } from "./Button";

type Props = {
  formula: string;
  setFormula: Dispatch<SetStateAction<string>>;
};

export const Inputs: VFC<Props> = ({ formula, setFormula }) => {
  const symbols = [
    // ["calculate()用の半角表現","表示文字"]
    ["0", "0"],
    ["1", "1"],
    ["2", "2"],
    ["3", "3"],
    ["4", "4"],
    ["5", "5"],
    ["6", "6"],
    ["7", "7"],
    ["8", "8"],
    ["9", "9"],
    [".", "."],
    ["(", "("],
    [")", ")"],
    ["+", "＋"],
    ["-", "−"],
    ["*", "✕"],
    ["/", "÷"],
  ];

  return (
    <>
      {symbols.map((symbol) => (
        <Button
          halfSizeSymbol={symbol[0]}
          displaySymbol={symbol[1]}
          formula={formula}
          setFormula={setFormula}
        />
      ))}
      <ACButton setFormula={setFormula} />
      <CEButton formula={formula} setFormula={setFormula} />
    </>
  );
};
