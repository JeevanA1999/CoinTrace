import React, { useContext } from 'react'
import "./Navbar.css"
// import logo from "../../assets/icon.png"
import addUser from "../../assets/add-user.png"
import { Link } from 'react-router-dom'
import { CoinContext } from '../../Context/CoinContext'
function Navbar() {
  const {setcurrency}=useContext(CoinContext)
   
  const currencyHandler=(event)=>{
    switch(event.target.value){
      case "usd":{
        setcurrency({name:"usd",Symbol:"$"});
        break;
      }
      case "eur":{
        setcurrency({name:"eur",Symbol:"€"});
        break;
      }
      case "inr":{
        setcurrency({name:"inr",Symbol:"₹"});
        break;
      }
      default: {
        setcurrency({name:"usd",Symbol:"$"});
        break;
      }
    }

  }
  return (
    <div className='navbar'>
      {/* <img src={logo} alt='Coin Trace' className='logo'/> */}
      <h2 className='logo'> <Link to={'/'}>Coin Trace</Link> </h2>
      <ul>
    <li ><Link to={'/'}>Home</Link></li>
    <li>Features</li>
    <li>Pricing</li>
    <li>Blog</li>
  </ul>
  <div className="nav-right">
    <select onChange={currencyHandler} name='' id=''>
      <option value="usd">USD</option>
      <option value="eur">EUR</option>
      <option value="inr">INR</option>
    </select>
    <button>Sign Up <img  src={addUser} alt=''/></button>
  </div>
    </div>
  )
}

export default Navbar