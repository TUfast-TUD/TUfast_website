import { FaGithub } from "react-icons/fa";
import styles from "../styles/GithubLink.module.scss";

const REPO_URL = "https://github.com/TUfast-TUD/TUfast_website";

export default function GithubLink() {
  return (
    <a
      href={REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.githubLink}
      aria-label="GitHub repository"
    >
      <FaGithub />
    </a>
  );
}
