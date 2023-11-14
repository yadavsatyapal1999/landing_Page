import Box from "./Box";
import "./fifth.css"

function Fifth(){
    let arr =["Conevient Booking","Skin Care","Art Laser Technology" ,"Personalized Care" ,"Pocket Friendly","Life Time"]
    return <div id="fifth">
        <h1>SNYLLO ESTHETICA</h1>
        <div className="box">
            <Box icon={'fas fa-wallet'} name={arr[0]}/>
            <Box name={arr[1]}/>
            <Box name={arr[2]}/>
            <Box name={arr[3]}/>
            <Box name={arr[4]}/>
            <Box name={arr[5]}/>
        </div>
    </div>
}

export default Fifth