// react
import { Link } from "react-router-dom";

// data
import text from "../data/text.json"

function Error () {
    return (
        <div className="false">
            <div className="false__error">
                {text.error}
            </div>
            <div className="false__oups">
                {text.oups}
            </div>  
            <div>
                <Link to={`/`} className="false__link">
                    {text.badDirection}			
                </Link>   
            </div>
        </div>
    )
}

export default Error