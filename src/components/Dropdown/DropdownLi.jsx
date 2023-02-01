import React from "react";
import arrowTop from "../../assets/arrowTop.svg";
import arrowBottom from "../../assets/arrowBottom.svg";

function DropdownLi ({ title, content }) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(!open);
    };

    return (
      <article className="dropdown li">
        <button onClick={handleOpen} className= "dropdown__button"> {title} {open ? <div className="isOpen"><img src={arrowTop} alt="" /></div> : <div className="isClose"><img src={arrowBottom} alt="" /></div>} </button>
        {open ? (
            <ul className="dropdown__contentLi">
              {content.map((content, index) => (
                <li key={index}>
                  {content}
                </li>
              ))}
            </ul>
        ) : null}
        {/* {open ? <div className="isOpen">{content}</div> : null */}
      </article>
    );
}

export default DropdownLi;