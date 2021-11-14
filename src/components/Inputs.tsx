import type { Dispatch, SetStateAction } from "react";
import { VFC } from "react";
import styled from "styled-components";
import { ACButton, Button, CEButton } from "./Button";

type Props = {
  formula: string;
  setFormula: Dispatch<SetStateAction<string>>;
};

export const Inputs: VFC<Props> = ({ formula, setFormula }) => {
  return (
    <Grid>
      {/* 1st line */}
      <Button halfSizeSymbol={"("} formula={formula} setFormula={setFormula} />
      <Button halfSizeSymbol={")"} formula={formula} setFormula={setFormula} />
      <CEButton formula={formula} setFormula={setFormula} />
      <ACButton setFormula={setFormula} />

      {/* 2nd line */}
      <Button halfSizeSymbol={"7"} formula={formula} setFormula={setFormula} />
      <Button halfSizeSymbol={"8"} formula={formula} setFormula={setFormula} />
      <Button halfSizeSymbol={"9"} formula={formula} setFormula={setFormula} />
      <Button
        halfSizeSymbol={"+"}
        displaySymbol={"＋"}
        isNumber={false}
        formula={formula}
        setFormula={setFormula}
      />

      {/* 3rd line */}
      <Button halfSizeSymbol={"4"} formula={formula} setFormula={setFormula} />
      <Button halfSizeSymbol={"5"} formula={formula} setFormula={setFormula} />
      <Button halfSizeSymbol={"6"} formula={formula} setFormula={setFormula} />
      <Button
        halfSizeSymbol={"-"}
        displaySymbol={"−"}
        isNumber={false}
        formula={formula}
        setFormula={setFormula}
      />

      {/* 4th line */}
      <Button halfSizeSymbol={"1"} formula={formula} setFormula={setFormula} />
      <Button halfSizeSymbol={"2"} formula={formula} setFormula={setFormula} />
      <Button halfSizeSymbol={"3"} formula={formula} setFormula={setFormula} />
      <Button
        halfSizeSymbol={"*"}
        displaySymbol={"×"}
        isNumber={false}
        formula={formula}
        setFormula={setFormula}
      />

      {/* 5th line */}
      <Button halfSizeSymbol={"0"} formula={formula} setFormula={setFormula} />
      <Button halfSizeSymbol={"00"} formula={formula} setFormula={setFormula} />
      <Button halfSizeSymbol={"."} displaySymbol={"."} formula={formula} setFormula={setFormula} />
      <Button
        halfSizeSymbol={"/"}
        displaySymbol={"÷"}
        isNumber={false}
        formula={formula}
        setFormula={setFormula}
      />
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  max-width: 40rem;
`;
