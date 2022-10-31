import profileImg from "../Assets/tayo.jpg";

const Header = () => {
  return (
    <header>
      <div className="profile">
        <div className="profile__image">
          <img src={profileImg} alt="profileImg" />
        </div>
        <div className="profile__details">
          <p id="twitter">Tayor_Official</p>
          <p id="slack">Tayor99</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
