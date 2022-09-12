/* eslint-disable @typescript-eslint/no-empty-function */
import type { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import AuthInput from '../../Input/AuthInput';
import mailIcon from '../../../images/Mail.png';
import PasswordIcon from '../../../images/Hide.png';
import authPicture from '../../../images/чел 1.png';
import StyledButton from '../../Button/StyledButton';
import { StyledAuthContainer } from '../Auth.styles';
import { useAppDispatch } from '../../../store/hooks';
import { signUp } from '../../../store/user/userThunk';
import type { UserRegistrationType } from '../../../types/types';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(32).required(),
  confirmPass: yup.string().min(4).max(32).required(),
});

const SignIn: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<UserRegistrationType>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmitHandler = async (data: UserRegistrationType) => {
    try {
      const email = data.email;
      const password = data.password;
      const confirmPass = data.confirmPass;
      if (password !== confirmPass) {
        setError('confirmPass', {
          type: 'value',
          message: 'passwords must be matched',
        });
        return;
      }
      await dispatch(signUp({ email, password }));

      if (location.state) {
        navigate(location.state);
      } else {
        navigate('/');
      }
    } catch (error) {
      const err = error as Error;

      if (err.message.includes('password')) {
        setError('password', {
          type: 'server',
          message: err.message,
        });
      } else {
        setError('email', {
          type: 'server',
          message: err.message,
        });
      }
    }
  };

  return (
    <StyledAuthContainer>
      <form className="container" onSubmit={handleSubmit(onSubmitHandler)}>
        <h1>Sign Up</h1>
        <AuthInput
          icon={mailIcon}
          labelText="email"
          type="text"
          reff={register('email').ref}
          name={register('email').name}
          onChange={register('email').onChange}
          onBlur={register('email').onBlur}
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
        />
        <span>{`${errors.email ? errors.email?.message : 'Enter your email'}`}</span>
        <AuthInput
          icon={PasswordIcon}
          labelText="Password"
          type="password"
          reff={register('password').ref}
          name={register('password').name}
          onChange={register('password').onChange}
          onBlur={register('password').onBlur}
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
        />
        <span>{`${errors.password ? errors.password?.message : 'Enter your password'}`}</span>
        <AuthInput
          icon={PasswordIcon}
          labelText="Password reply"
          type="password"
          reff={register('confirmPass').ref}
          name={register('confirmPass').name}
          onChange={register('confirmPass').onChange}
          onBlur={register('confirmPass').onBlur}
          className={`form-control ${errors.confirmPass ? 'is-invalid' : ''}`}
        />
        <span>{`${errors.confirmPass ? errors.confirmPass?.message : 'Repeat your password without errors'}`}</span>
        <StyledButton className="auth" type="submit" onClick={() => { }} text="Sign up" />
      </form>
      <img src={authPicture} alt="cannot load picture" />
    </StyledAuthContainer>
  );
};

export default SignIn;
