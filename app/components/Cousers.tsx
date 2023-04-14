import Link from "next/link";

interface Course {
  id: string;
  title: string;
  description: string;
  link: string;
  level: string;
}

async function fetchData() {
  const response = await fetch("http://localhost:3000/api/courses");
  const courses = response.json();
  return courses;
}

async function CoursePage() {
  const courses = await fetchData();

  return (
    <div>
      <h2>CoursePage</h2>
      {courses.map((course: Course) => (
        <div key={course.id}>
          <p>{course.title}</p>
          <p>{course.description}</p>
          <p>{course.level}</p>
          <Link href={course.link}>Go to Course</Link>
        </div>
      ))}
    </div>
  );
}

export default CoursePage;
