import image from "../images/machine.png"
import "./second.css"

function ServicePic() {


    return <div className="servicepic">
        <div>
            <img src={image} alt="unable to load" />
        </div>
        <div className="servicered">
            <div className="justify"><span style={{ fontSize: "2vw" }}>Breast</span> <span>Timer logo</span> </div>
            <div className="justify"><span style={{ fontSize: "1vw" }}>Chest & Stomach</span>  <span>20 Min</span> </div>
            <div className="justify last"> <span>Rs 999/-</span> <span><button> -&gt; </button></span> </div>
        </div>
    </div>
}
export default ServicePic