import React, { useState } from "react";
import styled from "styled-components";
import "./assets/haredim.jpg"

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  text-align: center;
  direction: rtl;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 400px;
  width: 100%;
`;

const Input = styled.input`
  width: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

const Result = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Image = styled.img`
  margin-top: 20px;
  max-width: 400px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const App: React.FC = () => {
  const [income, setIncome] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = (): void => {
    const haredimCost = 3000; // Assume each Haredi costs 3000 ILS.
    const numberOfHaredim = Math.floor(Number(income) / haredimCost);
    setResult(numberOfHaredim);
  };

  return (
    <AppContainer>
      <Title>כמה חרדים אני מממן?</Title>
      <Form>
        <Input
          type="number"
          placeholder="הכנס סכום חודשי ב-₪"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
        <Button onClick={handleCalculate}>חשב</Button>
      </Form>
      {result !== null && (
        <Result>
          <p>אתה מממן {result} חרדים בכל חודש!</p>
          <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScXZxg7pHyL73gZ4ltd2YyHflnVr_9VqsT_w&s" alt="Haredim"
          />
        </Result>
      )}
    </AppContainer>
  );
};

export default App;
