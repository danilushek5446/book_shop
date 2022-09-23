/* eslint-disable @typescript-eslint/no-empty-function */
import type { FC } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import mailIcon from '../../../assets/icons/Mail.png';
import passwordIcon from '../../../assets/icons/Hide.png';
import { useAppDispatch } from '../../../store/hooks';
import type { ChangeInfoType } from '../../../types/types';
import { changeUserInfo } from '../../../store/user/userThunk';
import { StyledContainer } from './ChangeUserInfo.styles';
import AuthInput from '../../../components/Input/AuthInput';
import StyledButton from '../../../components/Button/StyledButton';

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
  const {
    setValue,
    register,
    handleSubmit,
    setError, formState: { errors } } = useForm<ChangeInfoType>({
      resolver: yupResolver(schema),
      mode: 'onBlur',
    });

  useEffect(() => {
    setValue('email', email);
    setValue('fullName', fullName);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clearEmail = () => {
    setValue('email', '');
  };

  const clearFullname = () => {
    setValue('fullName', '');
  };

  const onSubmitHandler = async (data: ChangeInfoType) => {
    try {
      const email = data.email;
      const fullName = data.fullName;
      await dispatch(changeUserInfo({ email, fullName }));
      isChangeInfo();
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
    <StyledContainer className="change-info">
      <form className="container" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="input-container">
          <AuthInput
            icon={passwordIcon}
            labelText="Your name"
            type="text"
            inputRef={register('fullName').ref}
            name={register('fullName').name}
            onChange={register('fullName').onChange}
            onBlur={register('fullName').onBlur}
            onDeleteClick={clearFullname}
            className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
          />
          <span>{`${errors.fullName ? errors.fullName?.message : 'Enter your name'}`}</span>
        </div>
        <div className="input-container">
          <AuthInput
            icon={mailIcon}
            labelText="Your email"
            type="text"
            inputRef={register('email').ref}
            name={register('email').name}
            onChange={register('email').onChange}
            onBlur={register('email').onBlur}
            onDeleteClick={clearEmail}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          <span>{`${errors.email ? errors.email?.message : 'Enter your email'}`}</span>
        </div>
        <div className="button-container">
          <StyledButton className="auth" type="submit" onClick={() => { }} text="confirm" />
        </div>
      </form>
    </StyledContainer>
  );
};

export default SignIn;
