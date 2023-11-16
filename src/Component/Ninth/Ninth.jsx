import "./ninth.css"
import image from "../images/filter.jpg"

function Ninth() {

    return <div id="ninth">
        <h1 id="ninth1"> TWICE THE FILTER</h1>
<div className="hollow-text9">
    DOUBLE FILTER
</div>
        <div id="nineimg">
            <div >
                <img style={{
                    width: "50%", height: "100%",
                    borderRadius: "10%",
                }} src={image}
                 className="ninthimage"
                  alt="to be uploaded" />
            </div>
            <div id="ninthtext">
                Fitted with an advanced two-stage water filtration system.The First Stage adopts PP-cotton
                to Filter out impurities and Prevent Laser Blockage. The Second Stage uses Resign
                to Filter out Metal Ions,Avoiding Inner Laser Corrosion and Prolonging Life System.

            </div>
        </div>
    </div>

}
export default Ninth