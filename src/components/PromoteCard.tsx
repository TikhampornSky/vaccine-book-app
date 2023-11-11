'use client'
import { useState } from "react"
import { VideoPlayer } from "./VideoPlayer"
import { useWindowListener } from "@/hooks/useWindowListener"

export function PromoteCard() {
    const [playing, setPlaying] = useState(true)
    useWindowListener('contextmenu', (e) => {
        e.preventDefault()
    })

    return (
        <div className="w-[80%] h-fit shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-slate-300 flex flex-row ">
            <VideoPlayer data-test-id="video-player" isPlaying={playing} vdoSrc="/video/getvaccine.mp4"/>
            <div className="flex flex-col ml-10">
                <div className="h-5/6 text-xl">
                    Get your vaccine today.
                </div>
                <div className="h-1/6">
                    <button data-test-id="video-button" className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl" onClick={() => setPlaying(!playing)}> {playing ? 'Pause' : 'Play'} </button>
                </div>
            </div>
        </div>
    )
}