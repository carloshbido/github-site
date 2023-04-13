import Link from "next/link";

interface Content {
  path: string;
  name: string;
}

async function fetchRepoContents(name: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`https://api.github.com/repos/carloshbido/${name}/contents`);
  const repo = await response.json();
  return repo;
}

async function RepoDirs(props: { name: string }) {
  const contents = await fetchRepoContents(props.name);
  const dirs = contents.filter((element: any) => element.type === "dir");

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir: Content) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${props.name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RepoDirs;
