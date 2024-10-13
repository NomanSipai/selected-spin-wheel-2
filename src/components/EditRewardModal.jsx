// import React, { useState, useEffect } from "react";
// import ToggleSwitch from "./ToggleSwitch"; // Ensure this component is imported

// const EditRewardModal = ({ isOpen, onClose, reward, onEditReward, days }) => {
//   const [editedReward, setEditedReward] = useState(null);

//   useEffect(() => {
//     if (reward) {
//       setEditedReward(reward);
//     }
//   }, [reward]);

//   const handleInputChange = (e, field) => {
//     const value = field === "freeCall" ? e.target.checked : e.target.value;
//     setEditedReward({ ...editedReward, [field]: value });
//   };

//   const handleSubmit = () => {
//     if (!editedReward || !editedReward.users || !editedReward.reward_name) {
//       return alert("Please fill in all fields.");
//     }
//     onEditReward({ ...editedReward, id: reward.id });
//     onClose();
//   };

//   if (!isOpen || !editedReward) return null; // Ensure editedReward is not null

//   const handleOverlayClick = (e) => {
//     // Only close the modal if the overlay is clicked, not the modal itself
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   return (
//     <div
//       className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
//       onClick={handleOverlayClick} // Close modal on overlay click
//     >
//       <div
//         className="bg-white rounded p-5 w-11/12 md:w-1/3"
//         onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
//       >
//         <h2 className="text-xl font-semibold mb-4">Edit Reward</h2>

//         <label className="block mb-1">Select Day:</label>
//         <select
//           value={editedReward.day}
//           onChange={(e) => handleInputChange(e, "day")}
//           className="border rounded p-2 w-full mb-2"
//         >
//           {days.map((day) => (
//             <option key={day} value={day}>
//               {day}
//             </option>
//           ))}
//         </select>

//         <label className="block mb-1">Users:</label>
//         <input
//           type="text"
//           value={editedReward.users}
//           onChange={(e) => handleInputChange(e, "users")}
//           placeholder="Users"
//           className="border rounded p-2 w-full mb-2"
//         />

//         <label className="block mb-1">Reward Name:</label>
//         <input
//           type="text"
//           value={editedReward.reward_name}
//           onChange={(e) => handleInputChange(e, "reward_name")}
//           placeholder="Reward Name"
//           className="border rounded p-2 w-full mb-2"
//         />

//         <label className="block mb-1">Category:</label>
//         <select
//           value={editedReward.category}
//           onChange={(e) => handleInputChange(e, "category")}
//           className="border rounded p-2 w-full mb-2"
//         >
//           <option value="Credit">Credit</option>
//           <option value="Discount">Discount</option>
//           <option value="Free Call">Free Call</option>
//         </select>

//         {editedReward.category === "Credit" && (
//           <>
//             <label className="block mb-1">Credit Amount:</label>
//             <input
//               type="number"
//               value={editedReward.creditAmount}
//               onChange={(e) => handleInputChange(e, "creditAmount")}
//               placeholder="Credit Amount"
//               className="border rounded p-2 w-full mb-2"
//             />
//           </>
//         )}

//         {editedReward.category === "Discount" && (
//           <>
//             <label className="block mb-1">Discount Amount:</label>
//             <input
//               type="number"
//               value={editedReward.discountAmount}
//               onChange={(e) => handleInputChange(e, "discountAmount")}
//               placeholder="Discount Amount"
//               className="border rounded p-2 w-full mb-2"
//             />
//             <label className="block mb-1">Discount Type:</label>
//             <select
//               value={editedReward.discountType}
//               onChange={(e) => handleInputChange(e, "discountType")}
//               className="border rounded p-2 w-full mb-2"
//             >
//               <option value="Flat Discount">Flat Discount</option>
//               <option value="Upto Discount">Upto Discount</option>
//             </select>
//             {editedReward.discountType === "Upto Discount" && (
//               <>
//                 <label className="block mb-1">Max Upto:</label>
//                 <input
//                   type="number"
//                   value={editedReward.maxUpto}
//                   onChange={(e) => handleInputChange(e, "maxUpto")}
//                   placeholder="Max Upto"
//                   className="border rounded p-2 w-full mb-2"
//                 />
//               </>
//             )}
//           </>
//         )}

//         {editedReward.category === "Free Call" && (
//           <div className="flex items-center mb-2">
//             <span className="mr-2">Free Call:</span>
//             <ToggleSwitch
//               checked={editedReward.freeCall}
//               onChange={(e) => handleInputChange(e, "freeCall")}
//             />
//           </div>
//         )}

//         <label className="block mb-1">Reward Expired Time:</label>
//         <input
//           type="text"
//           value={editedReward.rewardExpired}
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
//           onClick={onClose}
//           className="bg-[#f37360] text-white px-4 py-2 rounded ml-2"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EditRewardModal;

// old

// import React, { useState, useEffect } from "react";
// import { Modal, Form, Input, Select, Switch, message } from "antd";
// // import ToggleSwitch from "./ToggleSwitch"; // Ensure this component is imported

// const { Option } = Select;

// const EditRewardModal = ({ isOpen, onClose, reward, onEditReward, days }) => {
//   const [editedReward, setEditedReward] = useState(null);
//   const [form] = Form.useForm();

//   useEffect(() => {
//     if (reward) {
//       setEditedReward(reward);
//       form.setFieldsValue(reward); // Populate the form with the reward data
//     }
//   }, [reward, form]);

//   const handleInputChange = (field, value) => {
//     setEditedReward({ ...editedReward, [field]: value });
//   };

//   const handleSubmit = () => {
//     form
//       .validateFields()
//       .then(() => {
//         if (!editedReward) return;
//         onEditReward({ ...editedReward, id: reward.id });
//         onClose();
//         message.success("Reward updated successfully!");
//       })
//       .catch(() => {
//         message.error("Please fill in all fields.");
//       });
//   };

//   if (!isOpen || !editedReward) return null; // Ensure editedReward is not null

//   return (
//     <Modal
//       title="Edit Reward"
//       visible={isOpen}
//       onCancel={onClose}
//       onOk={handleSubmit}
//       okText="Update"
//       cancelText="Cancel  "
//     >
//       <Form form={form} layout="vertical">
//         <Form.Item
//           label="Select Day"
//           name="day"
//           rules={[{ required: true, message: "Please input Day!" }]}
//         >
//           <Select onChange={(value) => handleInputChange("day", value)}>
//             {days.map((day) => (
//               <Option key={day} value={day}>
//                 {day}
//               </Option>
//             ))}
//           </Select>
//         </Form.Item>

//         <Form.Item
//           label="Users"
//           name="users"
//           rules={[{ required: true, message: "Please input users!" }]}
//         >
//           <Input
//             onChange={(e) => handleInputChange("users", e.target.value)}
//             placeholder="Users"
//           />
//         </Form.Item>

//         <Form.Item
//           label="Reward Name"
//           name="reward_name"
//           rules={[{ required: true, message: "Please input reward name!" }]}
//         >
//           <Input
//             onChange={(e) => handleInputChange("reward_name", e.target.value)}
//             placeholder="Reward Name"
//           />
//         </Form.Item>

//         <Form.Item
//           label="Category"
//           name="category"
//           rules={[{ required: true, message: "Please input Category!" }]}
//         >
//           <Select onChange={(value) => handleInputChange("category", value)}>
//             <Option value="Credit">Credit</Option>
//             <Option value="Discount">Discount</Option>
//             <Option value="Free Call">Free Call</Option>
//           </Select>
//         </Form.Item>

//         {editedReward.category === "Credit" && (
//           <Form.Item
//             label="Credit Amount"
//             name="creditAmount"
//             rules={[{ required: true, message: "Please input Credit Amount!" }]}
//           >
//             <Input
//               type="number"
//               onChange={(e) =>
//                 handleInputChange("creditAmount", e.target.value)
//               }
//               placeholder="Credit Amount"
//             />
//           </Form.Item>
//         )}

//         {editedReward.category === "Discount" && (
//           <>
//             <Form.Item
//               label="Discount Amount"
//               name="discountAmount"
//               rules={[{ required: true, message: "Please Discount Amount!" }]}
//             >
//               <Input
//                 type="number"
//                 onChange={(e) =>
//                   handleInputChange("discountAmount", e.target.value)
//                 }
//                 placeholder="Discount Amount"
//               />
//             </Form.Item>
//             <Form.Item label="Discount Type" name="discountType">
//               <Select
//                 onChange={(value) => handleInputChange("discountType", value)}
//               >
//                 <Option value="Flat Discount">Flat Discount</Option>
//                 <Option value="Upto Discount">Upto Discount</Option>
//               </Select>
//             </Form.Item>
//             {editedReward.discountType === "Upto Discount" && (
//               <Form.Item
//                 label="Max Upto"
//                 name="maxUpto"
//                 rules={[{ required: true, message: "Please Max Upto Amount!" }]}
//               >
//                 <Input
//                   type="number"
//                   onChange={(e) => handleInputChange("maxUpto", e.target.value)}
//                   placeholder="Max Upto"
//                 />
//               </Form.Item>
//             )}
//           </>
//         )}

//         {editedReward.category === "Free Call" && (
//           <Form.Item label="Free Call">
//             <Switch
//               checked={editedReward.freeCall}
//               onChange={(checked) => handleInputChange("freeCall", checked)}
//             />
//           </Form.Item>
//         )}

//         <Form.Item
//           label="Reward Expired Time"
//           name="rewardExpired"
//           rules={[{ required: true, message: "Please Max Expired Time!" }]}
//         >
//           <Input
//             onChange={(e) => handleInputChange("rewardExpired", e.target.value)}
//             placeholder="Reward Expired Time"
//           />
//         </Form.Item>
//       </Form>
//     </Modal>
//   );
// };

// export default EditRewardModal;

import React, { useState, useEffect } from "react";
import { Modal, Input, Select, Switch, Button } from "antd";

const { Option } = Select;

const EditRewardModal = ({ isOpen, onClose, reward, onEditReward, days }) => {
  const [editedReward, setEditedReward] = useState(null);

  useEffect(() => {
    if (isOpen && reward) {
      setEditedReward(reward); // Populate the state with the reward data
    }
  }, [isOpen, reward]);

  const handleInputChange = (value, field) => {
    setEditedReward({ ...editedReward, [field]: value });
  };

  const handleSubmit = () => {
    if (
      !editedReward.users ||
      !editedReward.reward_name ||
      editedReward.day === "Select a Day"
    ) {
      return alert("Please fill in all fields.");
    }
    onEditReward(editedReward);
    onClose();
  };

  if (!editedReward) return null; // Ensure editedReward is not null

  return (
    <Modal
      title="Edit Reward"
      visible={isOpen}
      onCancel={onClose}
      footer={[
        <Button className="ant-btn" key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button className="ant-btn" key="submit" onClick={handleSubmit}>
          Update
        </Button>,
      ]}>
      <div className="mb-2">
        <label className="block mb-1">Select Day</label>
        <Select
          value={editedReward.day}
          onChange={(value) => handleInputChange(value, "day")}
          className="w-full">
          <Option value="Select a Day">Select a Day</Option>
          <Option value="All">All</Option>
          {days.map((day) => (
            <Option key={day} value={day}>
              {day}
            </Option>
          ))}
        </Select>
      </div>

      <div className="mb-2">
        <label className="block mb-1">Users</label>
        <Input
          value={editedReward.users}
          onChange={(e) => handleInputChange(e.target.value, "users")}
          placeholder="Users"
          className="ant-input"
        />
      </div>

      <div className="mb-2">
        <label className="block mb-1">Reward Name</label>
        <Input
          value={editedReward.reward_name}
          onChange={(e) => handleInputChange(e.target.value, "reward_name")}
          placeholder="Reward Name"
          className="ant-input"
        />
      </div>

      <div className="mb-2">
        <label className="block mb-1">Category</label>
        <Select
          value={editedReward.category}
          onChange={(value) => handleInputChange(value, "category")}
          className="w-full">
          <Option value="">Select Category</Option>
          <Option value="Credit">Credit</Option>
          <Option value="Discount">Discount</Option>
          <Option value="Free Call">Free Call</Option>
          <Option value="Better Luck Next Time">Better Luck Next Time</Option>
          <Option value="Spin Again">Spin Again</Option>
          <Option value="iPhone 16 Pro Max">iPhone 16 Pro Max</Option>{" "}
          {/* New Category */}
        </Select>
      </div>

      {editedReward.category === "Credit" && (
        <div className="mb-2">
          <label className="block mb-1">Credit Amount</label>
          <Input
            type="number"
            value={editedReward.creditAmount}
            onChange={(e) => handleInputChange(e.target.value, "creditAmount")}
            placeholder="Credit Amount"
            className="ant-input"
          />
        </div>
      )}

      {editedReward.category === "Discount" && (
        <>
          <div className="mb-2">
            <label className="block mb-1">Discount Amount</label>
            <Input
              type="number"
              value={editedReward.discountAmount}
              onChange={(e) =>
                handleInputChange(e.target.value, "discountAmount")
              }
              placeholder="Discount Amount"
              className="ant-input"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">Discount Type</label>
            <Select
              value={editedReward.discountType}
              onChange={(value) => handleInputChange(value, "discountType")}
              className="w-full">
              <Option value="Flat Discount">Flat Discount</Option>
              <Option value="Upto Discount">Upto Discount</Option>
            </Select>
          </div>
          {editedReward.discountType === "Upto Discount" && (
            <div className="mb-2">
              <label className="block mb-1">Max Upto</label>
              <Input
                type="number"
                value={editedReward.maxUpto}
                onChange={(e) => handleInputChange(e.target.value, "maxUpto")}
                placeholder="Max Upto"
                className="ant-input"
              />
            </div>
          )}
        </>
      )}

      {editedReward.category === "Free Call" && (
        <div className="mb-2 flex items-center">
          <label className="block mr-2">Free Call</label>
          <Switch
            checked={editedReward.freeCall}
            onChange={(checked) => handleInputChange(checked, "freeCall")}
          />
        </div>
      )}

      <div className="mb-2">
        <label className="block mb-1">Reward Expired Time</label>
        <Input
          value={editedReward.rewardExpired}
          onChange={(e) => handleInputChange(e.target.value, "rewardExpired")}
          placeholder="Reward Expired Time"
          className="ant-input"
        />
      </div>
    </Modal>
  );
};

export default EditRewardModal;
