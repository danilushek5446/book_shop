/* eslint-disable @typescript-eslint/no-empty-function */
import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation, useNavigate } from 'react-router-dom';

import AuthInput from '../../Input/AuthInput';
import { StyledAuthContainer } from '../Auth.styles';
import authPicture from '../../../images/чел 1.png';
import StyledButton from '../../Button/StyledButton';
import mailIcon from '../../../images/Mail.png';
import PasswordIcon from '../../../images/Hide.png';
import { useAppDispatch } from '../../../store/hooks';
import { singIn } from '../../../store/user/userThunk';
import type { AuthType } from '../../../types/types';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(32).required(),
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
  } = useForm<AuthType>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmitHandler = async (data: AuthType) => {
    try {
      const email = data.email;
      const password = data.password;
      await dispatch(singIn({ email, password }));
      // eslint-disable-next-line no-console
      console.log(location);
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
    <StyledAuthContainer className="sign-in">
      <form className="container" onSubmit={handleSubmit(onSubmitHandler)}>
        <h1>Log In</h1>
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
        <StyledButton className="auth" type="submit" onClick={() => { }} text="Log In" />
      </form>
      <img src={authPicture} alt="cannot load picture" />
    </StyledAuthContainer>
  );
};

export default SignIn;
