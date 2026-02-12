'use client';
import Image from "next/image";
import { useEffect,useState} from "react";
export default function Home() {
const[isloading,setisloading]=useState(true);
const[currentImage,setcurrentImage]=useState(0);
const images=[
  'arsenal.svg',
  'chelsea.svg',
  'liverpool.svg',
  'manchester-city.svg',
  'manchester-united.svg',
  'tottenham-hotspur.svg',
  'wolverhampton.svg',
  'fulham.svg',
  'brentford.svg',
  'newcastle-united.svg',
  'astonvilla.svg',
  'brighton.svg',
  'everton.svg',
  'leeds-united.svg',
   'crystal-palace.svg',
   'bournemouth.svg',
   'sunderland.svg',
   'westham-united.svg',
   'nottingham-forest.svg'

]


  useEffect(()=>{
//setTimeout(()=>{
 // setisloading(false);
//},30000);
setInterval(()=>{
const imagesRandom=Math.floor(Math.random()*images.length);
  setcurrentImage(imagesRandom);
},3000)
  },[]);

  return (
    <div className="flex justify-center items-center h-screen"> 
      {isloading?<div className="flex"><Image src={`/logos/${images[currentImage]}`} alt="Loading..." width={100} height={100} className="animate-pulse" /></div>:<div>Hello World</div>}
    </div>
  );
}
