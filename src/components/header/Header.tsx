import Ad from '../ad/Ad';
import foto from '../../../public/images/logo.png';

function Header() {
  return (
    <div className="header">
      <div className="container">
      <img src={foto} alt="sdtfsdt" />
      <span>title</span>
      <input type="text" />
      <button>Log In/ Sing Up</button>
      </div>
      <Ad />
    </div>
  );
}

export default Header;
