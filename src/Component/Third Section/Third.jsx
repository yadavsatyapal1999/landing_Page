import "./third.css"
import gun from "../images/gun3.jpg"
import triangle from "../images/triangle.jpg"

function Third(){

    return <div id="third">
        <div>
        <h1 className="heading">Large Spot Size</h1>
        <div className="hollow-text3">Large Sopt Size</div>
        </div>
        <h3 className="subheading">The Large Spot Size Bring The Deeper Laser Skin Penetration <br/> and Faster Removal Treatment Speed</h3>
    <div className="fleximg">
        <div className="thirdimg">
            <img  src={triangle} alt="to be uploaded soon"/>
        </div>
        <div className="thirdimg">
            <img src={gun}  alt="to be uploaded soon"/>
        </div>
    </div>
    
    </div>
}

export default Third