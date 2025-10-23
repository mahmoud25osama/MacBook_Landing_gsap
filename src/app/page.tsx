'use client'
import Hero from '@/components/Hero'
import ProductViewer from '@/components/ProductViewer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import ShowCase from '@/components/ShowCase'
gsap.registerPlugin(ScrollTrigger)

function Page() {
    return (
        <main>
            <Hero />
            <ProductViewer />
            <ShowCase />
        </main>
    )
}

export default Page
