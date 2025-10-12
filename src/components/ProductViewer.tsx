'use client'
import useMacBookStore from '@/store'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import StudioLight from './three/StudioLight'
import ModelSwitcher from './three/ModelSwitcher'
import { useMediaQuery } from 'react-responsive'

function ProductViewer() {
    const { color, scale, setColor, setScale } = useMacBookStore()
    const isMobile = useMediaQuery({ query: '(max-width:1024px)' })
    return (
        <section
            id="product-viewer"
            className="container relative min-h-[93vh] mx-auto px-5 2xl:px-0 mt-40"
        >
            <h2 className="text-white font-semibold text-3xl lg:text-6xl">
                Take a closer look.
            </h2>
            <div className="absolute z-50 bottom-40 lg:bottom-40 2xl:bottom-52 left-1/2 -translate-x-1/2">
                <p className="text-xs text-center text-white bg-black/20 px-2 py-1 rounded-lg">
                    MacBook Pro | {scale === 0.08 ? `16"` : `14"`} in Space
                    {color === '#2e2c2e' ? ' Black' : ' Gray'}
                </p>
                {/* controls */}
                <div className="flex-center gap-5 mt-5">
                    {/* color-control */}
                    <div className="color-control flex-between bg-neutral-800 rounded-full px-6 py-3 gap-4">
                        <div
                            onClick={() => setColor('#adb5bd')}
                            className={clsx(
                                'bg-neutral-300 size-7 rounded-full cursor-pointer',
                                color === '#adb5bd' &&
                                    'ring-5 size-5 ring-light-100'
                            )}
                        />
                        <div
                            onClick={() => setColor('#2e2c2e')}
                            className={clsx(
                                'bg-neutral-900 size-7 rounded-full cursor-pointer',
                                color === '#2e2c2e' &&
                                    'ring-5 size-5 ring-light-100'
                            )}
                        />
                    </div>
                    {/* size-control */}
                    <div className="small-medium flex-between bg-neutral-800 rounded-full px-6 py-2.5 gap-2">
                        <div
                            onClick={() => setScale(0.06)}
                            className={clsx(
                                'size-8 rounded-full cursor-pointer  flex-center',
                                scale === 0.06
                                    ? 'bg-white text-black '
                                    : 'bg-transparent text-white'
                            )}
                        >
                            <p>14{`"`}</p>
                        </div>
                        <div
                            onClick={() => setScale(0.08)}
                            className={clsx(
                                'size-8 rounded-full cursor-pointer  flex-center',
                                scale === 0.08
                                    ? 'bg-white text-black '
                                    : 'bg-transparent text-white'
                            )}
                        >
                            <p>16{`"`}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Canvas
                camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
                className="!w-full !h-[80vh] lg:!h-dvh relative z-40"
            >
                <StudioLight />
                <ModelSwitcher
                    scale={isMobile ? scale - 0.03 : scale}
                    isMobile={isMobile}
                />
            </Canvas>
        </section>
    )
}

export default ProductViewer
