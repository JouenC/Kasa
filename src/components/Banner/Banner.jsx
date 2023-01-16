import React from "react"

function Banner ({slogan}) {
    return (
        <div className="home">
            <h1 className="home__slogan">
 				{slogan}
 		    </h1>
        </div>
    )
}

export default Banner

// {/* <div className="home">
// 				{/* <img src={landscape} alt="paysage de mer"  className="home__landscape" /> */}
// 				<h1 className="home__slogan">
// 					Chez vous, partout et ailleurs
// 				</h1>
				
// 			</div> */}