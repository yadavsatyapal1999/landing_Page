

function Box({ icon:IconComponent, name }) {


    return <div id="box">
       <div>{IconComponent && <IconComponent size={80}/>}</div>
        <div className="namebox">{name}</div>
    </div>
}
export default Box