"use client";
import useRegisterModal from "@/hooks/useRegisterModal";
import Modal from "../ui/modal";

export default function RegisterModal() {
  const registerModal = useRegisterModal();

  const body = <div>Body Content</div>;
  const footer = <div>Footer</div>;
  return (
    <Modal
      title="Create an account"
      body={body}
      footer={footer}
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
    />
  );
}
