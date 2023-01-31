import React from 'react';
import goodStar from '../../assets/goodStar.svg'
import badStar from '../../assets/badStar.svg'

function rating ({ rating }) {
    const stars = [1, 2, 3, 4, 5];
  
    return (
        <div className="rating">
            {stars.map((star) =>
                rating >= star ? (
                    <img key={star.toString()} className="rating__star" src={goodStar} alt="" />
                ) : (
                    <img key={star.toString()} className="rating__star" src={badStar} alt="" />
                )
            )}
        </div>
    );
};

export default rating