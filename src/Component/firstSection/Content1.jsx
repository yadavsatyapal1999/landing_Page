import machine from "../images/machine.png"


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
                <div>tag</div>
                <div>FOREVER READY</div>
                <div>with zero prep</div>
            </div>
            <div className="secondcontent2 sameline">
                <div>tag</div>
                <div>SMOOTH SKIN</div>
                <div>No more in grown hair,bumps,stuble</div>
            </div>
            <div className="thirdcontent2 sameline">
                <div>tag</div>
                <div>PAINLESS</div>
                <div>Ice Cool Tech for a Pain Free Experience</div>
            </div>
           </div>
           <div className="image">
            <img src={machine} alt="unable to find image" />
        </div>
        </div>
    </div>
}
export default Content1