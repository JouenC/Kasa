// import lodging from '../../assets/LOGO.svg'

// function Card () {
//     return (
//         <div className='cardBody'>
//             <div className='container'>
//                 <div className='container__card'>
//                     <img src={lodging} alt='Fiches logment' className='container__card__img' />
//                     <div className='container__card__title'>
//                         Test
//                     </div>
//                 </div>
//                 <div className='container__card'>
//                     <img src={lodging} alt='Fiches logment' className='container__card__img' />
//                     <div className='container__card__title'>
//                         Test
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

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