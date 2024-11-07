"use client"
import Image from "next/image"
import { urlFor } from "../lib/sanity"
import { useState } from "react"
interface iAppProps{
  images:any
}
export default function ImageGallery({images}:iAppProps){
  const [bigImg, setImg] = useState(images[0]);
  const handleSmallClick = (image:any) =>{
    setImg(image);

  }
return (
  <div className="grid gap-5 lg:grid-cols-5 ">
    <div className="order-last flex gap-4 lg:order-none lg:flex-col">
      {
        images.map((image:any,idx:any)=>(
          <div key={idx} className="overflow-hidden rounded-lg bg-gray-100 ">
<Image src={urlFor(image).url()}
width={200} className="h-full w-full object-cover object-center cursor-pointer"
height={200}
onClick={()=>handleSmallClick(image)}
alt="photo"/>

          </div>
        ))
      }
    </div>
    <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
      <Image src={urlFor(bigImg).url()} alt="photo" width={500} height={500}  className="h-full w-full object-cover object-center"/>
      <span className="absolute left-0 top-0 rounded-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white font-semibold">sale</span>
    </div>
  </div>
)
}