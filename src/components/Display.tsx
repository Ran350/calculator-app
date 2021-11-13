import { VFC } from "react";
import styled from "styled-components";
import { colorBg, colorShadow, colorWhite } from "../css";
import { calculate } from "../lib/calculator/src/calculator";

type Props = {
  formula: string;
};

export const Display: VFC<Props> = ({ formula }) => {
  const result = calculate(formula);

  return (
    <Wrapper>
      <Formula>{formula}</Formula>
      <Result>
        <div>=</div>
        <div>{result}</div>
      </Result>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 1.5rem;
  margin: 1rem 0;
  width: 21rem;
`;

const Formula = styled.div`
  margin-bottom: 1rem;
  padding: 0 1.5rem;
  text-align: right;
  text-shadow: 1px 1px 0 ${colorWhite};
`;

const Result = styled.div`
  padding: 1rem 1.5rem;
  width: 100%;

  border: 0;
  border-radius: 2rem;
  background-color: ${colorBg};
  text-shadow: 1px 1px 0 ${colorWhite};

  box-shadow: inset 2px 2px 5px ${colorShadow}, inset -5px -5px 10px ${colorWhite};
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
`;
