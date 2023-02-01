import React from "react";
import { useState } from "react";
import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";

function Carrousel ({ images })  {
  const [count, setCount] = useState(0);
  const length = images.length;

  function nextImage () {
    setCount(count === length -1? 0 : count + 1);
  };

  function prevImage () {
    setCount(count === 0 ? length -1 : count - 1);
  };

  return (
    <div className="carrousel">
      {images.map((picture, index) => {
        return (
          <div
            key={index}
            className={
              index === count
                ? "slide carrousel__active"
                : "slide carrousel__inactive"
            }
          >
            {index === count && (
              <img src={picture} alt="" className="carrousel__image" />
            )}
          </div>
        );
      })}
      {/* get button if there are more thant one picture */}
      {length > 1 ? (
        <>
          <div className="carrousel__previous" onClick={prevImage}>
            <img src={arrowLeft} alt="" className="carrousel__previous__asset" />
          </div>
          <div className="carrousel__next" onClick={nextImage}>
            <img src={arrowRight} alt="" className="carrousel__next__asset" />
          </div>
          <div className="carrousel__number">{count +1}/{length}</div>
        </>
      ) : null}
    </div>
  );
};

export default Carrousel;