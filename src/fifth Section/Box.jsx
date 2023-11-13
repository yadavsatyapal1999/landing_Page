

function Box({ icon, name }) {


    return <div id="box">
        <div id={icon}>
            ICON
        </div>
        <div>{name}</div>
    </div>
}
export default Box