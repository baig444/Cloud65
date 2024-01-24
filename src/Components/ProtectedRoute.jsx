/* eslint-disable react/prop-types */
import {useSelector} from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({element}) => {
    const cartItems = useSelector(state => state.cart.cart)
  return cartItems.length > 0 ? element : <Navigate to='/' />
}

export default ProtectedRoute
