import { useState } from "react";
import styled from "styled-components";

const MyDropDownStyle = styled.div`
  .button {
    background-color: #0d6efd;
    height: 40px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    .items {
      position: absolute;
     
      color: black;
      background-color: indigo;
      width: 100%;
      div {
        height: 20px;
        text-align: center;
        color: white;
        animation: apear-anime 0.3s linear forwards;
      }
    }
  }
  .hovered {
    transition-property: background-color, color;
    transition-duration: 0.3s;
    background-color: yellow;
    color: black;
  }
  .unhovered {
    transition-property: background-color, color;
    transition-duration: 0.3s;
    background-color: #0d6efd;
    color: white;
  }
  @keyframes apear-anime {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const MyDropDown = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = (e) => {
    e.currentTarget.classList.add("hovered");
    e.currentTarget.classList.remove("unhovered");
    setIsHover(true);
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.classList.remove("hovered");
    e.currentTarget.classList.add("unhovered");
    setIsHover(false);
  };

  return (
    <MyDropDownStyle>
      <div
        className="button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        사원
        {isHover && (
          <div className="items" style={{ bottom: "-80px" }}>
            <div
              name="item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              TEST
            </div>
            <div
              name="item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              TEST
            </div>
            <div
              name="item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              TEST
            </div>
            <div
              name="item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              TEST
            </div>
          </div>
        )}
      </div>
    </MyDropDownStyle>
  );
};

export default MyDropDown;
