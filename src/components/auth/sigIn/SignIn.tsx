import type { ChangeEvent, FC } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthInput from '../../Input/AuthInput';
import { StyledAuthContainer } from '../Auth.styles';
import authPicture from '../../../images/чел 1.png';
import StyledButton from '../../Button/StyledButton';
import mailIcon from '../../../images/Mail.png';
import PasswordIcon from '../../../images/Hide.png';
import { useAppDispatch } from '../../../store/hooks';
import { fetchUser } from '../../../store/slices/UserSlice';

const SignIn: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const onClick = async () => {
    await dispatch(fetchUser({ email, password }));
    setEmail('');
    setPassword('');
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <StyledAuthContainer className="sign-in">
      <div className="container">
        <h1>Log In</h1>
        <AuthInput
          icon={mailIcon}
          labelText="Email"
          name="mail-input"
          type="text"
          onChange={onEmailChange}
        />
        <span>Enter your email</span>
        <AuthInput
          icon={PasswordIcon}
          labelText="Password"
          name="password-input"
          type="password"
          onChange={onPasswordChange}
        />
        <span>Enter your password</span>
        <StyledButton onClick={onClick} text="Log In" />
      </div>
      <img src={authPicture} alt="cannot load picture" />
    </StyledAuthContainer>
  );
};

export default SignIn;