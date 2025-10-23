import { useMediaQuery } from 'react-responsive'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'

const ShowCase = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
    const [imgLoaded, setImgLoaded] = useState(false)
    const imgElRef = useRef<HTMLImageElement | null>(null)

    useGSAP(() => {
        if (isTablet && imgLoaded && imgElRef.current) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                },
            })
            timeline
                .fromTo(
                    imgElRef.current || '.mask',
                    { opacity: 0, scale: 2 },
                    {
                        opacity: 1,
                        scale: 1.2,
                        duration: 1,
                        ease: 'power1.out',
                    }
                )
                .to('.content', {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power1.in',
                })
        }
    }, [isTablet, imgLoaded])

    return (
        <section id="showcase" className="relative">
            <div className="media relative lg:overflow-hidden">
                <video
                    src="/videos/game-optimized.webm"
                    loop
                    muted
                    autoPlay
                    playsInline
                    className="w-full  object-cover object-center"
                />
                <div className=" absolute h-full top-0 lg:-top-20 xl:top-0">
                    <Image
                        src="/mask-logo.svg"
                        alt="apple M4"
                        width={1920}
                        height={1080}
                        sizes="100vw"
                        className="mask h-full scale-150 lg:scale-100 opacity-0 "
                        quality={75}
                        loading="eager"
                        onLoadingComplete={(el) => {
                            imgElRef.current = el
                            setImgLoaded(true)
                        }}
                    />
                </div>
            </div>

            <div className="content relative z-10 my-5 lg:-mt-40 bg-black font-semibold text-xl text-dark-100 lg:opacity-0">
                <div className="wrapper container mx-auto px-5 pb-20 2xl:px-0 flex flex-col lg:flex-row justify-center gap-20">
                    <div className="lg:max-w-md">
                        <h2 className="font-semibold text-3xl lg:text-7xl text-white">
                            Apple M4
                        </h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                Introducing
                                <span className="text-white">
                                    M4, the next generation of Apple silicon
                                </span>
                                . M4 powers
                            </p>
                            <p>
                                It drives Apple Intelligence on iPad Pro, so you
                                can write, create, and accomplish more with
                                ease. All in a design that{'’'}s unbelievably
                                thin, light, and powerful.
                            </p>
                            <p>
                                A brand-new display engine delivers breathtaking
                                precision, color accuracy, and brightness. And a
                                next-gen GPU with hardware-accelerated ray
                                tracing brings console-level graphics to your
                                fingertips.
                            </p>
                            <p className="text-primary">
                                Learn more about Apple Intelligence
                            </p>
                        </div>
                    </div>

                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3 className="font-semibold text-xl lg:text-5xl text-white">
                                4x faster
                            </h3>
                            <p>pro rendering performance than M2</p>
                        </div>
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3 className="font-semibold text-xl lg:text-5xl text-white">
                                1.5x faster
                            </h3>
                            <p>CPU performance than M2</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowCase
