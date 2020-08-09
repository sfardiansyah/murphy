import React, { useCallback, useState } from "react";
import Navbar from "components/navigation/NavbarV2";
import { Container, Message } from "semantic-ui-react";
import InvestmentForm from "./InvestmentForm";
import { FormValues } from "./types";

const Calculator: React.FC = () => {
  const [value, setValue] = useState(0);
  const [years, setYears] = useState(0);

  const calculate = useCallback(
    ({ lumpSum, years, monthlyDeposit, annualReturn }: FormValues) => {
      if (years && annualReturn) {
        const months = years * 12;
        const monthlyReturn = annualReturn / 1200 + 1;

        let value = 0;
        if (lumpSum) {
          value +=
            Number(lumpSum.replace(/[^0-9-]+/g, "")) *
            Math.pow(monthlyReturn, months - 1);
        }

        if (monthlyDeposit) {
          const deposit = Number(monthlyDeposit.replace(/[^0-9-]+/g, ""));

          let futureValue = deposit;
          for (let i = 0; i < months - 1; i++) {
            futureValue *= monthlyReturn;
            futureValue += deposit;
          }
          value += futureValue;
        }

        setYears(years);
        setValue(value);
      }
    },
    []
  );

  return (
    <Container
      style={{
        backgroundColor: "#f3ebde",
        textAlign: "center",
        paddingTop: 8,
        paddingBottom: 8,
      }}
    >
      <Navbar />
      <h1>Investment Calculator</h1>
      <div style={{ marginTop: 48, marginBottom: 48 }}>
        <InvestmentForm handleSubmit={calculate} />
      </div>
      <h3>Your estimated total fund after {years} year(s) is:</h3>
      <h1>
        {Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(value)}
      </h1>
      <Message style={{ marginTop: 48 }}>
        <Message.Header>Disclaimer</Message.Header>
        <Message.List>
          <Message.Item>
            This calculation is used only for simulation purpose, not intended
            to provide any recommendations or suggestions.
          </Message.Item>
          <Message.Item>
            The estimated return is not a guarantee of the return value that
            will be obtained, but only as an indication.
          </Message.Item>
        </Message.List>
      </Message>
    </Container>
  );
};

export default Calculator;
