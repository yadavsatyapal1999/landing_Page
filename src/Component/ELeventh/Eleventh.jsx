
import "./eleventh.css";
import girl from "../images/girl.jpg"
function Eleventh() {

    return <div className="eleventh">
        <h1 id="head" >DETAILS</h1>
        <div className="hollow-text11">
            NEED MORE
        </div>
        <h4 id="secondhead">Our Exprets  Have All Answers For You</h4>
        <div id="form" className="form">
            <form onSubmit={(e) => {
                e.preventDefault;
            }}>
                <input  type="text" placeholder="Your name" />
                <input type="number" placeholder="Phone Number" /><br />
                <input type="email" placeholder="Email Address" /><br />
                <input type="text" placeholder="Treatment" /><br />
                <input type="text" placeholder="Location" /><br />
                <button>Submit</button>
            </form>
            <div>
                <img src={girl} 
                style={{borderRadius:"2vw"}}
                alt="image" />
            </div>
        </div>
    </div>
}
export default Eleventh