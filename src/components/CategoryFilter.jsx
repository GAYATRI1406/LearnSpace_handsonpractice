// Category filter buttons with conditional Tailwind classes for the active state.
function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
            activeCategory === category
              ? "bg-primary text-white shadow-md"
              : "bg-white text-slate-600 shadow-sm hover:bg-primary-light hover:text-primary"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
