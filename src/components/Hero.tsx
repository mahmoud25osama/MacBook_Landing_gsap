'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 2
    }, [])
    return (
        <section id="hero">
            <div>
                <h1>MacBook Pro</h1>
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
                    src="/videos/hero.mp4"
                    autoPlay
                    playsInline
                    muted
                    aria-label="MacBook Pro promotional video"
                />
            </div>
            <button>Buy</button>
            <p className="lg:h3-semibold base-semibold">
                From $1599 or $133/mo for 12 months
            </p>
        </section>
    )
}
