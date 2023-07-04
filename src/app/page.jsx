import Image from "next/image";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";
import styles from './page.module.css'

export default function Home() {
  return (
    <div className='flex flex-col-reverse md:flex-row items-center gap-2'>
      <div className='flex-1 flex flex-col gap-12'>
        <h1 className='text-5xl md:text-7xl bg-gradient-to-b from-[#194c33] to-[#bbb]  bg-clip-text text-transparent'>
          Better design for your digital products.
        </h1>
        <p className='text-2xl font-light'>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      <div className='flex-1 flex flex-col gap-12'>
        <Image src={Hero} alt="" className={`w-full h-[500px] object-contain ${styles.animation}` }/>
      </div>
    </div>
  );
}
