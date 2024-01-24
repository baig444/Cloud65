import { useEffect, useState } from 'react';
import FoodData from '../Data/FoodData';
import {useDispatch,useSelector} from 'react-redux'
import { setCategory} from '../redux/slices/CategorySlice';
const CategoryMenu = () => {
  const [categories, setcategories] = useState([]);

  const ListUniqueCategories = ()=>{
    const uniqueCategories = [
      ...new Set(
        FoodData.map((food) => food.category)
      )
    ];
    setcategories(uniqueCategories);
    console.log(uniqueCategories);
  };
  useEffect(()=>{
    ListUniqueCategories();
  },[]);

  const dispatch = useDispatch()
  const Selectedcategory = useSelector(state => state.category.category)
  return (
    <div className="my-12 mx-9">
     <h1 className="text-[18px] font-semibold text-gray-600">Find the Food you want</h1>
     <div className="flex gap-4 my-4">
     <button onClick={() => dispatch(setCategory("All"))}  className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${Selectedcategory === "All" && "bg-green-500 text-white"}`}>All</button>
      {
        categories.map((category, index)=>{
          return (
          <button onClick={() => dispatch(setCategory(category))} key={index} className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${Selectedcategory === category && "bg-green-500 text-white"}`}>{category}</button>)
        })
      }
     </div>
    </div>
  )
}
  

export default CategoryMenu
