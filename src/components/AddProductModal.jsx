// import React, { useState, useEffect } from "react";
// import ToggleSwitch from "./ToggleSwitch"; // Ensure this component is imported

// const AddProductModal = ({ isOpen, onClose, onAddProduct, days }) => {
//   const [newReward, setNewReward] = useState({
//     users: "",
//     reward_name: "", // Changed from product_name to reward_name
//     category: "",
//     discountAmount: "",
//     discountType: "Flat Discount",
//     maxUpto: "",
//     creditAmount: "",
//     freeCall: false,
//     rewardExpired: "",
//     day: "Select a Day", // Default value for day
//   });

//   const [showModal, setShowModal] = useState(isOpen);

//   useEffect(() => {
//     if (isOpen) {
//       setShowModal(true);
//     } else {
//       const timer = setTimeout(() => {
//         setShowModal(false);
//       }, 300); // Duration of the animation
//       return () => clearTimeout(timer);
//     }
//   }, [isOpen]);

//   const handleInputChange = (e, field) => {
//     const value = field === "freeCall" ? e.target.checked : e.target.value;
//     setNewReward({ ...newReward, [field]: value });
//   };

//   const handleSubmit = () => {
//     if (
//       !newReward.users ||
//       !newReward.reward_name || // Changed from product_name to reward_name
//       newReward.day === "Select a Day"
//     ) {
//       return alert("Please fill in all fields.");
//     }

//     onAddProduct({ ...newReward, id: Date.now() });
//     resetForm();
//   };

//   const resetForm = () => {
//     setNewReward({
//       users: "",
//       reward_name: "", // Reset to default
//       category: "",
//       discountAmount: "",
//       discountType: "Flat Discount",
//       maxUpto: "",
//       creditAmount: "",
//       freeCall: false,
//       rewardExpired: "",
//       day: "Select a Day", // Reset to default
//     });
//     onClose();
//   };

//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       resetForm(); // Close modal on overlay click
//     }
//   };

//   if (!showModal) return null;

//   return (
//     <div
//       className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
//         isOpen ? "opacity-100" : "opacity-0"
//       }`}
//       onClick={handleOverlayClick} // Add this line
//     >
//       <div className="bg-white rounded p-5 w-11/12 md:w-1/3 transform transition-transform duration-300 scale-100">
//         <h2 className="text-xl font-semibold mb-4">Add Reward</h2>{" "}
//         {/* Updated title */}
//         {/* Day Selection at the Top */}
//         <select
//           value={newReward.day}
//           onChange={(e) => handleInputChange(e, "day")}
//           className="border rounded p-2 w-full mb-2"
//         >
//           <option value="Select a Day">Select a Day</option>
//           <option value="All">All</option>
//           {days.map((day) => (
//             <option key={day} value={day}>
//               {day}
//             </option>
//           ))}
//         </select>
//         <input
//           type="text"
//           value={newReward.users}
//           onChange={(e) => handleInputChange(e, "users")}
//           placeholder="Users"
//           className="border rounded p-2 w-full mb-2"
//         />
//         <input
//           type="text"
//           value={newReward.reward_name} // Changed from product_name to reward_name
//           onChange={(e) => handleInputChange(e, "reward_name")}
//           placeholder="Reward Name"
//           className="border rounded p-2 w-full mb-2"
//         />
//         <select
//           value={newReward.category}
//           onChange={(e) => handleInputChange(e, "category")}
//           className="border rounded p-2 w-full mb-2"
//         >
//           <option value="">Select Category</option>
//           <option value="Credit">Credit</option>
//           <option value="Discount">Discount</option>
//           <option value="Free Call">Free Call</option>
//         </select>
//         {newReward.category === "Credit" && (
//           <input
//             type="number"
//             value={newReward.creditAmount}
//             onChange={(e) => handleInputChange(e, "creditAmount")}
//             placeholder="Credit Amount"
//             className="border rounded p-2 w-full mb-2"
//           />
//         )}
//         {newReward.category === "Discount" && (
//           <>
//             <input
//               type="number"
//               value={newReward.discountAmount}
//               onChange={(e) => handleInputChange(e, "discountAmount")}
//               placeholder="Discount Amount"
//               className="border rounded p-2 w-full mb-2"
//             />
//             <select
//               value={newReward.discountType}
//               onChange={(e) => handleInputChange(e, "discountType")}
//               className="border rounded p-2 w-full mb-2"
//             >
//               <option value="Flat Discount">Flat Discount</option>
//               <option value="Upto Discount">Upto Discount</option>
//             </select>
//             {newReward.discountType === "Upto Discount" && (
//               <input
//                 type="number"
//                 value={newReward.maxUpto}
//                 onChange={(e) => handleInputChange(e, "maxUpto")}
//                 placeholder="Max Upto"
//                 className="border rounded p-2 w-full mb-2"
//               />
//             )}
//           </>
//         )}
//         {newReward.category === "Free Call" && (
//           <div className="flex items-center mb-2">
//             <span className="mr-2">Free Call</span>
//             <ToggleSwitch
//               checked={newReward.freeCall}
//               onChange={(e) => handleInputChange(e, "freeCall")}
//             />
//           </div>
//         )}
//         <input
//           type="text"
//           value={newReward.rewardExpired}
//           onChange={(e) => handleInputChange(e, "rewardExpired")}
//           placeholder="Reward Expired Time"
//           className="border rounded p-2 w-full mb-2"
//         />
//         <button
//           onClick={handleSubmit}
//           className="bg-[#28a745] text-white px-4 py-2 rounded"
//         >
//           Save
//         </button>
//         <button
//           onClick={resetForm}
//           className="bg-[#f37360] text-white px-4 py-2 rounded ml-2"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddProductModal;

