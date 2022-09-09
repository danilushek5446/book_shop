/* eslint-disable @typescript-eslint/no-empty-function */
import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation, useNavigate } from 'react-router-dom';

import authPicture from '../../../images/чел 1.png';
import mailIcon from '../../images/Mail.png';
import passwordIcon from '../../images/Hide.png';
import { useAppDispatch } from '../../store/hooks';
import StyledButton from '../Button/StyledButton';
import { StyledContainer } from './ChangeUserInfo.styles';
import AuthInput from '../Input/AuthInput';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  fullName: yup.string(),
});

type UserType = {
  email: string;
  fullName: string;
};

const SignIn: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit, reset, setError, formState: { errors } } = useForm<UserType>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmitHandler = async (data: UserType) => {
    try {
      const email = data.email;
      const fullName = data.fullName;
      // await dispatch(singIn({ email, password }));

      if (location.state) {
        navigate(location.state);
      } else {
        navigate('/');
      }
      reset();
    } catch (error) {
      const err = error as Error;

      if (err.message.includes('email')) {
        setError('email', {
          type: 'server',
          message: err.message,
        });
      }
    }
  };

  return (
    <StyledContainer className="sign-in">
      <form className="container" onSubmit={handleSubmit(onSubmitHandler)}>
        <AuthInput
          icon={mailIcon}
          labelText="Your email"
          type="text"
          reff={register('email').ref}
          name={register('email').name}
          onChange={register('email').onChange}
          onBlur={register('email').onBlur}
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
        />
        <span>{`${errors.email ? errors.email?.message : ''}`}</span>
        <AuthInput
          icon={passwordIcon}
          labelText="Your name"
          type="text"
          reff={register('fullName').ref}
          name={register('fullName').name}
          onChange={register('fullName').onChange}
          onBlur={register('fullName').onBlur}
          className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
        />
        <span>{`${errors.fullName ? errors.fullName?.message : ''}`}</span>
        <StyledButton className="auth" type="submit" onClick={() => { }} text="confirm" />
      </form>
    </StyledContainer>
  );
};

export default SignIn;
