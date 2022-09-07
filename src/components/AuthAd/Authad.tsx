import type { FC } from 'react';
import StyleButton from '../Button/StyledButton';

const Authad: FC = () => {
  return (
    <div className="ad">
      <h2>Authorize now</h2>
      <span>Authorize now and discover the fabulous world of books</span>
      {/* <StyleButton onClick={() => {}} text="Log In/ Sing Up" /> */}
    </div>
  );
};

export default Authad;
