import FoodCard from "./FoodCard"
import FoodData from "../Data/FoodData"
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  const handleToast = (name) => toast.success(`Added ${name} to cart`);
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <div className="flex flex-wrap justify-center gap-5">
      {
        FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          }else{
            return food.category === category && food.name.toLowerCase().includes(search.toLowerCase());
          }
        }).map((item) => {
          return <FoodCard 
          key={item.id}
          id={item.id}
          img={item.img}
          name={item.name}
          price={item.price}
          desc={item.desc}
          category={item.category}
          rating={item.rating}
          handleToast={handleToast}        
          />
        })
      }
    </div>
    </>
  )
}

export default FoodItems
