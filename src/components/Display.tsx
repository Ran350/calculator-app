import { VFC } from "react";
import { calculate } from "../lib/calculator/src/calculator";

type Props = {
  formula: string;
};

export const Display: VFC<Props> = ({ formula }) => {
  const result = calculate(formula);

  return (
    <>
      <div>
        {formula} = {result}
      </div>
    </>
  );
};
