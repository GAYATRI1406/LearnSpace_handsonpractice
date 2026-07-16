import { FiSearch } from "react-icons/fi";

// Controlled search input — state lives in App so it can filter the course grid.
function SearchBar({ searchText, onSearchChange }) {
  return (
    <div className="relative w-full max-w-xl">
      <FiSearch className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
      <input
        type="text"
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search for courses..."
        className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm text-slate-800 shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary-light"
      />
    </div>
  );
}

export default SearchBar;
