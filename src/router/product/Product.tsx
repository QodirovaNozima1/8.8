import { useEffect,useState } from "react"
import { request } from "../../api"
import { IPorduct } from "../../types"
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
const Home = () => {
  const [products,setProducts] = useState<null | IPorduct[]>(null)
  useEffect(()=>{
    request.get("products?limit=10&page=2").then((res)=>{
      setProducts(res.data?.data?.products)
    })
  },[])
  return (
    <div className="container mx-auto grid grid-cols-5 gap-4  w-full mt-7">
    {
      products?.map((product:IPorduct)=>(
        <div key={product.id} className="w-[250px] h-[400px] rounded-lg hover:inset-shadow-emerald-200">
          <img src={'https://furnishing.carwashing.uz/' + product.images[0]} width={300} height={200} alt="" />
          <div className="flex flex-col items-start p-2">
          <h2 className="text-[20px] font-bold">{product.name}</h2>
          <h2 className="text-green-900 text-[18px] font-bold">${product.price}</h2>
          <div className="flex gap-1 items-center">
          <VscDebugBreakpointLogUnverified />
          <h2>{product.tags}</h2>
          </div>
          </div>
        </div>
      ))
    }
    </div>
  )
}

export default Home