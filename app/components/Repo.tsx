import { AiFillStar, AiFillEye, AiOutlineFork } from "react-icons/ai";

async function fetchRepo(name: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`https://api.github.com/repos/carloshbido/${name}`);
  const repo = await response.json();
  return repo;
}

async function Repo(props: { name: string }) {
  const repo = await fetchRepo(props.name);

  return (
    <div className="card">
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <div className="card__footer">
        <p className="card__tip">
          <AiFillStar size={24} />
          Stars: {repo.stargazers_count}
        </p>
        <p className="card__tip">
          <AiOutlineFork size={24} />
          Forks: {repo.forks_count}
        </p>
        <p className="card__tip">
          <AiFillEye size={24} />
          AiFillEye: {repo.watchers_count}
        </p>
      </div>
    </div>
  );
}

export default Repo;
