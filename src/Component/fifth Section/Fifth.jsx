import Box from "./Box";
import "./fifth.css"
import { FaWallet, FaRegSmile,  FaHeart, FaCoins, FaHourglassHalf  } from 'react-icons/fa';
import { BsFillLightningFill } from 'react-icons/bs';

function Fifth() {
    let arr = ["Conevient Booking", "Skin Care", "Art Laser Technology", "Personalized Care", "Pocket Friendly", "Life Time"]
    return <div id="fifth">
        <h1 id="heads">SNYLLO ESTHETICA</h1>
        <div className="hollow-text5">
            WHY CHOOSE US
        </div>
        <div className="box">
            <Box icon={FaWallet} name={arr[0]} />
            <Box icon={FaRegSmile} name={arr[1]} />
            <Box icon={BsFillLightningFill } name={arr[2]} />
            <Box icon={FaHeart} name={arr[3]} />
            <Box icon={FaCoins} name={arr[4]} />
            <Box icon={FaHourglassHalf} name={arr[5]} />
        </div>
    </div>
}

export default Fifth