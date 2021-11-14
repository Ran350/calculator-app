import { useState, VFC } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Display } from "./components/Display";
import { Inputs } from "./components/Inputs";
import { colorBg } from "./css";

const App: VFC = () => {
  const [formula, setFormula] = useState<string>("0");

  return (
    <>
      <GlobalStyle />

      <Wrapper>
        <Calculator>
          <Title>Calculator</Title>
          <Display formula={formula} />
          <Inputs formula={formula} setFormula={setFormula} />
        </Calculator>
      </Wrapper>
    </>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
body {
  font-family: "Montserrat", sans-serif;
  background-color: ${colorBg};
  padding:0;
  margin:0;
  max-height: 100vh;
  font-size:16px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Calculator = styled.div`
  margin: 0 auto;
  padding:1rem
  min-width: 30rem;
`;

const Title = styled.div`
  padding: 0;
  margin: 0;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(to right, #757f9a 0%, #d7dde8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
