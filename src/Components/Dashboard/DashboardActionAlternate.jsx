import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
const StyledDiv = styled.div`
  & .edit-btn,
  & .delete-btn {
    padding: 5px 10px;
    font-size: 14px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #26547c;
    color: #ffd166;
    margin: 5px;
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
const DashboardActionAlternate = ({
  editButton = "EDIT",
  deleteButton = "DELETE",
  onDelete,
}) => {
  return (
    <>
      <StyledDiv>
        <button className="edit-btn">{editButton}</button>
        <button className="delete-btn" onClick={onDelete}>
          {" "}
          {deleteButton}
        </button>
      </StyledDiv>
    </>
  );
};
DashboardActionAlternate.propTypes = {
  editButton: PropTypes.any,
  deleteButton: PropTypes.any,
  onDelete: PropTypes.func,
};

export default DashboardActionAlternate;
