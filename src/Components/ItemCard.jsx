/* eslint-disable react/prop-types */

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart, incrementQty, decrementQty } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";
const ItemCard = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete
       onClick={() => {dispatch(removeFromCart({ id, img, name, price, qty }));
       toast(`Removed ${name} from cart`,{
         icon: "👏",
       });
       }} className="absolute right-4 cursor-pointer" />
      <img src={img} alt="image"
        className="w-[50px] h-[50px]  "
      />
      <div className="leading-5">
        <h2>{name}</h2>
        <div className="flex justify-between ">
          <span className="text-green-500 font-bold">₹{price}</span>
          <div className="flex gap-3 absolute right-4">
            <AiOutlinePlus onClick={() => qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)} className="border-2 border-gray-500 text-gray-500 hover:text-white hover:bg-green-500 hover:border-none text-xl p-1 rounded-sm transition-all ease-in-out cursor-pointer" />
            <span>{qty}</span>
            <AiOutlineMinus onClick={() => qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)}
              className="border-2 border-gray-500 text-gray-500 hover:text-white hover:bg-green-500 hover:border-none text-xl p-1 rounded-sm transition-all ease-in-out cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
