import {JSX} from "react";
import Modal from "react-modal";

interface PopupProps {
  isModalOpen: boolean;
  closeModal?: any;
  className?: string;
  children: JSX.Element;
  title?: any;
  hideXButton?: boolean;
  classNameOverlay?: string;
  shouldCloseOnOverlayClick?: boolean;
}

const Popup = (props: PopupProps) => {
  const {
    isModalOpen,
    closeModal,
    className,
    children,
    classNameOverlay,
    shouldCloseOnOverlayClick = true,
  } = props;
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      overlayClassName={`fixed inset-0 bg-black bg-opacity-70 z-50 ${classNameOverlay}`}
      className={` bg-black absolute w-[50%] h-[50%] md:right-[50%] md:bottom-[50%] md:translate-x-1/2 md:translate-y-1/2 md:p-4 md:pb-7 rounded-2xl focus:outline-none overflow-hidden ${className}`}
    >
      {children}
    </Modal>
  );
};

export default Popup;
