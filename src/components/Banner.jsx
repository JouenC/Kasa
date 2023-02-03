// react
import React from "react"

function Banner ({slogan}) {
    return (
        <div className="banner">
            <h1 className="banner__slogan">
 				{slogan}
 		    </h1>
        </div>
    )
}

export default Banner