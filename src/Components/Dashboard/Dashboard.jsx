import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import DashboardInfo from "./DashboardInfo";

const StyledHead = styled.header`
  background-color: #26547c;
  color: #ffd166;
  padding: 20px;
  text-align: right;

  & .new-btn {
    background-color: #ffd166;
    color: #26547c;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    outline: none;
    transition: transform 0.2s;
  }

  & button:hover {
    transform: scale(1.1);
  }

  & button:active {
    transform: scale(0.9);
  }
`;

const StyledDiv = styled.div`
  /* styles.css */
  padding: 20px;
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
`;

const Dashboard = ({
  checkTitle,
  checkDescription,
  taskOk,
  allTask,
  checkState,
  onDelete,
}) => {
  return (
    <>
      <StyledHead>
        <button className="new-btn">NEW</button>
      </StyledHead>

      <StyledDiv>
        <DashboardInfo
          checkTitle={checkTitle}
          checkDescription={checkDescription}
          taskOk={taskOk}
          allTask={allTask}
          checkState={checkState}
          onDelete={onDelete}
        />
      </StyledDiv>
    </>
  );
};
Dashboard.propTypes = {
  checkTitle: PropTypes.string.isRequired,
  checkDescription: PropTypes.string.isRequired,
  taskOk: PropTypes.number.isRequired,
  allTask: PropTypes.number.isRequired,
  checkState: PropTypes.number.isRequired,
  onDelete: PropTypes.func,
};
export default Dashboard;
