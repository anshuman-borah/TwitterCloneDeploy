import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Messages = () => {
  return (
    <div className="py-5">
      <h1 className="text-xl font-bold mb-5">Messages</h1>
      <div className="flex flex-col items-center justify-center py-20 text-gray-500">
        <MailOutlineIcon sx={{ fontSize: 60 }} />
        <h2 className="mt-4 text-lg font-semibold">Send a message, get a message</h2>
        <p className="mt-2 text-center">Direct Messages are private conversations between you and others.</p>
      </div>
    </div>
  );
};

export default Messages;
