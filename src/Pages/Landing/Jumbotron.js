import React from 'react'

const Jumbotron = () => {
  return (
    <div className="flex h-full max-h-[40-rem] px-36 py-10 gap-20 items-center bg-[#F8F8F8] rounded-xl">
      {/*Left Text Section*/}
      <div className="flex flex-col gap-5 w-full">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Smart Learning</h1>
          <h1 className="text-4xl font-bold text-gray-900">Deeper & More</h1>
          <h2 className="text-3xl font-bold text-orange-600">- Amazing</h2>
        </div>
        <p className="flex col text-gray-700 text-base leading-relaxed">
          Halo, teman-teman semua! Aku Ray Ilahude, pegiat pendidikan digital yang kerjaannya mengobservasi hampir 1000 video kelas antara pengajar dan pelajar.
          Aku banyak menggabungkan pengalaman kerjaku di lingkungan internasional dan juga dunia psikologi yang pengen membantu kalian naik level juga.
        </p>
        <div className="flex gap-4">
          <button className="bg-green-500 text-white font-semibold w-32 h-10 rounded-full hover:bg-green-600 transition">Start Now</button>
          <button className="flex items-center gap-2 bg-orange-400 text-white font-semibold px-6 py-2 rounded-md hover:bg-orange-500 transition">
            <span>Videos Here</span>
          </button>
        </div>
      </div>

      {/*Right Image Section*/}
      <div className="w-full relative">
        <div className='absolute -top-5 -left-10 w-[10rem] h-[5rem] bg-orange-400 rounded-3xl'></div>
        <div className='absolute -bottom-5 -right-10 w-[10rem] h-[5rem] bg-orange-400 rounded-3xl'></div>
        <img
          src="/img/YoungPeopleGroup.png"
          alt="Students learning"
          className="relative z-10 rounded-xl w-full"
        />
      </div>
    </div>
  )
}

export default Jumbotron