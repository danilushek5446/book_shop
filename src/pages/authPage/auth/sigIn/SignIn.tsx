/* eslint-disable @typescript-eslint/no-empty-function */
import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { StyledAuthContainer } from '../Auth.styles';
import authPicture from '../../../../assets/images/чел 1.png';
import mailIcon from '../../../../assets/icons/Mail.png';
import PasswordIcon from '../../../../assets/icons/Hide.png';
import { useAppDispatch } from '../../../../store/hooks';
import type { AuthType } from '../../../../types/userTypes';
import { singIn } from '../../../../store/user/userThunk';
import AuthInput from '../../../../components/Input/AuthInput';
import StyledButton from '../../../../components/Button/StyledButton';

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
    setValue,
    formState: { errors },
  } = useForm<AuthType>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const clearEmail = () => {
    setValue('email', '');
  };

  const clearPassword = () => {
    setValue('password', '');
  };

  const onSubmitHandler = async (data: AuthType) => {
    try {
      const email = data.email;
      const password = data.password;

      await dispatch(singIn({ email, password })).unwrap();

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
        return;
      }

      if (err.message.includes('email')) {
        setError('email', {
          type: 'server',
          message: err.message,
        });
        return;
      }

      toast(err.message);
    }
  };

  return (
    <StyledAuthContainer className="sign-in">
      <form className="container" onSubmit={handleSubmit(onSubmitHandler)}>
        <h1>Log In</h1>
        <div className="input-container">
          <AuthInput
            icon={mailIcon}
            labelText="email"
            type="text"
            inputRef={register('email').ref}
            name={register('email').name}
            onChange={register('email').onChange}
            onBlur={register('email').onBlur}
            onDeleteClick={clearEmail}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          <span className={`form-control ${errors.email ? 'is-invalid' : ''}`}>
            {`${errors.email ? errors.email?.message : 'Enter your email'}`}
          </span>
        </div>
        <div className="input-container">
          <AuthInput
            icon={PasswordIcon}
            labelText="Password"
            type="password"
            inputRef={register('password').ref}
            name={register('password').name}
            onChange={register('password').onChange}
            onBlur={register('password').onBlur}
            onDeleteClick={clearPassword}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          <span className={`form-control ${errors.password ? 'is-invalid' : ''}`}>
            {`${errors.password ? errors.password?.message : 'Enter your password'}`}
          </span>
        </div>
        <div className="button-container">
          <StyledButton className="auth" type="submit" text="Log In" />
        </div>
      </form>
      <img
        className="auth-iamge signin"
        src={authPicture}
        alt="cannot load picture"
      />
    </StyledAuthContainer>
  );
};

export default SignIn;
