import type { FC } from 'react';
import { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import profile from '../../images/UserprofileInProfile.png';
import mail from '../../images/Mail.png';
import passwordIcon from '../../images/Hide.png';
import userPhoto from '../../images/User photo.png';
import ProfileState from '../profileStates/ProfileState';
import { useAppSelector } from '../../store/hooks';
import { StyledProfile } from './ProfileState.styles';
import { changeUserInfo } from '../../store/user/userThunk';
import ChangeUSerInfo from '../changeUserInfo/ChangeUSerInfo';

const UserProfile: FC = () => {
  const [isChangeInfo, setIsChangeInfo] = useState(false);
  const [isChangePass, setIsChangePass] = useState(false);
  // console.log(isChangeInfo);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const user = useAppSelector((state) => state.user.user);

  // const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  // };

  // const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // };

  const changeInfo = () => {
    setIsChangeInfo(true);
  };

  const changePass = () => {
    setIsChangePass(true);
  };

  return (
    <StyledProfile>
      <div className="container">
        <img src={userPhoto} alt="cannot load picture" />
        <div className="info-container">
          <div className="change-info-container">
            <span>Personal information</span>
            <span onClick={changeInfo} className="change-info">Change information</span>
          </div>
          {isChangeInfo
            ? <ChangeUSerInfo />
            : (<><ProfileState
              icon={profile}
              labelText="Your name"
              name="profile-info"
              text={user.fullName || ''}
                  />
              <ProfileState
                icon={mail}
                labelText="Your email"
                name="profile-info"
                text={user.email || ''}
                  />
               </>)
          }
          <div className="change-info-container">
            <span>Password</span>
            <span onClick={changePass} className="change-info">Change Password</span>
          </div>
          <ProfileState
            icon={passwordIcon}
            labelText="Your password"
            name="profile-info"
            text="password lol"
          />
        </div>
      </div>
    </StyledProfile>
  );
};

export default UserProfile;
