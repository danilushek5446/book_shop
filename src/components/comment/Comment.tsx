import type { FC } from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { toast } from 'react-toastify';

import { StyledCommentContainer } from './Comment.styles';
import userApi from '../../http/userApi';
import UserPhoto from '../../assets/images/User photo.png';

type PropType = {
  UserId: number;
  date: Date;
  comment: string;
};

const Comment: FC<PropType> = ({ comment, UserId, date }) => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const user = await userApi.getUser(UserId);

        if (user.photo) {
          setImage(user.photo);
        }

        if (user.fullName) {
          setName(user.fullName);
        }
      } catch (error) {
        const err = error as Error;
        toast(err.message);
      }
    })();
  });

  return (
    <StyledCommentContainer className="comment-content">
      <div className="avatar-container">
      <img
        src={image ? `${process.env.REACT_APP_API_URL}${image}` : UserPhoto}
        alt="cannot load"
        className="avatar"
      />
      </div>
      <div className="info-container">
        <span className="name">{name}</span>
        <span className="dateOfPost">{moment(date).fromNow()}</span>
        <span className="comment">{comment}</span>
      </div>
    </StyledCommentContainer>
  );
};

export default Comment;
