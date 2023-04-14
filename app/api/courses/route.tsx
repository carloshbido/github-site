import { NextResponse } from "next/server";

import courses from "./data.json";

export async function GET(request: Request) {
  return NextResponse.json(courses);
}

export async function POST(request: Request) {
  const course = await request.json();

  const id: string = `${Math.random() * 100}.${Math.floor(Math.random() * 1000)}`;

  const newCourse = {
    id,
    ...course,
  };

  courses.push(newCourse);

  return NextResponse.json({ message: "Course created", course: newCourse });
}
