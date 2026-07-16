// Reusable statistics card: icon + number + title.
function StatsCard({ icon: Icon, value, title, iconClasses }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${iconClasses}`}
      >
        <Icon className="h-6 w-6" />
      </span>
      <div>
        <p className="font-heading text-2xl font-bold text-slate-900">
          {value}
        </p>
        <p className="text-sm text-slate-500">{title}</p>
      </div>
    </div>
  );
}

export default StatsCard;
