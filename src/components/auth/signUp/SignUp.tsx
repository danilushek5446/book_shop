import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthInput from '../../Input/AuthInput';
import mailIcon from '../../../images/Mail.png';
import PasswordIcon from '../../../images/Hide.png';
import authPicture from '../../../images/чел 1.png';
import StyledButton from '../../Button/StyledButton';
import { StyledAuthContainer } from '../Auth.styles';

const SignIn: FC = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/login');
  };

  return (
    <StyledAuthContainer>
      <div className="container">
        <h1>Sign Up</h1>
        {/* <AuthInput icon={mailIcon} labelText="Email" name="mail-input" type="text" />
        <span>Enter your email</span>
        <AuthInput icon={PasswordIcon} labelText="Password" name="password-input" type="password" />
        <span>Enter your password</span>
        <AuthInput icon={PasswordIcon} labelText="Password
        replay" name="password-reply-input" type="password" /> */}
        <span>Repeat your password without errors</span>
        <StyledButton onClick={onClick} text="Sing Up" />
      </div>
      <img src={authPicture} alt="cannot load picture" />
    </StyledAuthContainer>
  );
};

export default SignIn;
