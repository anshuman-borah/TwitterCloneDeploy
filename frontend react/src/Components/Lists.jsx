import React from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";

const Lists = () => {
  return (
    <div className="py-5">
      <h1 className="text-xl font-bold mb-5">Lists</h1>
      <div className="flex flex-col items-center justify-center py-20 text-gray-500">
        <ListAltIcon sx={{ fontSize: 60 }} />
        <h2 className="mt-4 text-lg font-semibold">You don't have any Lists yet</h2>
        <p className="mt-2 text-center">When you create Lists, they'll show up here.</p>
      </div>
    </div>
  );
};

export default Lists;
