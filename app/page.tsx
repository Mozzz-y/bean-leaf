import Image from "next/image";
import vector from "@/public/vector.svg";
import heart from "@/public/heart.svg";
import leaf from "@/public/leaf.svg";
import Link from "next/link";
import bean from "@/public/bean.svg";
import menu from "./menu/page";
import find_us from "./find_us/page";
import about_us from "./about_us/page";


export default function Home() {
  return (
    <div className="flex flex-col gap-6 items-center">


        <header className="flex flex-row container justify-between py-2">
          <p className="text-3xl font-semibold">Bean&Leaf</p>
          <div className="text-2xl flex flex-row gap-8">
            <Link href="/" className=""> Главная </Link>
            <Link href="/menu" className="">Меню</Link>
            <Link href="/about_us" className="">О нас</Link>
            <Link href="/find_us" className="">Где нас найти</Link>
          </div>
          <Image src={vector} width={35} height={35} alt="!"/>
        </header>


        <div className="bg-[url('/coff.jpg')] container bg-cover w-full h-full bg-center">
          <div className="flex flex-col gap-4 py-36 px-2  ">            
            <p className="font-semibold text-white text-4xl">Bean&Leaf</p>
            <p className="font-medium  text-white text-3xl">Кофейня, где  вкус <br /> встречает вдохновение</p>
            <p className="text-white text-xl">Ароматный кофе <br /> и уютная атмосфера - всё, <br /> что нужно для хорошего дня!</p>
            <button className="hover:scale-108 text-white bg-green-900 rounded-3xl w-46 h-8"> Перейти к меню</button>
          </div>
        </div>


        <div className="flex flex-row container justify-between px-24">
          <div className="flex flex-col items-center">
            <Image src={bean} width={30} height={30} alt="!"/>
            <p className="text-sm font-medium">Свежие зерна</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src={leaf} width={30} height={30} alt="!"/>
            <p className="text-sm font-medium">Натуральные <br />ингредиенты</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={heart} width={30} height={30} alt="!"/>
            <p className="text-sm font-medium">Уютная атмосфера</p>
          </div>
        </div>


    </div>
  );
}
