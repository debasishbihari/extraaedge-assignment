import React from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../redux/userSlice";
import { Modal, Form, Input, Button } from "antd";

const EditUserModal = ({ user, isVisible, onClose }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      dispatch(editUser({ id: user.id, updatedUser: values }));
      onClose();
    });
  };

  return (
    <Modal
      title="Edit User"
      visible={isVisible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Save
        </Button>,
      ]}
    >
      <Form form={form} initialValues={user} layout="vertical">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please enter the name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Email is required" },
            { type: "email", message: "Please enter a valid email address" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Phone" rules={[{ required: true, message: "Please enter the phone" }]}>
          <Input />
        </Form.Item>
        <Form.Item name="website" label="Website" rules={[{ required: true, message: "Please enter the website" }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditUserModal;
