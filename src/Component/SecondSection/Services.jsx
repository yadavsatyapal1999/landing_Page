import ServicePic from "./ServicePic"
import "./second.css"
import { FaMale, FaFemale } from 'react-icons/fa';
function Services() {

    return <div className=" services">
        <div className="service">SERVICES</div>
        <div className="gender">
            <div className="men">
                <span>
                    {FaMale && <FaMale className="icon2"/>}
                </span>
                Men</div>
            <div className="men">
                <span>
                    {FaFemale && <FaFemale className="icon2"/>}
                </span>
                Women</div>
        </div>
        <div className="navigator2">
            <div className="navi"  >Popular</div>
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