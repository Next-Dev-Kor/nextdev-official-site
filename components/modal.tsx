"use client";

import { useModal } from "@/store/use-modal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import LoginModal from "./auth/login-modal";

const Modal = () => {
  const { isOpen, onClose, type } = useModal();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>{type === "login" && <LoginModal />}</DialogContent>
    </Dialog>
  );
};

export default Modal;
