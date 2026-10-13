import Image from "next/image";
import vector from "@/public/vector.svg";
import Link from "next/link";
import latte from "@/public/latte.png";
import lattr from "../lattr/page";


export default function menu() {
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


        <div className="flex flex-col gap-4">
        <h2 className="text-3xl">Наше меню</h2>
        <div className="grid grid-cols-3 gap-16">
            <div className="border-3 rounded p-3">
                <Image src={latte} width={256} height={256} alt="!"/>
                <div className="flex flex-row justify-between py-3">
                    <div>
                        <p className="text-2xl">Латте</p>
                        <p className="text-xl">285р</p>
                    </div>
                    <Link href="/lattr" className="hover:scale-108 text-white bg-green-900 rounded-3xl w-32 h-8">
                        <p className="text-center text-xl">Заказать</p></Link>
                    </div>
                </div>
                 <div className="border-3 rounded p-3">
                <Image src={latte} width={256} height={256} alt="!"/>
                <div className="flex flex-row justify-between py-3">
                    <div>
                        <p className="text-2xl">Латте</p>
                        <p className="text-xl">285р</p>
                    </div>
                    <Link href="/lattr" className="hover:scale-108 text-white bg-green-900 rounded-3xl w-32 h-8">
                        <p className="text-center text-xl">Заказать</p></Link>
                    </div>
                </div>
                 <div className="border-3 rounded p-3">
                <Image src={latte} width={256} height={256} alt="!"/>
                <div className="flex flex-row justify-between py-3">
                    <div>
                        <p className="text-2xl">Латте</p>
                        <p className="text-xl">285р</p>
                    </div>
                    <Link href="/lattr" className="hover:scale-108 text-white bg-green-900 rounded-3xl w-32 h-8">
                        <p className="text-center text-xl">Заказать</p></Link>
                    </div>
                </div>
                <div className="border-3 rounded p-3">
                <Image src={latte} width={256} height={256} alt="!"/>
                <div className="flex flex-row justify-between py-3">
                    <div>
                        <p className="text-2xl">Латте</p>
                        <p className="text-xl">285р</p>
                    </div>
                    <Link href="/lattr" className="hover:scale-108 text-white bg-green-900 rounded-3xl w-32 h-8">
                        <p className="text-center text-xl">Заказать</p></Link>
                    </div>
                </div>
            </div>
            </div>
            </div>
)
}