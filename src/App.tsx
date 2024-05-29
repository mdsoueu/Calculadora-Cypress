import { useState } from "react";
import Display from "./components/Display";
import ButtonsPanel from "./components/ButtonsPanel";
import { isNumber } from "./utils/isNumber";
import { isDot } from "./utils/isDot";
import { removeZeroLeft } from "./utils/removeZeroLeft";
import { calculate } from "./utils/calculate";

function App() {
  const [displayNumber, setDispayNumber] = useState<string | null>(null);
  const [accumulator, setAccumulator] = useState<string>("0");
  const [operator, setOperator] = useState<string | null>(null);
  const [isNewNumber, setIsNewNumber] = useState<boolean>(true);
  const [showingResult, setShowingResult] = useState<boolean>(false);

  const handleClick = (buttonName: string) => {
    if (buttonName === "AC") {
      setDispayNumber(null);
      setAccumulator("0");
      setOperator(null);
      setIsNewNumber(true);
      setShowingResult(false);
      return;
    }

    if (isNumber(buttonName) || isDot(buttonName)) {
      setIsNewNumber(false);
      return setDispayNumber((accumulator) => {
        return removeZeroLeft(
          isNewNumber ? buttonName : accumulator + buttonName
        );
      });
    }

    setIsNewNumber(true);

    if (buttonName !== "=") {
      setOperator(buttonName);
      setShowingResult(false);
    } else {
      setShowingResult(true);
    }

    if (!showingResult || buttonName !== "=") {
      setAccumulator(displayNumber!);
    }

    if (operator && (!showingResult || buttonName === "=")) {
      if (showingResult) {
        setDispayNumber(calculate(operator, displayNumber!, accumulator));
      } else {
        setDispayNumber(calculate(operator, accumulator, displayNumber!));
      }
    }
  };

  return (
    <div className="calculator">
      <Display value={displayNumber || "0"} />
      <ButtonsPanel onClick={handleClick} />
    </div>
  );
}

export default App;
