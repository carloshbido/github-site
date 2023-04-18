import Link from "next/link";

import CourseSearch from "./CourseSearch";

interface IProps {
  onSearchTerm: (searchTerm: string) => void;
  onFetchData: () => void;
  courses: Array<ICourse>;
}

interface ICourse {
  id: string;
  title: string;
  description: string;
  link: string;
  level: string;
}

async function CoursePage(props: IProps) {
  const { courses, onSearchTerm, onFetchData } = props;

  return (
    <div>
      <h2>Course Page</h2>
      <CourseSearch onSearchTerm={onSearchTerm} onFetchData={onFetchData} />
      {courses.map((course: ICourse) => (
        <div key={course.id} className="card">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <div className="card__footer">
            <p>
              <strong>Level: </strong>
              {course.level}
            </p>
            <Link href={course.link} className="ancor">
              Go to Course
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CoursePage;
