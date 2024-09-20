import { Container, Content, Row } from "./styles";
import Input from './components/Input';
import Button from './components/Buttons';
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [operation, setOperation] = useState('');

  //Adicionar numero
  const handleAddNumber = (number) => {
      setCurrrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  }

  //limpar display e operações
  const handleOnClear = () => {
      setCurrrentNumber('0')
      setFirstNumber('0')
      setOperation('')
  };

  //Operação de soma
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

  //Operação de subtração
  const handleMinusNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrrentNumber('0')
      setOperation('-')
    }else{
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrrentNumber(String(sub))
      setOperation('')
    }
  }

  //Operação de divisão
  const handleDivNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrrentNumber('0')
      setOperation('/')
    }else{
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrrentNumber(String(div))
      setOperation('')
    }
  }

  //Operação de multiplicar
  const handleMulNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrrentNumber('0')
      setOperation('x')
    }else{
      const mul = Number(firstNumber) * Number(currentNumber);
      setCurrrentNumber(String(mul))
      setOperation('')
    }
  }

  //Operação de potencia
  const handlePowNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrrentNumber('0')
      setOperation('n')
    }else{
      const pot = Math.pow(Number(firstNumber), Number(currentNumber));
      setCurrrentNumber(String(pot));
      setOperation('')
    }
  }

  //Operação de porcentagem
  const handlePerNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrrentNumber('0')
      setOperation('%')
    }else{
      var percent = Number(firstNumber) / 100;
      var total = Number(currentNumber) - (percent * Number(currentNumber));
      const perc = Number(currentNumber) - total;
      setCurrrentNumber(String(perc.toFixed(2)))
      setOperation('')
    }
  }

  //Operação de resultado
  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        case 'x':
          handleMulNumbers();
          break;
        case '%':
          handlePerNumbers();
          break;
        case 'n':
          handlePowNumbers();
          break;
        default:
          break;
      }
    }
  }

  //Estrutura da calculadora
  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="C" onclick={handleOnClear}/>
          <Button label="n²" onclick={handlePowNumbers}/>
          <Button label="%" onclick={handlePerNumbers}/>
          <Button label="/" onclick={handleDivNumbers}/>
        </Row>
        <Row>
          <Button label="7" onclick={() => handleAddNumber('7')}/>
          <Button label="8" onclick={() => handleAddNumber('8')}/>
          <Button label="9" onclick={() => handleAddNumber('9')}/>
          <Button label="x" onclick={handleMulNumbers}/>
        </Row>
        <Row>
          <Button label="4" onclick={() => handleAddNumber('4')}/>
          <Button label="5" onclick={() => handleAddNumber('5')}/>
          <Button label="6" onclick={() => handleAddNumber('6')}/>
          <Button label="-" onclick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="1" onclick={() => handleAddNumber('1')}/>
          <Button label="2" onclick={() => handleAddNumber('2')}/>
          <Button label="3" onclick={() => handleAddNumber('3')}/>
          <Button label="+" onclick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="¨" onclick={() => handleAddNumber('')}/>
          <Button label="0" onclick={() => handleAddNumber('0')}/>
          <Button label="." onclick={() => handleAddNumber('.')}/>
          <Button label="=" onclick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
