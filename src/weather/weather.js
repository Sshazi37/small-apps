import React from 'react'

export default function Weather() {
    return (
        <>
            <h1 className="text-3xl font-bold underline m-5">Weather</h1>
            <div>
                <input type='text'
                    className="placeholder-shown:border-black-500 border-2 rounded py-1 pl-2 mt-3"
                />
                <button
                    className="text-white bg-red-500 border-0 py-1 px-6 focus:outline-none hover:bg-red-600 rounded">
                    Search
                </button>
            </div>

            <div class="flex flex-wrap -m-4 justify-center mt-5">
                <div class="xl:w-1/4 md:w-1/2 p-4">
                    <div class="bg-gray-100 p-6 rounded-lg">
                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                        <h2 class="text-lg text-gray-900 font-medium title-font mb-4">City Name</h2>
                        <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
