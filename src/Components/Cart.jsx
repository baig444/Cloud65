import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from 'react-redux'
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const [activeCart, setActiveCart] = useState(false)
  const cartItems = useSelector(state => state.cart.cart)
  const TotalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0)
  const TotalPrice = cartItems.reduce((totalPrice, item) => totalPrice + item.price * item.qty, 0)

  const navigate =  useNavigate()
  return (
    <>
      <div className={`fixed right-0 top-0 w-full bg-white lg:w-[25vw] h-full ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all ease-in-out duration-500 z-50`}>
        <div className="flex justify-between p-2 items-center my-3">
          <span className="text-xl font-semibold text-gray-600">My Orders</span>
          <IoMdClose onClick={() => setActiveCart(!activeCart)} className="border-2 border-gray-600 font-bold p-1 text-xl hover:text-red-600 hover:border-red-600 cursor-pointer rounded-md" />
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-800">
            Your cart is empty
          </h2>
        )}
        <div className="absolute bottom-0 mb-3 pl-3">
          <h3 className="font-semibold text-gray-500">Items :{TotalQty} </h3>
          <h3 className="font-semibold text-gray-500">Total Amount :{TotalPrice} </h3>
          <hr className="w-[90vw] lg:w-[25vw] my-2" />
          <button onClick={()=> navigate("/success")} className="w-[90vw] mx-10 lg:w-[18vw] p-2 bg-green-500 font-semibold rounded-md hover:bg-green-600 text-white">Checkout</button>
        </div>
      </div>
      <FaCartShopping onClick={() => setActiveCart(!activeCart)}
       className={`fixed right-2 bg-white rounded-2xl shadow-md p-3  bottom-20 text-5xl cursor-pointer ${TotalQty > 0 && "animate-bounce delay-150 transition-all"}`} />
    </>
  )
}

export default Cart
