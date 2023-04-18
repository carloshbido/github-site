import Link from "next/link";
import { AiFillStar, AiFillEye } from "react-icons/ai";

interface Repo {
  id: string;
  name: string;
  description?: string;
  details: string;
  stargazers_count: string;
  watchers_count: string;
}

async function fetchRepos() {
  const response = await fetch("https://api.github.com/users/carloshbido/repos");
  const repos = await response.json();
  return repos;
}

async function ReposPage() {
  const repos = await fetchRepos();

  return (
    <div>
      <h2>Repositories</h2>
      {repos.map((repo: Repo) => (
        <div key={repo.id} className="card">
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
          <div className="card__footer">
            <p className="card__tip">
              <AiFillStar size={24} />
              {repo.stargazers_count}
            </p>
            <p className="card__tip">
              <AiFillEye size={24} />
              {repo.watchers_count}
            </p>
            <Link href={`/code/repos/${repo.name}`} className="ancor">
              Click here to see de repo
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReposPage;
