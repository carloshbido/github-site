import Link from "next/link";

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
        <div key={repo.id}>
          <p>{repo.name}</p>
          <p>{repo.description}</p>
          <p>{repo.stargazers_count}</p>
          <p>{repo.watchers_count}</p>
          <Link href={`/code/repos/${repo.name}`}>Click here to see de repo</Link>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}

export default ReposPage;
