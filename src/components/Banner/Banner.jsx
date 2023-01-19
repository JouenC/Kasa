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