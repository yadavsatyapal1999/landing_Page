import ServicePic from "./ServicePic"
import "./second.css"

function Services() {

    return <div className=" services">
        <div className="service">SERVICES</div>
        <div className="gender">
            <div className="men">Men</div>
            <div className="women">Women</div>
        </div>
        <div className="navigator2">
            <div className="navi">Popular</div>
            <div className="navi">Hands</div>
            <div className="navi">Bikni</div>
            <div className="navi">Legs</div>
            <div className="navi">Fest</div>
            <div className="navi">Chest & Stomach</div>
            <div className="navi">Whole Body</div>
            <div className="navi">Stomatch</div>
        </div>
        <div className="pic"><ServicePic />
            <ServicePic />
            <ServicePic />
            <ServicePic /></div>
            <div> Horizontal Line</div>
    </div>

}

export default Services