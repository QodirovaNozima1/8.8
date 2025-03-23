import React,{FC} from "react"
import { Link } from "react-router-dom"
const Header:FC = () => {
  return (
    <header className="bg-slate-500 h-[60px] flex items-center">
        <div className="container mx-auto flex gap-6 items-center">
        <Link to={"/"} className="text-[18px] text-white italic p-2  rounded-lg">Product</Link>
        <Link to={"/crud"} className="text-[18px] text-white italic p-2  rounded-lg">Crud</Link>
        <Link to={"/login"} className="text-[18px] text-white italic p-2  rounded-lg">Log in</Link>
    </div>
    </header>
  )
}

export default React.memo(Header)