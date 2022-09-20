/* eslint-disable @typescript-eslint/no-empty-function */
import type { FC } from 'react';
import { useState } from 'react';

import profile from '../../../assets/icons/UserprofileInProfile.png';
import mail from '../../../assets/icons/Mail.png';
import camera from '../../../assets/icons/Camera.svg';
import passwordIcon from '../../../assets/icons/Hide.png';
import userPhoto from '../../../assets/images/User photo.png';
import ProfileState from '../profileStates/ProfileState';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { StyledProfile } from './ProfileState.styles';
import ChangeUSerInfo from '../changeUserInfo/ChangeUSerInfo';
import ChangePassword from '../changePassword/ChangePassword';
import PageIcons from '../../../components/pageIcons/PageIcons';
import { uploadUserPhoto } from '../../../store/user/userThunk';

const UserProfile: FC = () => {
  const [isChangeInfo, setIsChangeInfo] = useState(false);
  const [isChangePass, setIsChangePass] = useState(false);
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  const changeInfo = () => {
    setIsChangeInfo(!isChangeInfo);
  };

  const changePass = () => {
    setIsChangePass(!isChangePass);
  };

  const uploadAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = async (event) => {
        const photo = event.target?.result;
        if (photo) {
          await dispatch(uploadUserPhoto({ photo }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <StyledProfile>
      <div className="container">
        <div className="image-container">
          <img src={user.photo ? user.photo : userPhoto} className="avatar" alt="cannot load picture" />
          <label className="upload-container" htmlFor="file-input">
            <PageIcons picture={camera} onClick={() => { }}
            />
            <input id="file-input" className="upload" type="file" onChange={uploadAvatar} />
          </label>
        </div>
        <div className="info-container">
          <div className="change-info-container">
            <span className="title">Personal information</span>
            <span onClick={changeInfo} className="change-info-title">Change information</span>
          </div>
          {isChangeInfo
            ? (<ChangeUSerInfo
              fullName={user.fullName || ''}
              email={user.email}
              isChangeInfo={changeInfo}
            />)
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
          <div className="change-info-container change-password">
            <span className="title">Password</span>
            <span onClick={changePass} className="change-info-title">Change Password</span>
          </div>
          {isChangePass
            ? (<ChangePassword
              fullName={user.fullName || ''}
              email={user.email}
              isChangePasswrod={changePass}
            />)
            : (<ProfileState
              icon={passwordIcon}
              labelText="Your password"
              name="profile-info"
              text="********"
            />)
          }
        </div>
      </div>
    </StyledProfile>
  );
};

export default UserProfile;
