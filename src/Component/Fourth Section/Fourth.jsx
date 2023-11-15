import myImage from "../images/machine.png"
import "./fourth.css"

function Fourth() {



    return  <div id="fourth">
        <h1>WE HAVE DEVELOPED A UNIQUE LASER FOR HAIR RENOVAL</h1>
        <div className="imgsection">
            <div className="line1"></div>
            <div>
                <img src={myImage} alt="uploading" />
            </div>
            <div className="line2"></div>
        </div>
    </div>
}
export default Fourth