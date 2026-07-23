import { useEffect } from "react";
import {
  FiUser,
  FiStar,
  FiClock,
  FiBarChart2,
  FiUsers,
} from "react-icons/fi";

function CourseDetailsModal({ course, onClose }) {
  if (!course) return null;
  useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [onClose]);


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 transition-opacity duration-300"  onClick={onClose}>
      <div
   role="dialog"
  aria-modal="true"
  aria-labelledby="course-title"
  onClick={(e) => e.stopPropagation()}
  className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-xl"
>
        
        {/* Header */}
 <div className="flex items-center justify-between border-b p-5">
 <h2
  id="course-title"
  className="text-2xl font-bold text-slate-900" 
>
  {course.title}
</h2>
<button
  onClick={onClose}
  aria-label="Close course details"
  className="rounded-lg p-2 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary"
>
  ✕

  <span className="sr-only">
    Close course details
  </span>
</button>

</div>

        {/* Body */}
        <div className="p-5">
        <img
  src={course.image}
  alt={course.title}
  className="h-64 w-full rounded-xl object-cover"
/>

<div className="mt-6 space-y-4">

  <div className="flex items-center gap-2">
    <FiStar className="text-yellow-500" />
    <span className="font-medium">
      {course.rating} / 5
    </span>
  </div>

  <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">

    <div className="flex items-center gap-2">
      <FiUser />
      <span>{course.instructor}</span>
    </div>

    <div className="flex items-center gap-2">
      <FiClock />
      <span>{course.duration}</span>
    </div>

    <div className="flex items-center gap-2">
      <FiBarChart2 />
      <span>{course.level}</span>
    </div>

    <div className="flex items-center gap-2">
      <FiUsers />
      <span>{course.students} Students</span>
    </div>

  </div>

</div>



          <p className="mt-6 text-slate-600 leading-relaxed">
  {course.description}
</p>

<div className="mt-6 flex flex-wrap gap-3">

  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
    {course.category}
  </span>

  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
    {course.status}
  </span>

</div>

{/* Progress Section */}
<div className="mt-6">
  <div className="mb-2 flex items-center justify-between">
    <h3 className="text-sm font-semibold text-slate-700">
      Progress
    </h3>

    <span className="text-sm font-medium text-primary">
      {course.progress}%
    </span>
  </div>

  <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
    <div
      className="h-full rounded-full bg-primary transition-all duration-500"
      style={{ width: `${course.progress}%` }}
    />
  </div>
</div>

{/* Start Learning Button */}
<div className="mt-8">
  <button
    className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:scale-[0.98]"
  >
    Start Learning
  </button>
</div>


        </div>

      </div>
    </div>
  );
}

export default CourseDetailsModal;