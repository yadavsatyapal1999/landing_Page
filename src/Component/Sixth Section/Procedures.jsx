import laser1 from "../images/laser1.jpg";
import laser2 from "../images/laser2.jpg";
import laser3 from "../images/laser3.jpg";

function Procedures() {

    return <div id="procedure">

        <div className="proced">
            <div>
                <img id="imgprocedure" src={laser1} alt="being upload" />
            </div>
            <h1 id="h1" >2-3 Days</h1>
            <div>
                <li>Cuts/Scars</li>
                <ul>
                    <li>Irritation</li>
                </ul>
            </div>
        </div>
        <div className="proced">
            <div>
                <img id="imgprocedure" src={laser2} alt="being upload" />
            </div>
            <h1 id="h1" >7-10 Days</h1>
            <div>
                <li>Ingrow Hair</li>
                <ul>
                    <li>Irritation</li>
                    <li>Soreness</li>
                </ul>
            </div>
        </div>
        <div className="proced">
            <div>
                <img id="imgprocedure" src={laser3} alt="being upload" />
            </div>
            <h1 id="h1"  > 2-3 Weeks</h1>
            <div>
                <li>Ingrow Hair</li>
                <ul>
                    <li>Irritation</li>
                    <li>Soreness</li>
                </ul>
                <li>Needs to be Grown</li>
            </div>
        </div>

    </div>
}

export default Procedures