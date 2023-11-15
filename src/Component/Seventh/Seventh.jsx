import Section from "./Section"
import { FaClipboardCheck, FaCalendarAlt, FaLaptop, FaBandAid } from 'react-icons/fa';
import "./seventh.css";
import mobile from "../images/mobile2.webp"


function Seventh() {

    return <div className="seventh">
        <div id="seventhimg" >
            <img style={{width:"100%",borderRadius:"3vw",}} src={mobile} alt="o be uploaded soon" />
        </div>
        <div id="seventhsection">
            <div style={{display:"flex"}} >
                <Section icon={FaClipboardCheck} content="SELF ASSESMENT" />
                <Section icon={FaCalendarAlt} content="APPOINTMENT" />
            </div>
            <div style={{display:"flex"}}>
                <Section icon={FaLaptop} content="SESSION START" />
                <Section icon={FaBandAid} content="POST TREATMENT CARE" />
            </div>
        </div>
    </div>
}

export default Seventh