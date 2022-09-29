import type { FC } from 'react';

import { AuthStyledInputLabelsContainer } from './ProfileState.styles';

type PropType = {
  icon: string;
  labelText: string;
  name: string;
  text: string;
};

const ProfileState: FC<PropType> = ({ icon, labelText, name, text }) => {
  return (
    <AuthStyledInputLabelsContainer className={name}>
      <div id={name}>{text}</div>
      <img src={icon} alt="cannot load icon" />
      <label htmlFor={name}>{labelText}</label>
    </AuthStyledInputLabelsContainer>
  );
};

export default ProfileState;
