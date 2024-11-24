import React from "react";
import styled from "styled-components";
import ChecklistInfo from "./ChecklistInfo";
import PropTypes from "prop-types";

const StyledDiv = styled.div`
  margin: 0;
  padding: 0;
  background-color: #fff;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  border: 2px solid #26547c;

  & .header {
    background-color: #26547c;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
  }

  & .back-button {
    background-color: #ffd166;
    color: #26547c;
    padding: 5px 10px;
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
  & .checklist-title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin: 0 auto;
  }
`;

const Checklist = ({ checkTitle, taskTitle, onAddOne, done }) => {
  return (
    <>
      <StyledDiv>
        <div className="header">
          <button className="back-button">BACK</button>
          <h1 className="checklist-title">{checkTitle}</h1>
        </div>
        <ChecklistInfo taskTitle={taskTitle} onAddOne={onAddOne} done={done} />
      </StyledDiv>
    </>
  );
};

Checklist.propTypes = {
  checkTitle: PropTypes.string.isRequired,
  taskTitle: PropTypes.string.isRequired,
  onAddOne: PropTypes.func,
  done: PropTypes.bool,
};

export default Checklist;
