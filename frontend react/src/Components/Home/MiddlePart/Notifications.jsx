import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Notifications = () => {
  return (
    <div className="py-5">
      <h1 className="text-xl font-bold mb-5">Notifications</h1>
      <div className="flex flex-col items-center justify-center py-20 text-gray-500">
        <NotificationsIcon sx={{ fontSize: 60 }} />
        <h2 className="mt-4 text-lg font-semibold">Nothing to see here — yet</h2>
        <p className="mt-2">When someone likes or replies, you'll see it here.</p>
      </div>
    </div>
  );
};

export default Notifications;
