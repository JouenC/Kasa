import React from "react";

function user ({host, picture}) {
    return (
        <div className="user">
            <div className="user__host">
                {host}
            </div>
            <img src={picture} alt="" className="user__picture"/>
        </div>
    )
}

export default user;