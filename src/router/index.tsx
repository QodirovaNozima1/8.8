import {useRoutes} from "react-router-dom"
import Home from "./home/Home"
import About from "./about/About"
import Layout from "./layout/Layout"
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
                element:<Home/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
        ]
    },
    
  ])
}
  </>
}

export default MainRouters;