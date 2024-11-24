import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 20px;
  background-color: #ffd166;

  & .task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #26547c;
    color: #ffd166;
    padding: 10px 20px;
    margin: 10px 0;
    border-radius: 5px;
  }

  & .task-title {
    font-size: 18px;
    font-weight: bold;
  }

  & button {
    background-color: transparent;
    border: 2px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
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

const ChecklistInfo = ({ taskTitle, onAddOne, done }) => {
  return (
    <>
      <StyledDiv>
        <div className="task-item">
          <span className="task-title">{taskTitle}</span>
          <button onClick={onAddOne}>
            {done ? (
              <img
                src="./assets/Button_No.png"
                alt="Completed"
                className="status-icon"
              />
            ) : (
              <img
                src="./assets/Button_Yes.png"
                alt="Completed"
                className="status-icon"
              />
            )}
          </button>
        </div>
      </StyledDiv>
    </>
  );
};

ChecklistInfo.propTypes = {
  taskTitle: PropTypes.string.isRequired,
  onAddOne: PropTypes.func,
  done: PropTypes.bool,
};
export default ChecklistInfo;
