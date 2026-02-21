import React from 'react'

const MissionSection = () => {
    return (
        <div id='mission' className="flex h-full max-h-[40-rem] px-36 py-10 gap-20 items-center bg-white rounded-xl">
            {/*Left Text Section*/}
            <div className="flex flex-col gap-5 w-full">
                <div>
                    <h1 className="text-4xl font-bold text-gray-900">Video Terbaru</h1>
                    <h1 className="text-4xl font-bold text-gray-900">Insight Minggu Ini</h1>
                    <h2 className="text-3xl font-bold text-gray-900">- Tonton Sekarang</h2>
                </div>
                <p className="flex col text-gray-700 text-base leading-relaxed">
                    Setiap minggu aku upload video baru tentang produktivitas, belajar bahasa Inggris, dan pengembangan diri.
                    Yuk, cek video terbaruku dan jangan sampai ketinggalan tips-tips menarik lainnya!
                </p>
                <div className="flex gap-4">
                    <button className="bg-gray-900 text-white font-semibold px-6 h-10 rounded-full hover:bg-gray-800 transition">Tonton Video</button>
                    <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-900 font-semibold px-6 py-2 rounded-full hover:bg-gray-50 transition">
                        <span>Lihat Channel</span>
                    </button>
                </div>
            </div>

            {/*Right Image Section*/}
            <div className="w-full relative">
                <div className='absolute -top-5 -left-10 w-[10rem] h-[5rem] bg-[#FFF0EC] rounded-3xl'></div>
                <div className='absolute -bottom-5 -right-10 w-[10rem] h-[5rem] bg-[#FFF0EC] rounded-3xl'></div>
                <img
                    src="/img/YoungPeopleGroup.png"
                    alt="Latest Video Thumbnail"
                    className="relative z-10 rounded-xl w-full"
                />
            </div>
        </div>
    )
}

export default MissionSection