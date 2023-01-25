import React from "react"

function Banner ({slogan}) {
    return (
        <div className="banner">
            {/* <style>background-image= {image}</style> */}
            <h1 className="banner__slogan">
 				{slogan}
 		    </h1>
        </div>
    )
}

export default Banner