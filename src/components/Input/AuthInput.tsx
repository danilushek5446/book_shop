import type { FC } from 'react';
import { AuthStyledInput, AuthStyledInputLabelsContainer } from './AuthInput.styles';

type PropType = {
  icon: string;
  labelText: string;
  name: string;
  type: string;
  onChange: (event :React.ChangeEvent<HTMLInputElement>) => void;
};

const AuthInput: FC<PropType> = ({ icon, labelText, name, type, onChange }) => {
  return (
    <AuthStyledInputLabelsContainer name={name}>
      <AuthStyledInput id={name} type={type} onChange={onChange} required />
      <img src={icon} alt="cannot load icon" />
      <label htmlFor={name}>{labelText}</label>
    </AuthStyledInputLabelsContainer>
  );
};

export default AuthInput;
