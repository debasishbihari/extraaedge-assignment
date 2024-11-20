import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/userSlice";
import { Card, Typography, Space } from "antd";
import { 
  EditOutlined, 
  DeleteOutlined, 
  HeartOutlined, 
  HeartFilled, 
  MailOutlined, 
  PhoneOutlined, 
  GlobalOutlined 
} from "@ant-design/icons";
import EditUserModal from "./EditUserModal";

const { Meta } = Card;
const { Text } = Typography;

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLiked, setLiked] = useState(false);

  const handleDelete = () => {
    dispatch(deleteUser(user.id));
  };

  const toggleLike = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  return (
    <>
      <Card
        hoverable
        cover={
          <img
            alt="avatar"
            src={`https://api.dicebear.com/8.x/avataaars/svg?seed=${user.username}`}
          />
        }
        actions={[
          isLiked ? (
            <HeartFilled
              key="liked"
              onClick={toggleLike}
              style={{ color: "red" }}
            />
          ) : (
            <HeartOutlined
              key="like"
              onClick={toggleLike}
              style={{ color: "gray" }}
            />
          ),
          <EditOutlined key="edit" onClick={() => setModalVisible(true)} />,
          <DeleteOutlined key="delete" onClick={handleDelete} style={{ color: "red" }} />,
        ]}
      >
        <Meta
          title={<Text strong>{user.name}</Text>}
          description={
            <Space direction="vertical" size="small">
              <Text>
                <MailOutlined style={{ marginRight: 8 }} />
                {user.email}
              </Text>
              <Text>
                <PhoneOutlined style={{ marginRight: 8 }} />
                {user.phone}
              </Text>
              <Text>
                <GlobalOutlined style={{ marginRight: 8 }} />
                <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
                {`https://${user.website}`}
                </a>
              </Text>
            </Space>
          }
        />
      </Card>

      <EditUserModal
        user={user}
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
};

export default UserCard;
