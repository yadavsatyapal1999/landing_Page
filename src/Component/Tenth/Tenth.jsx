import "./tenth.css"
import { WiThermometer } from 'react-icons/wi';
import image from "../images/gun2.jpg"
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { IoIosPulse } from 'react-icons/io';


function Tenth() {

    const thermo = {
        fontSize: "3vw",
        margin: "0"
    }

    return <div id="tenth">
        <h1 id="tenthh1">OF Application</h1>
        <div className="hollow-text10">OLED DISPLAY</div>
        <div className="blocks">
            <div className="firstblock">
                <span>&#94;</span><br />
                <span>66</span> <br />
                <span>&#118;</span>
            </div>
            <div className="secondblock">
                <div style={{ display: "inline-block" }}>{WiThermometer && <WiThermometer className="icon" />}</div>
                <div>-66</div>
            </div>
            <div className="thirdblock">
                <img className="thirdblockimg" src={image} alt="to be uploaded" />
            </div>
        </div>
        <div className="tenthlast">
            <div className="section" >
                <div
                    className="iconcenter"
                >
                    {AiOutlineThunderbolt && <AiOutlineThunderbolt className="icon" />}
                </div>
                <p>ENERGY ADJUSTMENT</p>
            </div>
            <div className="section"  >
                <div id="width" className="iconcenter1">

                </div>
                <p>PULSE WIDTH ADJUSTMENT</p>
            </div>
            <div className="section" >
                <div className="iconcenter">
                    {IoIosPulse && <IoIosPulse className="icon" />}
                </div>
                <p>FREQUENCY ADJUSTMENT</p>
            </div>
            <div className="section" >
                <div
                    className="iconcenter"
                >
                    {WiThermometer && <WiThermometer className="icon" />}
                </div>
                <p>REAL-TIME TEMPERATURE MONITORING</p>
            </div>
        </div>
    </div>
}
export default Tenth