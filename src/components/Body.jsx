import { links } from "./helper";
import slack from "./Assets/icons/slack.svg";
import github from "./Assets/icons/github.svg";

const Body = () => {
  return (
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
  );
};

export default Body;
