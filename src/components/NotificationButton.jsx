import { FiBell } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import NotificationPanel from "./NotificationPanel";

function NotificationButton() {
const unreadCount = 3;
const [isOpen, setIsOpen] = useState(false);

const notificationRef = useRef(null);

useEffect(() => {
  function handleClickOutside(event) {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);


  return (
  <>
    <div
  ref={notificationRef}
  className="relative"
>
    <button
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Open notifications"
       className="relative rounded-full p-2 text-slate-600 transition-all hover:bg-primary-light hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary active:scale-95"
    >
      <FiBell className="h-5 w-5" />

      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
        {unreadCount}
      </span>

      <span className="sr-only">Open notifications</span>
    </button>

    {isOpen && <NotificationPanel/>}
    </div>
  </>

  );
}

export default NotificationButton;