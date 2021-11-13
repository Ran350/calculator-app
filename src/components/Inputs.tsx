import type { Dispatch, SetStateAction } from "react";
import { VFC } from "react";
import styled from "styled-components";
import { ACButton, Button, CEButton } from "./Button";

type Props = {
  formula: string;
  setFormula: Dispatch<SetStateAction<string>>;
};

export const Inputs: VFC<Props> = ({ formula, setFormula }) => {
  const line1Symbols = [
    ["(", "("],
    [")", ")"],
  ];
  const symbols = [
    // ["calculate()用の半角表現","表示文字"]
    ["7", "7"], // 2nd line
    ["8", "8"],
    ["9", "9"],
    ["+", "＋"],
    ["4", "4"], // 3rd line
    ["5", "5"],
    ["6", "6"],
    ["-", "−"],
    ["1", "1"], // 4ht line
    ["2", "2"],
    ["3", "3"],
    ["*", "×"],
    ["0", "0"], // 5th line
    ["00", "00"],
    [".", "."],
    ["/", "÷"],
  ];

  return (
    <Grid>
      {/* 1st line */}
      {line1Symbols.map((symbol) => (
        <Button
          halfSizeSymbol={symbol[0]}
          displaySymbol={symbol[1]}
          formula={formula}
          setFormula={setFormula}
        />
      ))}

      <CEButton formula={formula} setFormula={setFormula} />
      <ACButton setFormula={setFormula} />

      {/* 2~5th line */}
      {symbols.map((symbol, i) => (
        <Button
          key={i}
          halfSizeSymbol={symbol[0]}
          displaySymbol={symbol[1]}
          formula={formula}
          setFormula={setFormula}
        />
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  max-width: 40rem;
`;
