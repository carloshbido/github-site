async function fetchRepo(name: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`https://api.github.com/repos/carloshbido/${name}`);
  const repo = await response.json();
  return repo;
}

async function Repo(props: { name: string }) {
  const repo = await fetchRepo(props.name);

  return (
    <>
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <p>Stars: {repo.stargazers_count}</p>
      <p>Forks: {repo.forks_count}</p>
      <p>Watches: {repo.watchers_count}</p>
    </>
  );
}

export default Repo;
