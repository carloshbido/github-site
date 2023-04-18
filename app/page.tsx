"use client";

import { useState, useEffect } from "react";

import CoursePage from "./components/Cousers";
import LoadingPage from "./loading";

function HomePage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch("../api/courses");
      const courses = await response.json();
      setCourses(courses);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleSearchTerm(searchTerm: string) {
    const response = await fetch(`../api/courses/search?course=${searchTerm}`);
    const courses = await response.json();
    setCourses(courses);
  }

  return (
    <>
      {loading && <LoadingPage />}

      {/* @ts-expect-error Async Server Component */}
      {!loading && <CoursePage courses={courses} onSearchTerm={handleSearchTerm} onFetchData={fetchData} />}
    </>
  );
}

export default HomePage;
