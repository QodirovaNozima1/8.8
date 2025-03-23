import { useEffect,useState } from "react"
import { request } from "../../api"
import { IPorduct } from "../../types"
const Home = () => {
  const [products,setProducts] = useState<null | IPorduct[]>(null)
  useEffect(()=>{
    request.get("products?limit=10&page=2").then((res)=>{
      setProducts(res.data?.data?.products)
    })
  },[])
  return (
    <>
    {
      products?.map((product:IPorduct)=>(
        <div key={product.id}>
          <img src={'https://furnishing.carwashing.uz/' + product.images[0]} width={200} alt="" />
          <h2>{product.name}</h2>
          <h2>{product.price}</h2>
        </div>
      ))
    }
    </>
  )
}

export default Home