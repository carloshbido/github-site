"use client";

import { useState } from "react";

interface IProps {
  onSearchTerm: (value: string) => void;
  onFetchData: () => void;
}

function CourseSearch(props: IProps) {
  const { onSearchTerm, onFetchData } = props;

  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(event: React.SyntheticEvent<EventTarget>) {
    event.preventDefault();
    onSearchTerm(searchTerm);
    setSearchTerm("");
  }

  function handleClearSearchTerm() {
    onFetchData();
  }

  return (
    <form onSubmit={handleSearch} className="form-search">
      <input
        value={searchTerm}
        type="text"
        placeholder="Search course by term"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
      <button type="button" onClick={handleClearSearchTerm}>
        Clean Search
      </button>
    </form>
  );
}

export default CourseSearch;
