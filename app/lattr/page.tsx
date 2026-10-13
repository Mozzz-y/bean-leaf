import Image from "next/image";
import vector from "@/public/vector.svg";
import Link from "next/link";
import latte from "@/public/latte.png";

export default function lattr() {
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


        <div className="flex flex-row justify-between gap-12">
            <Image src={latte} width={512} height={512} alt="!"/>
            <div className="flex flex-col gap-2">
                <p className="font-semibold text-3xl">Латте</p>
                <p className="text-xl text-gray-700">285p</p>
                <p className="font-semibold text-2xl">Описание</p>
                <p className="text-lg text-gray-700">Больше нежности, больше молока! Это мы о кофе Латте. <br /> Напиток с мягким
                    и приятным сливочным вкусом, <br /> где молоко утонченно подчеркивает аромат эспрессо, <br />
                    а на поверхности находится воздушная и ароматная пенка. <br />С любовью варим свежий кофе Латте для настоящих ценителей мягкости!</p>
                <p className="font-semibold text-2xl">Состав</p>
                <p className="text-xl text-gray-700">Кипячёная вода</p>
                <p className="text-xl text-gray-700">Молоко питьевое</p>
                <p className="text-xl text-gray-700">Кофе жареный в зернах</p>
                <button className="hover:scale-108 text-white text-3xl bg-green-900 rounded-3xl w-64 h-16 "> Заказать</button>
            </div>
        </div>


    </div>
)
}