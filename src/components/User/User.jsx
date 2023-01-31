import React from "react";

function user ({host, picture}) {
    return (
        <div>
            <div>
                {host}
            </div>
            <img src={picture} alt=""/>
        </div>
    )
}

export default user;