import lodging from '../../assets/LOGO.svg'

function Card () {
    return (
        <div className='cardBody'>
            <div className='container'>
                <div className='container__card'>
                    <img src={lodging} alt='Fiches logment' className='container__card__img' />
                    <div className='container__card__title'>
                        Test
                    </div>
                </div>
                <div className='container__card'>
                    <img src={lodging} alt='Fiches logment' className='container__card__img' />
                    <div className='container__card__title'>
                        Test
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card