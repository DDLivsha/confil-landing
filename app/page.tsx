
import bg from '@/assets/images/main-bg.png'
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Image src={bg} alt="bg" fill placeholder='blur' quality={90} className='absolute z-[-1] left-0 top-0 max-h-[969px]' />
    </>

  );
}
