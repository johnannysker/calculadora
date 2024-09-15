import { Container, Content, Row } from "./styles";
import Input from './components/Input';
import Button from './components/Buttons';
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [operation, setOperation] = useState('');

  const handleAddNumber = (number) => {
      setCurrrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  }

  const handleOnClear = () => {
      setCurrrentNumber('0')
      setFirstNumber('0')
      setOperation('')
  };

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrrentNumber('0')
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="C" onclick={handleOnClear}/>
          <Button label="<" onclick={() => handleAddNumber('<')}/>
          <Button label="%" onclick={() => handleAddNumber('%')}/>
          <Button label="/" onclick={() => handleAddNumber('/')}/>
        </Row>
        <Row>
          <Button label="7" onclick={() => handleAddNumber('7')}/>
          <Button label="8" onclick={() => handleAddNumber('8')}/>
          <Button label="9" onclick={() => handleAddNumber('9')}/>
          <Button label="x" onclick={() => handleAddNumber('x')}/>
        </Row>
        <Row>
          <Button label="4" onclick={() => handleAddNumber('4')}/>
          <Button label="5" onclick={() => handleAddNumber('5')}/>
          <Button label="6" onclick={() => handleAddNumber('6')}/>
          <Button label="-" onclick={() => handleAddNumber('-')}/>
        </Row>
        <Row>
          <Button label="1" onclick={() => handleAddNumber('1')}/>
          <Button label="2" onclick={() => handleAddNumber('2')}/>
          <Button label="3" onclick={() => handleAddNumber('3')}/>
          <Button label="+" onclick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="N²" onclick={() => handleAddNumber('N²')}/>
          <Button label="0" onclick={() => handleAddNumber('0')}/>
          <Button label="," onclick={() => handleAddNumber(',')}/>
          <Button label="=" onclick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
