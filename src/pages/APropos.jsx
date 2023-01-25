import Banner from "../components/Banner/Banner"
import Dropdown from "../components/Dropdown/Dropdown"
import text from "../data/text.json"

function APropos () {
    return (
        <div className="aPropos">
            <div className="banner mountain">
                <Banner slogan="" />
                
            </div>
            <div className="aPropos__dropdown">
                <Dropdown  title={text.fiabilite} content={text.fiabiliteText} />
                <Dropdown  title={text.respect} content={text.respectText} />
                <Dropdown  title={text.service} content={text.serviceText} />
                <Dropdown  title={text.securite} content={text.securiteText} />
            </div>
            
        </div>
    )
}

export default APropos