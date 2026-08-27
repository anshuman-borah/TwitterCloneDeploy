import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Explore = () => {
  return (
    <div className="py-5">
      <h1 className="text-xl font-bold mb-5">Explore</h1>
      <div className="flex flex-col items-center justify-center py-20 text-gray-500">
        <SearchIcon sx={{ fontSize: 60 }} />
        <h2 className="mt-4 text-lg font-semibold">Try searching for something</h2>
        <p className="mt-2">Use the search bar to find people, topics, or tweets.</p>
      </div>
    </div>
  );
};

export default Explore;
