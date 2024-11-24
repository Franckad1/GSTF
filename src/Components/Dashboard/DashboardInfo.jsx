import React from "react";
import styled from "styled-components";
import DashboardAction from "./DashboardAction";
import DashboardActionAlternate from "./DashboardActionAlternate";
import PropTypes from "prop-types";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #26547c;
  color: #ffd166;
  padding: 15px 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  & * {
    font-family: Roboto, sans-serif;
  }
  & .checklist-title,
  & .checklist-description,
  & .checklist-state,
  & .checklist-status {
    color: #ffd166;
  }

  & .checklist-state {
    font-size: 14px;
    margin-right: 10px;
    color: #ffd166;
  }

  & .checklist-status {
    font-size: 14px;
    margin-right: 10px;
    color: #ffd166;
    font-weight: bold;
  }
  & .checklist-content {
    flex: 2;
  }

  & .checklist-title {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }

  & .checklist-description {
    margin: 5px 0 0;
    font-size: 14px;
  }

  & .checklist-actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
const StyledDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #26547c;
  background-color: #ffd166;
  padding: 15px 20px;
  border-radius: 8px;
  margin-bottom: 15px;

  & .checklist-title,
  & .checklist-description,
  & .checklist-state,
  & .checklist-status {
    color: #26547c;
  }

  & .checklist-state {
    font-size: 14px;
    margin-right: 10px;
    color: #26547c;
  }

  & .checklist-status {
    font-size: 14px;
    margin-right: 10px;
    color: #26547c;
    font-weight: bold;
  }
  & .checklist-content {
    flex: 2;
  }

  & .checklist-title {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }

  & .checklist-description {
    margin: 5px 0 0;
    font-size: 14px;
  }

  & .checklist-actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  & .edit-btn,
  & .delete-btn {
    padding: 5px 10px;
    font-size: 14px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #26547c;
    color: #ffd166;
  }
`;
const DashboardInfo = ({
  checkTitle,
  checkDescription,
  taskOk,
  allTask,
  checkState,
  editButton,
  deleteButton,
  onDelete,
}) => {
  return (
    <>
      <StyledDiv>
        <div className="checklist-content">
          <h2 className="checklist-title">{checkTitle}</h2>
          <p className="checklist-description">{checkDescription}</p>
        </div>
        <div className="checklist-actions">
          <span className="checklist-state">
            TASK DONE/ALL TASK:{taskOk}/{allTask}
          </span>
          <span className="checklist-status">STATE:{checkState}</span>
          <DashboardAction
            editButton={editButton}
            deleteButton={deleteButton}
            onDelete={onDelete}
          />
        </div>
      </StyledDiv>

      <StyledDiv2>
        <div className="checklist-content">
          <h2 className="checklist-title">{checkTitle}</h2>
          <p className="checklist-description">{checkDescription}</p>
        </div>
        <div className="checklist-actions">
          <span className="checklist-state">
            TASK DONE/ALL TASK: {taskOk}/{allTask}
          </span>
          <span className="checklist-status">STATE:{checkState}</span>
          <DashboardActionAlternate
            editButton={editButton}
            deleteButton={deleteButton}
            onDelete={onDelete}
          />
        </div>
      </StyledDiv2>
    </>
  );
};

DashboardInfo.propTypes = {
  checkTitle: PropTypes.string.isRequired,
  checkDescription: PropTypes.string.isRequired,
  taskOk: PropTypes.number.isRequired,
  allTask: PropTypes.number.isRequired,
  checkState: PropTypes.number.isRequired,
  editButton: PropTypes.any,
  deleteButton: PropTypes.any,
  onDelete: PropTypes.func,
};

export default DashboardInfo;
