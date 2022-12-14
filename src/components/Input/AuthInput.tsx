import type { FC } from 'react';
import type { ChangeHandler, RefCallBack } from 'react-hook-form';

import { AuthStyledInput, AuthStyledInputLabelsContainer } from './AuthInput.styles';

type PropType = {
  className: string;
  icon: string;
  labelText: string;
  name: string;
  type: string;
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  inputRef?: RefCallBack;
  onDeleteClick?: () => void;
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const AuthInput: FC<PropType> = (
  { icon,
    labelText,
    name,
    type,
    className,
    inputRef,
    onBlur,
    onChange,
    onDeleteClick,
  },
) => {
  return (
    <AuthStyledInputLabelsContainer className={className}>
      <AuthStyledInput
        ref={inputRef}
        id={name}
        name={name}
        type={type}
        className={className}
        onChange={onChange}
        onBlur={onBlur}
        required
      />
      <img src={icon} alt="cannot load icon" />
      <label htmlFor={name} className={className}>{labelText}</label>
      <button className="clear" onMouseUp={onDeleteClick}>x</button>
    </AuthStyledInputLabelsContainer>
  );
};

export default AuthInput;
