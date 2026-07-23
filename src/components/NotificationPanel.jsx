import notifications from "../data/notifications";
import NotificationItem from "./NotificationItem";

function NotificationPanel() {
  return (
<div className="absolute right-0 z-40 mt-2 w-80 max-h-96 origin-top-right overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl transition-all duration-200">
      <div className="border-b p-4">
        <h3 className="font-semibold text-slate-800">
          Notifications
        </h3>
      </div>

      <div className="max-h-80 overflow-y-auto p-3 space-y-3">
        {notifications.map((item) => (
          <NotificationItem
            key={item.id}
            notification={item}
          />
        ))}
      </div>

      <div className="border-t p-3 text-center font-medium text-primary hover:bg-slate-50 cursor-pointer">
        View All Notifications
      </div>
    </div>
  );
}

export default NotificationPanel;