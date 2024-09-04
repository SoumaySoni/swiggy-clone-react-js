import LOGO from "../../assets/swiggy.svg";
import { IoBagSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdHelpBuoy } from "react-icons/io";
import { GoPersonFill } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
  return (
    <>
      <div className="container p-3 flex justify-center items-center gap-64 shadow-md text-lg">
        <div className="logo ">
          <img src={LOGO} alt="" />
        </div>
        <div className="headerlist">
          <ul className="flex gap-[70px]">
            <li className="flex items-center gap-2">
              <IoBagSharp />
              <a href="#">Swiggy Cooperate</a>
            </li>
            <li className="flex items-center gap-2">
              <FaSearch />
              <a href="#">Search</a>
            </li>
            <li className="flex items-center gap-2">
              <BiSolidOffer />
              <a href="#">Offers</a>
            </li>
            <li className="flex items-center gap-2">
              <IoMdHelpBuoy />
              <a href="#">Help</a>
            </li>
            <li className="flex items-center gap-2">
              <GoPersonFill />
              <a href="#">Sign in</a>
            </li>
            <li className="flex items-center gap-2">
              <FaShoppingCart />
              <a href="#">Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
