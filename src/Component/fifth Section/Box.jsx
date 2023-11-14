

function Box({ icon, name }) {


    return <div id="box">
        <i className={icon}></i>
        <div className="namebox">{name}</div>
    </div>
}
export default Box