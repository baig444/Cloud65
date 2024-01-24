import { useDispatch } from "react-redux"
import { setSearch } from "../redux/slices/SearchSlice"
const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <nav className="flex justify-between px-7 py-5 items-center h-[6vw] w-full">
        <div className="flex items-center gap-4">
        <img src="/chef.png" height={60} width={60} />
        <h1 className="text-[1.6vw] font-bold font-Poppins text-gray-500">Cloud65</h1>
        </div>
        <input 
        type="search"
         id=""
         autoComplete="off"
         onChange={(e) => dispatch(setSearch(e.target.value))}
          placeholder="Search here"
           className="border outline-none mr-4  p-2 border-gray-400 text-sm rounded-lg w-full lg:w-[20vw]" />
    </nav>
  )
}

export default Navbar
