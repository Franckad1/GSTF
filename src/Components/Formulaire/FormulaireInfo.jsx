import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: 20px;

  & .task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffd166;
    color: #26547c;
    margin: 8px 0;
    padding: 12px;
    border-radius: 4px;
  }

  & .task-details h2 {
    font-size: 14px;
    font-weight: bold;
  }

  & .task-details h3 {
    font-size: 12px;
    font-weight: normal;
  }

  & .task-actions {
    display: flex;
    gap: 10px;
  }

  & button {
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
  & .status-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: block;
  }
`;

const FormulaireInfo = ({ taskTitle, taskDescription }) => {
  return (
    <>
      <StyledDiv>
        <div className="task-item">
          <div className="task-details">
            <h2>TASK TITLE</h2>
            {taskTitle.lenght !== 0 ? (
              <input
                type="text"
                className="input-field"
                placeholder="Enter title"
                defaultValue={taskTitle}
              />
            ) : (
              <input
                type="text"
                className="input-field"
                placeholder="Enter title"
              />
            )}
            <h3>TASK DESCRIPTION (OPTIONAL)</h3>
            {taskDescription.lenght !== 0 ? (
              <textarea
                className="textarea-field"
                placeholder="Enter description"
              >
                {taskDescription}
              </textarea>
            ) : (
              <textarea
                className="textarea-field"
                placeholder="Enter description"
              ></textarea>
            )}
          </div>
          <div className="task-actions">
            <button>
              <img
                src="./assets/Button_Yes.png"
                alt="Completed"
                className="status-icon"
              />
            </button>
            <button>
              <img
                src="./assets/Button_No.png"
                alt="Completed"
                className="status-icon"
              />
            </button>
          </div>
        </div>
      </StyledDiv>
    </>
  );
};

FormulaireInfo.propTypes = {
  taskTitle: PropTypes.string.isRequired,
  taskDescription: PropTypes.string,
};

export default FormulaireInfo;
