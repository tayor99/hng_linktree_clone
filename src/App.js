import profileImg from "./Assets/tayo.jpg";
function App() {
  return (
    <div className="app">
      <header>
        <div className="profile">
          <div className="profile__image">
            <img src={profileImg} alt="profileImg" />
          </div>
          <div className="profile__details">
            <p id="tweeterName">Tayor_Official</p>
            <p id="slack">Tayor99</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
