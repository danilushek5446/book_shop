/* eslint-disable @typescript-eslint/no-empty-function */
import type { FC } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import mailIcon from '../../images/Mail.png';
import passwordIcon from '../../images/Hide.png';
import { useAppDispatch } from '../../store/hooks';
import StyledButton from '../Button/StyledButton';
import { StyledContainer } from './ChangeUserInfo.styles';
import AuthInput from '../Input/AuthInput';
import { changeUserInfo } from '../../store/user/userThunk';
import type { ChangeInfoType } from '../../types/types';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  fullName: yup.string(),
});

type PropType = {
  isChangeInfo: () => void;
  email: string;
  fullName: string;
};

const SignIn: FC<PropType> = ({ isChangeInfo, email, fullName }) => {
  const dispatch = useAppDispatch();
  const { setValue, register, handleSubmit,
    reset, setError, formState: { errors } } = useForm<ChangeInfoType>({
      resolver: yupResolver(schema),
      mode: 'onBlur',
    });

  useEffect(() => {
    setValue('email', email);
    setValue('fullName', fullName);
  });

  const onSubmitHandler = async (data: ChangeInfoType) => {
    try {
      const email = data.email;
      const fullName = data.fullName;
      await dispatch(changeUserInfo({ email, fullName }));
      isChangeInfo();

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
        <StyledButton className="auth" type="submit" onClick={() => { }} text="confirm" />
      </form>
    </StyledContainer>
  );
};

export default SignIn;
