import { Component } from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { LuParkingCircle } from "react-icons/lu";
import { SiOpenstreetmap } from "react-icons/si";
import { FaCarSide } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
import { TbRoad } from "react-icons/tb";

interface PopupProps {
  onClose: () => void;
}

class Popup extends Component<PopupProps> {
  render() {
    return (
      <>
        <div className="popup-container">
          <h2 className="fixed text-center text-lg font-bold">Parking Spot</h2>
          <br></br>
          <div className="flex items-center">
            <FaCarSide className="mr-2"/>
            <p className="mb-0">Parking Number</p>
          </div>
          <div className="flex items-center">
            <TbRoad className="mr-2"/>
            <p className="mb-0">Parking Genre</p>
          </div>
          <div className="flex items-center">
            <LuParkingCircle className="mr-2"/>
            <p className="mb-0">Parking Type</p>
          </div>
          <div className="flex items-center">
            <SiOpenstreetmap className="mr-2"/>
            <p className="mb-0">Street Name</p>
          </div>
          <div className="flex items-center">
            <CiCreditCard1 className="mr-2"/>
            <p className="mb-0">Pay Type</p>
          </div>
          <div className="flex items-center">
            <FaDollarSign className="mr-2"/>
            <p className="mb-0">Price</p>
            </div>
        </div>
      </>
    );
  }
}

export default Popup;

