import { useEffect, useState } from 'react'
import {HashLoader} from 'react-spinners'
const Success = () => {
  const[loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  },[])
  return (
    <div className="flex flex-col text-center items-center justify-center h-screen">
      {
        loading ? <HashLoader color="#16A34A" /> :
        <div>
        <h1 className="text-3xl font-bold">Order Successfully!</h1>
        <h2>Your order has been placed</h2>
        </div>
      }
     
    </div>
  )
}

export default Success
