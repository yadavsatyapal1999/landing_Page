import "./tenth.css"
import { WiThermometer } from 'react-icons/wi';
import image from "../images/gun2.jpg"
import { AiOutlineThunderbolt } from 'react-icons/ai';


function Tenth() {

    const thermo ={
        fontSize:"3vw",
        margin:"0"
    }

    return <div id="tenth">
        <h1 id="tenthh1">OF Application</h1>
        <div className="blocks">
            <div className="firstblock">
                <span>&#94;</span><br/>
                <span>66</span> <br/>
                <span>&#118;</span>
            </div>
            <div className="secondblock">
                <div style={{display:"inline-block"}}>{WiThermometer && <WiThermometer className="icon" />}</div>
                <div>-66</div>
            </div>
            <div className="thirdblock">
                <img className="thirdblockimg" src={image} alt="to be uploaded" />
            </div>
        </div>
        <section>
            <div>
                <div>
                   {AiOutlineThunderbolt && <AiOutlineThunderbolt className="icon"/>} 
                </div>
                <p>ENERGY ADJUSTMENT</p>
            </div>
            <div>
                <img src="" alt="" />
                <p>PULSE WIDTH ADJUSTMENT</p>
            </div>
            <div>
                <img src="" alt="" />
                <p>FREQUENCY ADJUSTMENT</p>
            </div>
            <div>
                <img src="" alt="" />
                <p>REAL-TIME TEMPERATURE MONITORING</p>
            </div>
        </section>
    </div>
}
export default Tenth