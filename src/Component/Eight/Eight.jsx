import "./eigth.css";
import lasergun from "../images/lasergun.jpg"

function Eight() {

    return <div id="eigth">
        <h1 id="large">LARGE SPOT</h1>
        <div className="hollow-text8">EXCEPTIONALLY</div>
        <div id="quick-parent" >
            <div className="quick text laser-light">
                 QUICK + COMFORT
                 </div>
            <div className="quick">
                <img style={{width:"100%",background:"none"}} src={lasergun} alt="uploaded" />
            </div>
        </div>
        <div style={{textAlign:"center"}}>
        <p id="para">
            A unique and efficient new applicator with an especially large spot size of 4.82 cm2
            This breakthrough applicator make treatments much faster and pain free, significantly
            cuttingtreatment times and ensuring a more comfortable experience for patients.
        </p>
        </div>
    </div>
}
export default Eight