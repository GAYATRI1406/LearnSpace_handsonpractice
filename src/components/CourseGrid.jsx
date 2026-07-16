import CourseCard from "./CourseCard";
import { FiInbox } from "react-icons/fi";

// Responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop.
function CourseGrid({ courses }) {
  if (courses.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-white py-16 text-center shadow-sm">
        <FiInbox className="h-12 w-12 text-slate-300" />
        <p className="font-heading text-lg font-semibold text-slate-700">
          No courses found.
        </p>
        <p className="text-sm text-slate-500">
          Try a different search term or category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CourseGrid;
