import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./redux/userSlice";
import UserCard from "./components/UserCard";
import LoadingSpinner from "./components/LoadingSpinner";
import { Row, Col } from "antd";
import "./styles/App.css";

const App = () => {
  const dispatch = useDispatch();
  const { data: users, status } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === "loading") return <LoadingSpinner />;
  if (status === "failed") return <p>Error loading users.</p>;

  return (
    <div className="app-container">
      <Row gutter={[16, 16]}>
        {users.map((user) => (
          <Col xs={24} sm={12} md={8} lg={6} key={user.id}>
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default App;
