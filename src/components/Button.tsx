import type { Dispatch, SetStateAction } from "react";
import { VFC } from "react";
import styled from "styled-components";
import {
  colorBg,
  colorShadow,
  colorWhite,
  fontColorNavy,
  fontColorRed,
  fontColorYellow,
} from "../css";

type Props = {
  halfSizeSymbol: string;
  displaySymbol?: string;
  isNumber?: boolean;
  formula: string;
  setFormula: Dispatch<SetStateAction<string>>;
};
export const Button: VFC<Props> = ({
  halfSizeSymbol,
  displaySymbol = halfSizeSymbol,
  isNumber = true,
  formula,
  setFormula,
}) => {
  const updateFormula = () => {
    if (formula === "0" || formula === "00") {
      setFormula(halfSizeSymbol);
    } else {
      setFormula(formula + halfSizeSymbol);
    }
  };

  return (
    <Wrapper>
      {isNumber ? (
        <ButtonStyle onClick={updateFormula}>{displaySymbol}</ButtonStyle>
      ) : (
        <SymbolButtonStyle onClick={updateFormula}>{displaySymbol}</SymbolButtonStyle>
      )}
    </Wrapper>
  );
};

export const ACButton: VFC<{
  setFormula: Dispatch<SetStateAction<string>>;
}> = ({ setFormula }) => {
  const clearFormula = () => {
    setFormula("0");
  };

  return (
    <Wrapper>
      <AlertButtonStyle onClick={clearFormula}>AC</AlertButtonStyle>
    </Wrapper>
  );
};

export const CEButton: VFC<{
  formula: string;
  setFormula: Dispatch<SetStateAction<string>>;
}> = ({ formula, setFormula }) => {
  const popFormula = () => {
    if (formula.length === 1) {
      setFormula("0");
    } else {
      setFormula(formula.slice(0, -1));
    }
  };

  return (
    <Wrapper>
      <AlertButtonStyle onClick={popFormula}>CE</AlertButtonStyle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-shadow: 1px 1px 1px ${colorWhite};
  padding: 0;
  margin: 0;
  text-align: center;
  height: 4rem;
  width: 4rem;
  display: block;
`;

const ButtonStyle = styled.button`
  font-weight: bold;
  font-size: 1.5rem;
  text-shadow: 1px 1px 0 ${colorWhite};
  color: ${fontColorNavy};
  background-color: ${colorBg};

  margin: 0;
  border: 0;
  padding: 0;
  border-radius: 1rem;
  box-shadow: -5px -5px 20px ${colorWhite}, 5px 5px 20px ${colorShadow};
  height: 100%;
  width: 100%;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: -2px -2px 5px ${colorWhite}, 2px 2px 5px ${colorShadow};
  }

  &:active {
    box-shadow: inset 1px 1px 2px ${colorShadow}, inset -1px -1px 2px ${colorWhite};
  }
`;

const SymbolButtonStyle = styled(ButtonStyle)`
  color: ${fontColorYellow};
  text-shadow: ${fontColorYellow} 0 0 2px, ${fontColorYellow} 0 0 40px;
`;

const AlertButtonStyle = styled(ButtonStyle)`
  color: ${fontColorRed};
  text-shadow: ${fontColorRed} 0 0 1px, ${fontColorRed} 0 0 30px;
`;
