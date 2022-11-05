import Avatar from "../../atoms/Avatar/Avatar";
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
        <Avatar className="avatar avatar__icon header__avatar" />
        <Button className="header__button" text="UPLOAD" icon={buttonIcon} />
      </div>
    </header>
  );
}

export default Header;
