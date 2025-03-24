import {FormEvent, useState} from 'react'
import { request } from '../../api'

const Crud = () => {
  const [name,setName] = useState("")
  const [price,setPrice]= useState("")
  const [files,setFiles] = useState<null | FileList>(null)

  const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append("name", name)
    formData.append("price", price)
    formData.append("categoryId", "1")
    formData.append("description", "lorem")
    formData.append("averageRating", "4")
    formData.append("stock", "49")
    formData.append("colors", "red")
    formData.append("sku", "SKU-953")
    formData.append("tags", "html tag")
    if (files)
      Array.from(files).forEach((file) => {
        formData.append("images", file)
      })
      request
      .post("/products",formData)
  }
  return(
    <div className=' mt-4 mx-auto flex items-center justify-center'>
      <form onSubmit={handleSubmit} action="" className='flex flex-col w-[400px] h-[400px] gap-2 bg-slate-500 rounded-lg py-5 text-white p-2.5'>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" required placeholder='name' className=' p-2 outline-none border-[2px] h-[50px] rounded-lg  focus:border-slate-400' />
        <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" required placeholder='price' className=' p-2 outline-none border-[2px] h-[50px] rounded-lg  focus:border-slate-400' />
        <input onChange={(e)=>setFiles(e.target.files)} type="file" multiple accept="image/*"  className='text-[17px] font-bold flex gap-2 items-center'/>
        <button className='mt-auto bg-slate-400 p-2 rounded-lg'>create product</button>
      </form>
      <div>
        {
          files && 
          Array.from(files).map((file,index) =>(
            <img src={URL.createObjectURL(file)} width={150} key={index} alt="" />
          ))
        }
      </div>
    </div>
  )
}

export default Crud