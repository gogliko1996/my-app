import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ModalizeProps } from "./Modalize.props";
import { useResponsive } from "../../utils/hooks/useResponsive";


export const Modalize: React.FC<ModalizeProps> = (props) => {
    const { children, isOpen,onClose, style } = props;

    const { isResponsiveMobile } = useResponsive();

    const styleModal = {
      position: "absolute" as "absolute",
      top: isResponsiveMobile ? '62%' : '50%',
      left: "50%",
      transform: "translate(-50%, -50%)",
      bgcolor: "background.paper",
      borderRadius: 5,
      boxShadow: 24,
      p: 4,
      ...style
    };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>{children}</Box>
      </Modal>
    </div>
  );
};
