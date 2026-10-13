import Image from "next/image";
import vector from "@/public/vector.svg";
import Link from "next/link";
import about from "@/public/about.png";

export default function about_us() {
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

        <div className="flex flex-col container gap-4">
            <div>
                <p className="font-semibold text-3xl">О компании</p>
                <Image className="rounded-3xl" src={about} width={512} height={32} alt="!"/>
            </div>
            <div className="flex flex-col gap-6 text-gray-700">
                <p>На сегодняшний день сеть кофеен «Bean&Leaf» — одна из 
                крупнейших и самых динамично развивающихся компаний <br /> в сфере ресторанного бизнеса в Москве, регионах России и странах СНГ.</p>
                <p>История кофеен «Bean&Leaf» восходит корнями к легендарному кафе «Bean&Leaf» у метро Октябрьская — единственном столичном месте, <br />
                     где на протяжении нескольких десятилетий гостям предлагали  изысканные лакомства <br /> и напитки: горячий шоколад
                      и легендарные блинчики с начинкой из шоколада, изюма и орехов.</p>
                <p>Новую жизнь кофейня получила в 2000 году. Возрожденная «Bean&Leaf» начала работать по европейским стандартам, <br />
                     которые предполагают значительное
                     расширение и постоянное обновление ассортимента, <br />поддержание высокого уровня сервиса и качества кухни.</p>
            </div>
        </div>


    </div>
)
}