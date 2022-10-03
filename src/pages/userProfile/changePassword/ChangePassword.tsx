/* eslint-disable @typescript-eslint/no-empty-function */
import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import passwordIcon from '../../../assets/icons/Hide.png';
import { useAppDispatch } from '../../../store/hooks';
import type { UserChangePasswordType } from '../../../types/userTypes';
import { StyledContainer } from './ChangePassword.styles';
import AuthInput from '../../../components/Input/AuthInput';
import StyledButton from '../../../components/Button/StyledButton';
import { changeUserPassword } from '../../../store/user/userThunk';

const schema = yup.object().shape({
  oldPassword: yup.string().min(4).max(32).required(),
  newPassword: yup.string().min(4).max(32).required(),
  confirmPass: yup.string().min(4).max(32).required(),
});

type PropType = {
  isChangePasswrod: () => void;
  email: string;
  fullName: string;
};

const SignIn: FC<PropType> = ({ isChangePasswrod }) => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, setValue,
    reset, setError, formState: { errors } } = useForm<UserChangePasswordType>({
      resolver: yupResolver(schema),
      mode: 'onBlur',
    });

  const clearOldPassword = () => {
    setValue('oldPassword', '');
  };

  const clearNewPassword = () => {
    setValue('newPassword', '');
  };

  const clearConfirmPassword = () => {
    setValue('confirmPass', '');
  };

  const onSubmitHandler = async (data: UserChangePasswordType) => {
    try {
      const oldPassword = data.oldPassword;
      const newPassword = data.newPassword;

      if (newPassword !== data.confirmPass) {
        setError('confirmPass', {
          type: 'value',
          message: 'passwords must be matched',
        });
        return;
      }
      await dispatch(changeUserPassword({ oldPassword, newPassword }));

      isChangePasswrod();
      reset();
    } catch (error) {
      const err = error as Error;

      if (err.message.includes('password')) {
        setError('oldPassword', {
          type: 'server',
          message: err.message,
        });
      }
    }
  };

  return (
    <StyledContainer className="sign-in">
      <form className="container" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="input-container">
          <AuthInput
            icon={passwordIcon}
            labelText="Old password"
            type="password"
            inputRef={register('oldPassword').ref}
            name={register('oldPassword').name}
            onChange={register('oldPassword').onChange}
            onBlur={register('oldPassword').onBlur}
            onDeleteClick={clearOldPassword}
            className={`form-control ${errors.oldPassword ? 'is-invalid' : ''}`}
          />
          <span>{`${errors.oldPassword ? errors.oldPassword?.message : 'enter your old password'}`}</span>
        </div>
        <div className="input-container">
          <AuthInput
            icon={passwordIcon}
            labelText="New password"
            type="password"
            inputRef={register('newPassword').ref}
            name={register('newPassword').name}
            onChange={register('newPassword').onChange}
            onBlur={register('newPassword').onBlur}
            onDeleteClick={clearNewPassword}
            className={`form-control ${errors.newPassword ? 'is-invalid' : ''}`}
          />
          <span>{`${errors.newPassword ? errors.newPassword?.message : 'enter your new password'}`}</span>
        </div>
        <div className="input-container">
          <AuthInput
            icon={passwordIcon}
            labelText="Password reply"
            type="password"
            inputRef={register('confirmPass').ref}
            name={register('confirmPass').name}
            onChange={register('confirmPass').onChange}
            onBlur={register('confirmPass').onBlur}
            onDeleteClick={clearConfirmPassword}
            className={`form-control ${errors.confirmPass ? 'is-invalid' : ''}`}
          />
          <span>{`${errors.confirmPass ? errors.confirmPass?.message : 'Repeat your new password without errors'}`}</span>
        </div>
        <div className="button-container">
          <StyledButton className="auth" type="submit" onClick={() => { }} text="confirm" />
        </div>
      </form>
    </StyledContainer>
  );
};

export default SignIn;
