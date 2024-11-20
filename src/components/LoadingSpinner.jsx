import React from "react";
import { Spin } from "antd";

const LoadingSpinner = () => (
  <div style={{ textAlign: "center", marginTop: "50px" }}>
    <Spin size="large" />
  </div>
);

export default LoadingSpinner;
