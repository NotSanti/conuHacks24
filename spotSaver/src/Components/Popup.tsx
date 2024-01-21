import { Component } from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { LuParkingCircle } from "react-icons/lu";
import { SiOpenstreetmap } from "react-icons/si";
import { FaCarSide } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
import { TbRoad } from "react-icons/tb";

class Popup extends Component {
  render() {
    return (
      <>
        <div className="bg-white text-black">
          <h2>Parking Spot</h2>
          <FaCarSide/>
          <p>Parking Number</p>
          <TbRoad />
          <p>Parking Genre</p>
          <LuParkingCircle/>
          <p>Parking Type</p>
          <SiOpenstreetmap/>
          <p>Street Name</p>
          <CiCreditCard1/>
          <p>Pay Type</p>
          <FaDollarSign className="ml-2"/>
          <p>Price</p>
        </div>
      </>
    );
  }
}

export default Popup;

