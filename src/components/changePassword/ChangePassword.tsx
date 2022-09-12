/* eslint-disable @typescript-eslint/no-empty-function */
import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import passwordIcon from '../../images/Hide.png';
import { useAppDispatch } from '../../store/hooks';
import StyledButton from '../Button/StyledButton';
import { StyledContainer } from './ChangePassword.styles';
import AuthInput from '../Input/AuthInput';
import { changeUserPassword } from '../../store/user/userThunk';
import type { UserChangePasswordType } from '../../types/types';

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
  const { register, handleSubmit,
    reset, setError, formState: { errors } } = useForm<UserChangePasswordType>({
      resolver: yupResolver(schema),
      mode: 'onBlur',
    });

  const onSubmitHandler = async (data: UserChangePasswordType) => {
    // eslint-disable-next-line no-console
    console.log('privet', data);
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
      <AuthInput
          icon={passwordIcon}
          labelText="Old password"
          type="password"
          reff={register('oldPassword').ref}
          name={register('oldPassword').name}
          onChange={register('oldPassword').onChange}
          onBlur={register('oldPassword').onBlur}
          className={`form-control ${errors.oldPassword ? 'is-invalid' : ''}`}
        />
        <span>{`${errors.oldPassword ? errors.oldPassword?.message : ''}`}</span>
        <AuthInput
          icon={passwordIcon}
          labelText="New password"
          type="password"
          reff={register('newPassword').ref}
          name={register('newPassword').name}
          onChange={register('newPassword').onChange}
          onBlur={register('newPassword').onBlur}
          className={`form-control ${errors.newPassword ? 'is-invalid' : ''}`}
        />
        <span>{`${errors.newPassword ? errors.newPassword?.message : ''}`}</span>
        <AuthInput
          icon={passwordIcon}
          labelText="Password reply"
          type="password"
          reff={register('confirmPass').ref}
          name={register('confirmPass').name}
          onChange={register('confirmPass').onChange}
          onBlur={register('confirmPass').onBlur}
          className={`form-control ${errors.confirmPass ? 'is-invalid' : ''}`}
        />
        <span>{`${errors.confirmPass ? errors.confirmPass?.message : 'Repeat your password without errors'}`}</span>
        <StyledButton className="auth" type="submit" onClick={() => { }} text="confirm" />
      </form>
    </StyledContainer>
  );
};

export default SignIn;
