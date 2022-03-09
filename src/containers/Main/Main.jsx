import React from "react";
import Nav from "../../components/Navbar/Nav";
import SearchBar from "../../components/SearchBar/SearchBar";
import CourseSection from "../../components/CourseSection/CourseSection";

const Main = () => {
  return (
    <div>
      <Nav />
      <SearchBar />
      <CourseSection />
    </div>
  );
};

export default Main;
