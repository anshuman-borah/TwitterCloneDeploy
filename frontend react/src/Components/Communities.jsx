import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";

const Communities = () => {
  return (
    <div className="py-5">
      <h1 className="text-xl font-bold mb-5">Communities</h1>
      <div className="flex flex-col items-center justify-center py-20 text-gray-500">
        <GroupsIcon sx={{ fontSize: 60 }} />
        <h2 className="mt-4 text-lg font-semibold">Discover new Communities</h2>
        <p className="mt-2 text-center">Connect with people who share your interests.</p>
      </div>
    </div>
  );
};

export default Communities;
