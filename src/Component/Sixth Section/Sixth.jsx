import Procedures from "./Procedures";
import "./sixth.css"
import lasermachine from "../images/lasermachine.jpg"
function Sixth() {

    return <div id="sixth">
        <div id="laser">LASER HAIR REMOVAL</div>
        <div className="hollow-text6">BENIFITS OF</div>
        <div className="back-dark">
            <div >
                <div className="sixtext1" >FOREVER</div>
                <div className="sixtext2">During the course</div>
            </div>
            <div id="section2">
                <div id="firstcolumn" >
                    <div>supporting</div>
                    <div>procedures</div>
                </div>
                <div id="secondcolumn">
                    <img className="secondcolumnimg" src={lasermachine} alt="are being upload" />
                </div>
                <div id="thirdcolumn">
                    <div>Treats Ingrown</div>
                    <div>Hair+Painless</div>
                </div>
            </div>
        </div>
        <Procedures />
    </div>
}

export default Sixth