import Image from "next/image";
import vector from "@/public/vector.svg";

import Link from "next/link";


export default function find_us() {
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

        <div className="container flex flex-col ">
            <p className="text-3xl font-semibold">Рестораны</p>
            <div className="flex flex-col py-5 gap-4">
                <p className="text-xl text-gray-700">Чтобы добраться до кофейни Bean&Leaf, можно воспользоваться несколькими удобными маршрутами. <br /> Если вы 
                    предпочитаете общественный транспорт, рядом с заведением проходят автобусы №154, 33, Н6, 603 и 533.</p>
                <p className="text-xl text-gray-700">Кофейня Bean&Leaf работает ежедневно с 9:00 до 22:00, <br />что позволяет гостям насладиться ароматным кофе и уютной атмосферой практически в любое удобное время.</p>
                <p className="text-xl text-gray-700">Контактная информация кофейни Bean&Leaf: <br />г. Москва, ул. Лесная, д. 15, строение 2 <br />Телефон: +7 (495) 223-45-67 <br />Email: hello@beanleaf.coffee <br />  Сайт: www.beanleaf.coffee</p>
                
            </div>
        </div>
        
    </div>
)
}