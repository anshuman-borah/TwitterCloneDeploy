import React from "react";
import { navigationMenu } from "../../Utils/NavigationMenu";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Store/Auth/Action";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const { auth } = useSelector((store) => store);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openLogoutMenu = Boolean(anchorEl);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenLogoutMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleClose();
  };

  const handleNavigate = (title) => {
    if (title === "Profile") {
      navigate(`/profile/${auth.user?.id}`);
    } else if (title === "Home") {
      navigate("/home");
    } else {
      navigate(`/${title.toLowerCase()}`);
    }
  };

  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between py-5">
      {/* TOP */}
      <div className="flex-1 overflow-y-auto hideScrollbar">
        <div className="py-5">
          <img
            className="w-10"
            src="https://cdn.pixabay.com/photo/2013/06/07/09/53/twitter-117595_1280.png"
            alt="logo"
          />
        </div>
        <div className="space-y-6">
          {navigationMenu.map((item) => (
            <div
              key={item.title}
              onClick={() => handleNavigate(item.title)}
              className="cursor-pointer flex space-x-3 items-center hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full px-3 py-2 transition-colors"
            >
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="py-10">
          <Button
            sx={{
              width: "100%",
              borderRadius: "29px",
              py: "15px",
              bgcolor: "#1d9bf0",
            }}
            variant="contained"
            size="large"
          >
            Tweet
          </Button>
        </div>
      </div>

      {/* BOTTOM - user profile */}
      <div className="flex items-center justify-between pt-3">
        <div className="flex items-center space-x-3">
          <Avatar
            alt={auth.user?.fullName || "User"}
            src={
              auth.user?.image ||
              "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
            }
          />
          <div>
            <p className="font-bold">{auth.user?.fullName}</p>
            <p className="opacity-70">
              @{auth.user?.fullName?.split(" ")[0]?.toLowerCase()}
            </p>
          </div>
        </div>
        <Button
          id="basic-button"
          aria-controls={openLogoutMenu ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openLogoutMenu ? "true" : undefined}
          onClick={handleOpenLogoutMenu}
        >
          <MoreHorizIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openLogoutMenu}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "bottom", horizontal: "right" }}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Navigation;
