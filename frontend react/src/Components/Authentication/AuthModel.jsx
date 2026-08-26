import {
  Box,
  Button,
  Modal,
} from "@mui/material";

import SignupForm from "./SignupForm";
import SigninForm from "./SigninForm";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useEffect } from "react";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  outline: "none",
};

const AuthModel = ({ handleClose, isOpen }) => {

  const location = useLocation();
  const navigate = useNavigate();

  const { auth } = useSelector((store) => store);

  const handleNavigate = () => {

    const path =
      location.pathname === "/signup"
        ? "/signin"
        : "/signup";

    navigate(path);
  };

  useEffect(() => {

    if (auth.user?.fullName) {
      handleClose();
    }

  }, [auth.user, handleClose]);

  return (
    <div>

      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>

          <h1 className="text-center font-bold text-3xl pb-20">
            Create your account
          </h1>

          {location.pathname === "/signup" ? (
            <SignupForm />
          ) : (
            <SigninForm />
          )}

          <h1 className="text-center py-5 font-semibold text-lg text-gray-500">
            {location.pathname === "/signin"
              ? "If you don't have account?"
              : "Already have account?"}
          </h1>

          <Button
            onClick={handleNavigate}
            variant="outlined"
            sx={{
              width: "100%",
              borderRadius: "29px",
              py: "15px",
            }}
          >
            {location.pathname === "/signin"
              ? "Signup"
              : "Signin"}
          </Button>

        </Box>

      </Modal>

    </div>
  );
};

export default AuthModel;
