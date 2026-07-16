// Conditional status styles — full class names are written out
// so Tailwind can detect them (never build classes like `bg-${color}-500`).
const statusStyles = {
  Completed: "bg-green-100 text-green-700",
  "In Progress": "bg-yellow-100 text-yellow-700",
  "Not Started": "bg-gray-100 text-gray-700",
};

const buttonLabels = {
  Completed: "View Certificate",
  "In Progress": "Continue Learning",
  "Not Started": "Start Course",
};

function CourseCard({ course }) {
  const { title, description, category, image, progress, status } = course;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      {/* Course image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-white">
          {category}
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-lg font-semibold text-slate-900">
            {title}
          </h3>
          <span
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}
          >
            {status}
          </span>
        </div>

        <p className="line-clamp-2 text-sm text-slate-500">{description}</p>

        {/* Progress bar */}
        <div className="mt-auto">
          <div className="mb-1 flex items-center justify-between text-xs font-medium text-slate-500">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <button className="mt-2 w-full rounded-xl bg-primary py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark">
          {buttonLabels[status]}
        </button>
      </div>
    </article>
  );
}

export default CourseCard;
