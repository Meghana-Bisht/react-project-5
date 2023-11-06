import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="absolute top-0 z-40 grid h-screen w-screen place-items-center"
        >
          <div className="relative z-50 m-auto min-h-[200px] min-w-[80%] bg-white">
            <div className="flex justify-end p-2">
              <AiOutlineClose
                onClick={onClose}
                className="cursor-pointer text-2xl"
              />
            </div>
            {children}
          </div>

          <div
            onClick={onClose}
            className="absolute top-0 z-40 m-auto h-screen w-screen backdrop-blur"
          />
        </div>
      )}
    </>,
    document.getElementById("modal-root"),
  );
};

export default Modal;
