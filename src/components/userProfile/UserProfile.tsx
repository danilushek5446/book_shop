import type { FC } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import profile from '../../images/UserprofileInProfile.png';
import mail from '../../images/Mail.png';
import passwordIcon from '../../images/Hide.png';
import userPhoto from '../../images/User photo.png';
import ProfileState from '../profileStates/ProfileState';
import { useAppSelector } from '../../store/hooks';
import type { RootStateType } from '../../store/store';

const UserProfile: FC = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const user = useAppSelector((state: RootStateType) => state.user);

  // const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  // };

  // const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // };

  return (
    <div>
      <img src={userPhoto} alt="cannot load picture" />
      <div className="info-container">
        <span>Password</span>
        <ProfileState
          icon={profile}
          labelText="Your name"
          name="full-name"
          text={user.fullName || ''}
        />
        <ProfileState
          icon={mail}
          labelText="Your email"
          name="email"
          text={user.email || ''}
        />
        <span>Password</span>
        <ProfileState
          icon={passwordIcon}
          labelText="Your password"
          name="password"
          text="password lol"
        />
      </div>
    </div>
  );
};

export default UserProfile;
