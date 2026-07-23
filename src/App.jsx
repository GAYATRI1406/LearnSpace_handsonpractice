import CourseDetailsModal from "./components/CourseDetailsModal";
import { useState } from "react";
import {
  FiBook,
  FiCheckCircle,
  FiClock,
  FiAward,
} from "react-icons/fi";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsCard from "./components/StatsCard";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import CourseGrid from "./components/CourseGrid";
import Footer from "./components/Footer";
import { courses, categories } from "./data/courses";

function App() {
  const [searchText, setSearchText] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Learning statistics derived from the course data
  const stats = [
    {
      icon: FiBook,
      value: courses.length,
      title: "Total Courses",
      iconClasses: "bg-primary-light text-primary",
    },
    {
      icon: FiCheckCircle,
      value: courses.filter((c) => c.status === "Completed").length,
      title: "Completed Courses",
      iconClasses: "bg-green-100 text-green-600",
    },
    {
      icon: FiClock,
      value: courses.filter((c) => c.status === "In Progress").length,
      title: "Courses In Progress",
      iconClasses: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: FiAward,
      value: courses.filter((c) => c.status === "Completed").length,
      title: "Certificates Earned",
      iconClasses: "bg-secondary-light text-secondary",
    },
  ];

  // Courses currently in progress → "Continue Learning" section
  const inProgressCourses = courses.filter(
    (course) => course.status === "In Progress"
  );

  // Search (case-insensitive) + category filter → main course grid
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || course.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Learning Statistics: 1 col mobile, 2 tablet, 4 desktop */}
        <section className="-mt-0 py-10">
          <h2 className="font-heading text-2xl font-bold text-slate-900">
            Learning Statistics
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatsCard key={stat.title} {...stat} />
            ))}
          </div>
        </section>

        {/* Continue Learning: only "In Progress" courses */}
        <section className="py-10">
          <h2 className="font-heading text-2xl font-bold text-slate-900">
            Continue Learning
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Pick up where you left off.
          </p>
          <div className="mt-6">
            <CourseGrid
             courses={inProgressCourses}
             onViewDetails={setSelectedCourse}
            />
          </div>
        </section>

        {/* Explore Courses: search + category filters + grid */}
        <section id="courses" className="py-10">
          <h2 className="font-heading text-2xl font-bold text-slate-900">
            Explore Courses
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Search and filter through all available courses.
          </p>

          <div className="mt-6 flex flex-col gap-5">
            <SearchBar searchText={searchText} onSearchChange={setSearchText} />
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            <CourseGrid
            courses={filteredCourses}
            onViewDetails={setSelectedCourse}
            />
          </div>
        </section>
      </main>

      <Footer />

      {selectedCourse && (
        <CourseDetailsModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </div>
  );
}

export default App;
