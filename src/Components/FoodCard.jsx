/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";
import {useDispatch} from 'react-redux'
import { addToCart } from '../redux/slices/CartSlice'

// eslint-disable-next-line no-unused-vars
const FoodCard = ({id,img,name,price,desc,category,rating,handleToast}) => {
  const dispatch = useDispatch()
  return (
    <div className="font-bold w-[220px] bg-white p-5 flex flex-col rounded-lg">
      <img src={img} alt="Pizza" className="w-auto h-[130px] cursor-grab hover:scale-110 transition-all duration-500 ease-in-out " />
      <div className=" text-sm flex justify-between my-2">
      <h1>{name}</h1>
      <span className="text-green-500">₹{price}</span>
      </div>
      <p className="text-xs text-gray-500">{`${desc.slice(0,50)}`}</p>
    <div className="flex justify-between my-2">
      <span className="flex items-center justify-between">
      <AiFillStar className="text-yellow-500 mr-1" />{rating}
      </span>
      <button onClick={() => { dispatch(addToCart({id,img,name,price,rating, qty: 1}))
      handleToast(name)
      }} className="p-2 bg-green-500 font-semibold rounded-md hover:bg-green-600 text-white">Add to Cart</button>
    </div>
    </div>
  )
}

export default FoodCard
