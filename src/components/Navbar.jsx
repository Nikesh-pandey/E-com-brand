
const Navbar=()=>{
    return(
<div className="Maindiv">
    <nav>

    <div className="Logo">
    <img src="/images/brand_logo.png" alt="logo" />
    </div>
    <div >
        <ul className="dotted">
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>

        </ul>
    </div>
    <div className="button">
        <button className="log-in">Login</button>
    </div>
    </nav>



</div>

    );
}
export default Navbar