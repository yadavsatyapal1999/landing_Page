import Image2 from "./Image2";
import MobileIcon from "./MobileIcon";
import Services from "./Services";
import "./second.css"
import beauty1 from "../images/beauty1.webp";
import beauty2 from "../images/beauty2.webp";
import beauty3 from "../images/beauty3.webp";
import beauty5 from "../images/beauty5.webp"

function Second(){


    return <div id="second">
        <div>
        <h1>EFFORTLESS BEAUTY FOR EVERY SKIN</h1>
        <div className="img2">
        <Image2 path={beauty1}/>
        <Image2 path={beauty2}/>
        <Image2 path={beauty3}/>
        <Image2 path={beauty5}/>
        </div>
       { /*<MobileIcon/> */}
        </div>
        <Services/>
    </div>
}
export default Second