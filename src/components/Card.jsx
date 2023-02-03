// react
import React from "react";

function Card ({ image, title}) {
    return (
        <div className='container__card'>
            <img src={image} alt='Fiche logement' className='container__card__img' />
            <div className='container__card__title'>
                {title}
            </div>
        </div>
    )
}

export default Card