// ########################################## ant design

import { useState, useEffect } from "react";
import { Modal, Input, Select, Switch, Button } from "antd";

const { Option } = Select;

const AddProductModal = ({ isOpen, onClose, onAddProduct, days }) => {
  const [newReward, setNewReward] = useState({
    users: "",
    reward_name: "",
    category: "",
    discountAmount: "",
    discountType: "Flat Discount",
    maxUpto: "",
    creditAmount: "",
    freeCall: false,
    rewardExpired: "",
    day: "Select a Day",
    categoryEnabled: true, // Adding a switch for category
  });

  useEffect(() => {
    if (isOpen) {
      setNewReward({
        users: "",
        reward_name: "",
        category: "",
        discountAmount: "",
        discountType: "Flat Discount",
        maxUpto: "",
        creditAmount: "",
        freeCall: false,
        rewardExpired: "",
        day: "Select a Day",
        categoryEnabled: true, // Reset the switch when modal is opened
      });
    }
  }, [isOpen]);

  const handleInputChange = (value, field) => {
    setNewReward({ ...newReward, [field]: value });
  };

  const handleSubmit = () => {
    if (
      !newReward.users ||
      !newReward.reward_name ||
      newReward.day === "Select a Day"
    ) {
      return alert("Please fill in all fields.");
    }
    onAddProduct({ ...newReward, id: Date.now() });
    onClose();
  };

  return (
    <Modal
      title="Add Reward"
      visible={isOpen}
      onCancel={onClose}
      footer={[
        <Button className="ant-btn" key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button className="ant-btn" key="submit" onClick={handleSubmit}>
          Add
        </Button>,
      ]}>
      <Select
        value={newReward.day}
        onChange={(value) => handleInputChange(value, "day")}
        className="w-full mb-2">
        <Option value="Select a Day">Select a Day</Option>
        <Option value="All">All</Option>
        {days.map((day) => (
          <Option key={day} value={day}>
            {day}
          </Option>
        ))}
      </Select>

      <Input
        value={newReward.users}
        onChange={(e) => handleInputChange(e.target.value, "users")}
        placeholder="Users"
        className="mb-2 ant-input"
      />

      <Input
        value={newReward.reward_name}
        onChange={(e) => handleInputChange(e.target.value, "reward_name")}
        placeholder="Reward Name"
        className="mb-2 ant-input"
      />

      <Select
        value={newReward.category}
        onChange={(value) => handleInputChange(value, "category")}
        className="w-full mb-2">
        <Option value="">Select Category</Option>
        <Option value="Credit">Credit</Option>
        <Option value="Discount">Discount</Option>
        <Option value="Free Call">Free Call</Option>
        <Option value="Better Luck Next Time">Better Luck Next Time</Option>
        <Option value="Spin Again">Spin Again</Option>
        <Option value="iPhone 16 Pro Max">iPhone 16 Pro Max</Option>{" "}
        {/* New Category */}
      </Select>

      {/* Switch to enable or disable category */}
      <div className="flex items-center mb-2">
        <span className="mr-2">Category Enabled</span>
        <Switch
          checked={newReward.categoryEnabled}
          onChange={(checked) => handleInputChange(checked, "categoryEnabled")}
        />
      </div>

      {newReward.category === "Credit" && (
        <Input
          type="number"
          value={newReward.creditAmount}
          onChange={(e) => handleInputChange(e.target.value, "creditAmount")}
          placeholder="Credit Amount"
          className="mb-2 ant-input"
        />
      )}

      {newReward.category === "Discount" && (
        <>
          <Input
            type="number"
            value={newReward.discountAmount}
            onChange={(e) =>
              handleInputChange(e.target.value, "discountAmount")
            }
            placeholder="Discount Amount"
            className="mb-2 ant-input"
          />
          <Select
            value={newReward.discountType}
            onChange={(value) => handleInputChange(value, "discountType")}
            className="w-full mb-2">
            <Option value="Flat Discount">Flat Discount</Option>
            <Option value="Upto Discount">Upto Discount</Option>
          </Select>
          {newReward.discountType === "Upto Discount" && (
            <Input
              type="number"
              value={newReward.maxUpto}
              onChange={(e) => handleInputChange(e.target.value, "maxUpto")}
              placeholder="Max Upto"
              className="mb-2 ant-input"
            />
          )}
        </>
      )}

      {newReward.category === "Free Call" && (
        <div className="flex items-center mb-2">
          <span className="mr-2">Free Call</span>
          <Switch
            checked={newReward.freeCall}
            onChange={(checked) => handleInputChange(checked, "freeCall")}
          />
        </div>
      )}

      <Input
        value={newReward.rewardExpired}
        onChange={(e) => handleInputChange(e.target.value, "rewardExpired")}
        placeholder="Reward Expired Time"
        className="mb-2 ant-input"
      />
    </Modal>
  );
};

export default AddProductModal;
