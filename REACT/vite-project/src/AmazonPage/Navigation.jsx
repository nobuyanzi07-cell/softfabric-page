import logo from "./assets/amazon.png"

function Navigation (){
    return (
        <div className="nav">
            <img src={logo} width="60px" />
            <input placeholder="Search" />
        </div>
    )
}

export default Navigation