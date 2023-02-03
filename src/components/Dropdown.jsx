// react
import React from "react";

// asset
import arrowTop from "../assets/arrowTop.svg";
import arrowBottom from "../assets/arrowBottom.svg";

function Dropdown ({ title, content }) {

  // allow open and close collapse
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <article className="dropdown">
      <button onClick={handleOpen} className= "dropdown__button">
        {title}
        {open ? (
          <div>
            <img src={arrowTop} alt="" />
          </div>
        ) : (
          <div>
            <img src={arrowBottom} alt="" />
          </div>)}
      </button>
      {open ? (
        <div className="dropdown__content">
          {content}
        </div>
      ) : null}
    </article>
    );
};

export default Dropdown;