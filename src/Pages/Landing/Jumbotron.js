import React from 'react'

const Jumbotron = () => {
  return (
    <div className="flex px-36 py-10 gap-10 items-center bg-[#F8F8F8] rounded-xl">
      {/*Left Text Section*/}
      <div className="flex flex-col gap-5 w-full">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Smart Learning</h1>
          <h1 className="text-4xl font-bold text-gray-900">Deeper & More</h1>
          <h2 className="text-3xl font-bold text-orange-600">- Amazing</h2>
        </div>
        <p className="flex col text-gray-700 text-base leading-relaxed">
          Test Test Aja Ray Ganteng
        </p>
        <div className="flex gap-4">
          <button className="bg-green-500 text-white font-semibold w-32 h-10 rounded-full hover:bg-green-600 transition">Start Now</button>
          <button className="flex items-center gap-2 bg-orange-400 text-white font-semibold px-6 py-2 rounded-md hover:bg-orange-500 transition">
            <span>Videos Here</span>
          </button>
        </div>
      </div>

      {/*Right Image Section*/}
      <div className="w-full flex justify-center">
        <div className="bg-orange-300 rounded-3xl p-2">
          <img
            src="/img/YoungPeopleGroup.png"
            alt="Students learning"
            className="rounded-xl w-full max-w-md"
          />
        </div>
      </div>
    </div>
  )
}

export default Jumbotron