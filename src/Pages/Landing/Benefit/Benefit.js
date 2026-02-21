import React from 'react'
import BenefitCard from '../../../components/BenefitCard'
import { FaArrowRightLong } from 'react-icons/fa6'

const Benefit = () => {
  return (
    <div id='benefit' className='flex gap-7 px-36 py-5'>
      <div className='flex flex-col w-full gap-7'>
        <div>
          <h1 className='text-4xl font-bold'>Gimana Aku Bisa</h1>
          <h1 className='text-4xl font-bold text-gray-900'>Bantu Kalian?</h1>
        </div>
        <BenefitCard img="/benefit/speaking.png" title="Speaking Santai" description="Bukan untuk ngejar target bisa dapet skor IELTS sekian dan sekian, kita belajar Speaking melalui aktifitas sehari-hari kita biar kalian memahami dunia dengan mindset in English!" />
        <BenefitCard img="/benefit/certified.png" title="Buat Pengajar" description="Yang lagi mau fokus sama pelajaran sekolahnya, di bagian ini kalian bisa belajar bahasa Inggris menggunakan materi sekolah formal. Siap buat bikin English di sekolah jadi lebih seru?" />
      </div>
      <div className='flex flex-col w-full gap-5'>
        <BenefitCard img="/benefit/generator.png" title="Menulis Cerita" description="Di panduan sakti ini kalian akan aku bantu untuk menulis dalam Bahasa Inggris ala novel fantasy dari contoh buku-buku favoritku. Cocok buat yang mau bikin novel ala One Punch Man atau Harry Potter!" />
        <BenefitCard img="/benefit/money.png" title="Kelas Spiritual" description="Sebagai lulusan pesantren dan salah satu universitas tertua di dunia, belajar baca kitab dan agama tidak lepas dari kehidupaanku sehari-hari. Jadi buat kalian yang mau belajar kitab Islami dan memaknainya dalam bahasa Inggris, yuk join serial pendalaman Islam berbahasa Inggris ini!" />
        <div className='bg-[#FFF0EC] rounded-xl p-8'>
          <h2 className='text-2xl font-medium mb-1'>... dan masih banyak lagi!</h2>
          <a href='/#' className='underline flex gap-3 items-center'>Jelajahi semua konten <FaArrowRightLong /></a>
        </div>
      </div>
    </div>
  )
}

export default Benefit
