import machine from "../images/machine2.png"
import { FaLeaf } from 'react-icons/fa';
import { FaRegSmile } from 'react-icons/fa';
import { FaMedkit } from 'react-icons/fa';


function Content1() {



    return <div className="content">
        <div className="content1">


            <div className="firstcontent1">
                HAIR REMOVAL
            </div>
            <div className="secondcontent1">
                REDEFINED AT HOME
            </div>
            <div className="thirdcontent1">
                No More Monthly Hair Removal Fuss
            </div>
        </div>
        <div className="inlinecontent">
            <div className="content2">
                <div className="firstcontent2 sameline">
                    <div className="parenticon" >
                        {FaRegSmile && <FaRegSmile className="icon" />}
                    </div>
                    <div className="firstchild"  >FOREVER READY</div>
                    <div className="secondchild" >with zero prep</div>
                </div>
                <div className="secondcontent2 sameline">
                    <div className="parenticon" >

                        {FaLeaf && <FaLeaf className="icon" />}
                    </div>
                    <div className="firstchild" >SMOOTH SKIN</div>
                    <div className="secondchild" >No more in grown hair,bumps,stuble</div>
                </div>
                <div className="thirdcontent2 sameline">
                    <div className="parenticon" >
                        {FaMedkit && < FaMedkit className="icon" />}
                    </div>
                    <div className="firstchild" >PAINLESS</div>
                    <div className="secondchild" >Ice Cool Tech for a Pain Free Experience</div>
                </div>
            </div>
            <div className="image">
                <img src={machine}  alt="unable to find image" />
            </div>
        </div>
    </div>
}
export default Content1