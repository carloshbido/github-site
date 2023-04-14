import CoursePage from "./components/Cousers";

function HomePage() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <CoursePage />;
    </>
  );
}

export default HomePage;
