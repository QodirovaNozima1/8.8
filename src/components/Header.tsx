import React,{FC} from "react"
import { Link } from "react-router-dom"
const Header:FC = () => {
  return (
    <header className="bg-slate-500 h-[40px]">
        <div className=" mx-auto container flex gap-10">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
    </div>
    </header>
  )
}

export default React.memo(Header)