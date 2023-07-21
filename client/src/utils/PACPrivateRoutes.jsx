import { Outlet, Navigate } from "react-router-dom"
import jwt_decode from 'jwt-decode'

const PACPrivateRoutes = () => {

    const returnRole = (reqtoken) => {
        if (reqtoken) {
            var decoded = jwt_decode(reqtoken)
            return (decoded.role)
        }
        else {
            return (null)
        }
    }

    var frole = returnRole(localStorage.getItem("Token"))

    return (
        (localStorage.getItem("Token") && frole === "PAC") ? <Outlet /> : <Navigate to="/pac/login" />
    )
}

export default PACPrivateRoutes