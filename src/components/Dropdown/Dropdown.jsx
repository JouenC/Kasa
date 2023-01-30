import React from "react";
import arrowTop from "../../assets/arrowTop.svg";
import arrowBottom from "../../assets/arrowBottom.svg";

function Dropdown ({ title, content }) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(!open);
    };

    return (
      <article className="dropdown">
        <button onClick={handleOpen} className= "dropdown__button"> {title} {open ? <div className="isOpen"><img src={arrowTop} alt="" /></div> : <div className="isClose"><img src={arrowBottom} alt="" /></div>} </button>
        {open ? (
            <div className="dropdown__content">
                {content}
            </div>
        ) : null}
        {/* {open ? <div className="isOpen">{content}</div> : null */}
      </article>
    );
    // function isCollapse (element) {
    //   element.preventDefault();
    //   const divText = element.target.nextSibling;
    //   const arrow = element.target.lastChild;
  
    //   if (!divText.classList.contains("show")) {
    //     divText.classList.add("show");
    //     arrow.classList.add("rotate");
    //   } else {
    //     divText.classList.remove("show");
    //     arrow.classList.remove("rotate");
    //   }
    // };
    // return (
    //   <div className="collapse ">
    //     <button type="button" className="collapse__button" onClick={isCollapse}>
    //       {title}
  
    //       <p className="collapse__arrow">&lt;</p>
    //     </button>
    //     <div className="collapse__content">
    //       {Array.isArray(content) ? (
    //         <ul className="collapse__list">
    //           {content.map((equipment, index) => (
    //             <li key={index} className="collapse__list-element">
    //               {equipment}
    //             </li>
    //           ))}
    //         </ul>
    //       ) : (
    //         <p className="collapse__text">{content}</p>
    //       )}
    //     </div>
    //   </div>
    // );
  };
  
  export default Dropdown;