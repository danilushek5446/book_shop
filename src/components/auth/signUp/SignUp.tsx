import type { FC } from 'react';
import { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import AuthInput from '../../Input/AuthInput';
import mailIcon from '../../../images/Mail.png';
import PasswordIcon from '../../../images/Hide.png';
import authPicture from '../../../images/чел 1.png';
import StyledButton from '../../Button/StyledButton';
import { StyledAuthContainer } from '../Auth.styles';
import { useAppDispatch } from '../../../store/hooks';
import { signUp } from '../../../store/thunks/userThunk';

const SignIn: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const onClick = async () => {
    await dispatch(signUp({ email, password }));
    if (location.state) {
      navigate(location.state);
    } else {
      navigate('/');
    }
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <StyledAuthContainer>
      <div className="container">
        <h1>Sign Up</h1>
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
        <AuthInput
          icon={PasswordIcon}
          labelText="Password replay"
          name="password-reply-input"
          type="password"
          onChange={onPasswordChange}
        />
        <span>Repeat your password without errors</span>
        <StyledButton onClick={onClick} text="Sing Up" />
      </div>
      <img src={authPicture} alt="cannot load picture" />
    </StyledAuthContainer>
  );
};

export default SignIn;
