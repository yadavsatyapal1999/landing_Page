

function Section({ icon: Iconcomponent, content }) {
const iconstyle ={
    color:"rgb(70, 22, 22)",
    fontSize:"6vw"
}
    return <div id="section7th">
        <div >
            {Iconcomponent && <Iconcomponent style={iconstyle} />}
        </div>
        <div style={{fontSize:"2vw"}} >{content}</div>
    </div>
}

export default Section