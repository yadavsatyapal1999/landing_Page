import myImage from "../images/machine.png"
import "./fourth.css"
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";

function Fourth() {



    return <div id="fourth">
        <h1 id="head">WE HAVE DEVELOPED A
            UNIQUE <br /> LASER FOR HAIR RENOVAL</h1>
        <div className="hollow-text4">WE HAVE DEVELOPED A
            UNIQUE LASER FOR HAIR RENOVAL</div>
        <div className="imgsection">
            <div className="line1">
                <img src={image1} />
            </div>
            <div>
                <img src={myImage} alt="uploading" />
            </div>
            <div className="line1">
                <img src={image2} />
            </div>
        </div>
    </div>
}
export default Fourth