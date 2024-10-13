// import React from "react";

// const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
//   if (!isOpen) return null;

//   const handleOverlayClick = (e) => {
//     // Close the modal only if the overlay is clicked
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   return (
//     <div
//       id="popup-modal"
//       tabIndex={-1}
//       className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
//       onClick={handleOverlayClick} // Close modal on overlay click
//     >
//       <div className="relative p-4 w-full max-w-md max-h-full">
//         <div className="relative bg-white rounded-lg shadow">
//           <button
//             type="button"
//             onClick={onClose}
//             className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
//           >
//             <svg
//               className="w-3 h-3"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 14 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//               />
//             </svg>
//             <span className="sr-only">Close modal</span>
//           </button>
//           <div className="p-4 text-center">
//             <svg
//               className="mx-auto mb-4 text-gray-400 w-12 h-12"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//               />
//             </svg>
//             <h3 className="mb-5 text-lg font-normal text-gray-500">
//               Are you sure you want to delete this reward?
//             </h3>
//             <button
//               onClick={onConfirm}
//               type="button"
//               className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5"
//             >
//               Yes, I'm sure
//             </button>
//             <button
//               onClick={onClose}
//               type="button"
//               className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100"
//             >
//               No, cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConfirmationModal;

import React from "react";
import { Modal, Button } from "antd";

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal
      title="Confirmation"
      visible={isOpen}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          No, cancel
        </Button>,
        <Button key="confirm" type="primary" danger onClick={onConfirm}>
          Yes, I'm sure
        </Button>,
      ]}
    >
      <div className="text-center">
        <svg
          className="mx-auto mb-4 text-gray-400 w-12 h-12"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h3 className="mb-5 text-lg font-normal text-gray-500">
          Are you sure you want to delete this reward?
        </h3>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
