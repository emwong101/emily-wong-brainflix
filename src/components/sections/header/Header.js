import Avatar from "../../../assets/Images/Mohan-muruge.jpg";
import Button from "../../atoms/button/Button";
import Logo from "../../../assets/Images/BrainFlix-logo.svg";
import buttonIcon from "../../../assets/Images/upload.svg";
import "../header/header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__logo--container">
        <img src={Logo} alt="header logo" className="header__logo--image" />
      </div>
      <div className="header__search--container">
        <input
          type="text"
          className="header__search"
          placeholder="Search"
        ></input>
        <img
          className="header__avatar--mobile"
          src={Avatar}
          alt="header avatar"
        />
      </div>
      <Button className="header__button" text="UPLOAD" icon={buttonIcon} />
      <img
        className="header__avatar--tablet"
        src={Avatar}
        alt="header avatar"
      />
    </header>
  );
}

export default Header;
