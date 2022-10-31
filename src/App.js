import slack from "./Assets/icons/slack.svg";
import github from "./Assets/icons/github.svg";
import zuriLogo from "./Assets/Zuri.Internship_Logo.png";
import I4G from "./Assets/i4g.png";
import { links } from "./helper";
import Header from "./components/Header";
function App() {
  return (
    <div className="app">
      <Header />
      <section>
        <div className="links">
          {links.map((link) => {
            return (
              <a
                key={link.id}
                href={link.link}
                className="btn"
                target="_blank"
                rel="noreferrer"
                id={link.id}
              >
                {link.name}
              </a>
            );
          })}
        </div>
        <div className="project_links">
          <a href="/" id="slack__icon">
            <img src={slack} alt="slack" />
          </a>

          <a
            href="https://github.com/tayor99/hng_linktree_clone"
            id="github"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="slack" />
          </a>
        </div>
      </section>
      <footer>
        <div className="zuri__logo">
          <img src={zuriLogo} alt="zurilogo" />
        </div>
        <p className="task">HNG Internship 9 Frontend Task</p>
        <div className="I4G__logo">
          <img src={I4G} alt="I4G logo" />
        </div>
      </footer>
    </div>
  );
}

export default App;
