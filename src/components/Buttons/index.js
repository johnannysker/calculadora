import { ButtonContainer } from "./style";

const Button = ({label, onclick}) => {
    return (
      <ButtonContainer onClick={onclick}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;