import "../header/Header.css"
import NasaLogo from "../../assets/nasa.png"

const Header = () => {

    return (
    <div className="headerCon">
        <div className="logo">
        <img src={NasaLogo} alt=""></img>
        </div>
        <div className="headerTitle">
        Daily Nasa
        </div>
        <div className="logo">
        <img src={NasaLogo} alt=""></img>
        </div>
    </div>
    
    )


}

export default Header