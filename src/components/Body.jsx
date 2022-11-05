import { links } from "../helper";
import slack from "../Assets/icons/slack.svg";
import github from "../Assets/icons/github.svg";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <main>
      <div className="links">
        {links.map((link) => {
          return link.path ? (
            <Link
              key={link.id}
              className="btn"
              id={link.id}
              to={`${link.link}`}
            >
              {link.name}
            </Link>
          ) : (
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
    </main>
  );
};

export default Body;
