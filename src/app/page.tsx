'use client'
import Hero from '@/components/Hero'
import ProductViewer from '@/components/ProductViewer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)
function Page() {
    return (
        <main>
            <Hero />
            <ProductViewer />
        </main>
    )
}

export default Page
