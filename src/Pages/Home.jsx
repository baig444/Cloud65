import CategoryMenu from "../Components/CategoryMenu"
import Navbar from "../Components/Navbar"
import FoodItems from "../Components/FoodItems"
import Cart from "../Components/Cart"


const Home = () => {
  return (
    <div>
      <Navbar/>
      <CategoryMenu/>
      <FoodItems />
      <Cart/>
    </div>
  )
}

export default Home
