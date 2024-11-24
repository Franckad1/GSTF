import React from "react";
import styled from "styled-components";
import FormulaireInfo from "./FormulaireInfo";
import PropTypes from "prop-types";

const StyleDiv = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f4f4f4;
  width: 80%;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;

  & .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #26547c;
    padding: 10px 15px;
    border-radius: 8px 8px 0 0;
  }

  & .header h1 {
    color: #ffd166;
    font-size: 18px;
    font-weight: bold;
  }

  & .back-button,
  .save-button {
    background-color: #ffd166;
    color: #26547c;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
  }

  & .checklist-form {
    padding: 10px;
  }

  & .form-group {
    margin: 15px 0;
  }

  & .form-group h2 {
    font-size: 16px;
    font-weight: bold;
    color: #26547c;
    margin-bottom: 8px;
  }

  & .input-field,
  .textarea-field {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  & .textarea-field {
    height: 60px;
    resize: none;
  }

  & .task-list {
    margin-top: 20px;
  }

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
`;

const Formulaire = ({
  checkTitle,
  checkDescription,
  taskTitle,
  taskDescription,
}) => {
  return (
    <>
      <StyleDiv>
        <div className="header">
          <button className="back-button">BACK</button>
          <h1>NEW CHECKLIST</h1>
          <button className="save-button">SAVE</button>
        </div>
        <div className="checklist-form">
          <div className="form-group">
            <h2>CHECKLIST TITLE</h2>
            {checkTitle.lenght !== 0 ? (
              <input
                type="text"
                className="input-field"
                placeholder="Enter title"
                defaultValue={checkTitle}
              />
            ) : (
              <input
                type="text"
                className="input-field"
                placeholder="Enter title"
              />
            )}
          </div>

          <div className="form-group">
            <h2>CHECKLIST DESCRIPTION</h2>
            {checkDescription.lenght !== 0 ? (
              <textarea
                className="textarea-field"
                placeholder="Enter description"
              >
                {checkDescription}
              </textarea>
            ) : (
              <textarea
                className="textarea-field"
                placeholder="Enter description"
              ></textarea>
            )}
          </div>
          <FormulaireInfo
            taskTitle={taskTitle}
            taskDescription={taskDescription}
          />
        </div>
      </StyleDiv>
    </>
  );
};

Formulaire.propTypes = {
  checkTitle: PropTypes.string.isRequired,
  checkDescription: PropTypes.string.isRequired,
  taskTitle: PropTypes.string.isRequired,
  taskDescription: PropTypes.string,
};

export default Formulaire;
