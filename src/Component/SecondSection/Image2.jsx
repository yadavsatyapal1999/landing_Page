import './second.css'


function Image2({path}){


    return <div className="image2">
       <div className="background">
        <div className="border">
            <img className='img' src={path} alt="check your internet"/>
        </div>
       </div>
    </div>
}
export default Image2