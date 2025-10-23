'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 2
    }, [])
    return (
        <section
            id="hero"
            className="min-h-screen lg:min-h-[80vh] col-center md:pt-10 lg:pt-20 2xl:pt-[7vh] overflow-hidden"
        >
            <div className="relative z-10 col-center gap-3 md:gap-4 lg:gap-5 max-w-full">
                <h1 className="font-semibold lg:text-3xl 2xl:text-5xl text-white">
                    MacBook Pro
                </h1>
                <Image
                    src="/title.png"
                    alt="MacBook Pro"
                    width={800}
                    height={400}
                    className="mx-auto w-2/3 object-contain"
                    priority
                />
                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    aria-label="MacBook Pro promotional video"
                    className="mx-auto max-w-full h-auto"
                >
                    <source src="/videos/hero.mp4" type="video/mp4" />
                </video>
                <button
                    type="button"
                    onClick={() => {
                        /* Add buy action here */
                    }}
                    className="relative z-10 bg-primary text-white py-2 px-6 mt-10 lg:mt-0 mb-5 rounded-full font-semibold text-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
                >
                    Buy
                </button>
                <p className="lg:h3-semibold base-semibold">
                    From $1599 or $133/mo for 12 months
                </p>
            </div>
        </section>
    )
}
