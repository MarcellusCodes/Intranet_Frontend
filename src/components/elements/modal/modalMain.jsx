import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { selectModal, closeModal } from "../../../features/ui/modalSlice";

const ModalMain = ({ title, content }) => {
  const open = useSelector(selectModal);
  const dispatch = useDispatch();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => {
          dispatch(closeModal());
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "auto",
              bgcolor: "background.default",
              boxShadow: 24,
              borderRadius: 1,
            }}
          >
            <Box sx={{ p: 2, borderBottom: 1, borderColor: "secondary.main" }}>
              <Typography component="h4" variant="h5">
                {title}
              </Typography>
            </Box>
            <Box
              sx={{
                p: 2,
              }}
            >
              {content}
            </Box>
            <Box
              sx={{
                p: 2,
                borderTop: 1,
                borderColor: "secondary.main",
                textAlign: "right",
              }}
            >
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(closeModal());
                }}
              >
                Schließen
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalMain;
