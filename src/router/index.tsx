import {useRoutes} from "react-router-dom"
import Product from "./product/Product"
import Layout from "./layout/Layout"
import Login from "./login/Login"
import Crud from "./crud/Crud"
const MainRouters = () => {
  return <>
  {
  useRoutes ([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Product/>,
            },
            {
                path:"/crud",
                element:<Crud/>,
            },
        ],
    },
    {
      path:"/login",
      element:<Login/>,
  },
    
  ])
}
  </>
}

export default MainRouters;