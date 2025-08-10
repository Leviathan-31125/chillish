import React from 'react'

const Myprofile = () => {
  return (
    <div className='px-20 py-5'>
      <div className='bg-[#FFF0EC]/80 px-16 py-10 rounded-3xl'>
        {/* Content Container  */}
        <div className='flex justify-center gap-24 mb-7'>
          {/* Biografi Container  */}
          <div className='w-5/12 space-y-3'>
            <h1 className='text-4xl font-semibold max-w-[13rem]'>Halo, saya <span className='font-bold text-green-600'>Ray Ilahude</span></h1>
            <p>
              Sejak kecil, saya tumbuh dan terbiasa dengan bahasa Inggris. Hal ini berkat didikan orang tua yang memfasilitasi saya dalam mendalami bahasa. Namun, sejak berpindah ke Gorontalo, akses terhadap bahasa Inggris yang saya temukan lebih sedikit, salah satunya toko buku idaman yang kerap saya datangi setiap pekan.
            </p>
            <p>
              Berangkat dari kecintaan terhadap bahasa asing tersebut saya belajar bahasa Inggris secara otodidak melalui film, buku, dan juga lagu-lagu kegemaran yang tren pada saat itu.
            </p>
            <p>
              Bahkan saat menempuh pendidikan di Al-Azhar Mesir pun, kecintaan saya terhadap dunia literasi semakin bertambah. Kecintaan tersebut melahirkan komunitas English Club yang menjadi ladang bagi para pelajar untuk menyalurkan opini mereka bukan hanya dalam bahasa Arab, tetapi juga bahasa Inggris.
            </p>
            <p>
              Belajar bahasa Inggris itu tidak perlu serius, disini saya ingin membentuk komunitas dengan tujuan yang beragam. ingin fokus di media sosial? Boleh. Mau jadi content creator? Boleh juga. Atau mau gabung reading club? Juga bisa. Yuk join sekarang!
            </p>
          </div>
          {/* Image Container  */}
          <div className='flex flex-col justify-between'>
            <div className='relative'>
              <div className='bg-[#1CB190]/60 max-w-[17rem] max-h-[12rem] w-[17rem] h-[12rem] rounded-3xl'></div>
              <img src='/img/ray.png' alt='Ray Ilahude' className='absolute top-8 left-14 max-w-[20rem] w-[20rem] drop-shadow-lg'/>
            </div>
            <div className='relative'>
              <div className='bg-[#010200]/60 max-w-[17rem] max-h-[12rem] w-[17rem] h-[12rem] rounded-3xl ms-9'></div>
              <img src='/img/ray-2.png' alt='Ray Ilahude' className='absolute -top-16 left-0 max-w-[20rem] w-[17rem] drop-shadow-lg'/>
            </div>
          </div>
        </div>
        {/* Button Container  */}
        <div className='flex gap-4 justify-center'>
          <button className='bg-[#FC6A34] w-max px-8 py-2 rounded-full font-medium text-white hover:scale-105 transform duration-150 focus:scale-100 focus:ring focus:ring-offset-2 focus:ring-[rgb(249,187,165)]'>
            Watch My Video
          </button>
          <button className='bg-[#FC6A34] w-max px-8 py-2 rounded-full font-medium text-white hover:scale-105 transform duration-150 focus:scale-100 focus:ring focus:ring-offset-2 focus:ring-[rgb(249,187,165)]'>
            Read My Articles
          </button>
          <button className='bg-[#FC6A34] w-max px-8 py-2 rounded-full font-medium text-white hover:scale-105 transform duration-150 focus:scale-100 focus:ring focus:ring-offset-2 focus:ring-[rgb(249,187,165)]'>
            Read My Book
          </button>
        </div>
      </div>
    </div>
  )
}

export default Myprofile
