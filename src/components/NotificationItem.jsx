function NotificationItem({ notification }) {
  return (
    <div
     className={`cursor-pointer rounded-lg p-3 transition-all hover:bg-slate-100 ${
        notification.isRead
          ? "bg-white"
          : "bg-blue-50 border-l-4 border-blue-500"
      }`}
    >
      <h4 className="font-semibold text-slate-800">
        {notification.title}
      </h4>

      <p className="mt-1 text-sm text-slate-600">
        {notification.message}
      </p>

      <span className="mt-2 block text-xs text-slate-400">
        {notification.time}
      </span>
    </div>
  );
}

export default NotificationItem;