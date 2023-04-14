import { NextResponse } from "next/server";

import courses from "../data.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  // localhost:3000/api/courses/search?course=react | searchParams = { 'course' => 'react' }

  const searchCourse: string | any = searchParams.get("course");
  const filteredCourses = courses.filter((courseItem) =>
    courseItem.description.toLowerCase().includes(searchCourse.toLowerCase()),
  );

  return NextResponse.json(filteredCourses);
}
