import { PresentationControls } from '@react-three/drei'
import { useRef } from 'react'
import MacBookModel16 from '../models/Macbook-16'
import MacBookModel14 from '../models/Macbook-14'
import gsap from 'gsap'
import { Group, Mesh, Object3D } from 'three'
import { useGSAP } from '@gsap/react'
const duration: number = 1
const offset_distance: number = 5

const fadeMeshes = (group: Group | null, opacity: number): void => {
    if (!group) return
    group.traverse((child: Object3D) => {
        if ((child as Mesh).isMesh) {
            const mesh = child as Mesh
            const materials = Array.isArray(mesh.material)
                ? mesh.material
                : [mesh.material]
            materials.forEach((material) => {
                if (!material.transparent) {
                    material.transparent = true
                }
                gsap.to(material, { opacity, duration: duration })
            })
        }
    })
}
const moveGroup = (group: Group | null, x: number) => {
    if (!group) return
    gsap.to(group.position, { x, duration: duration })
}

function ModelSwitcher({
    scale,
    isMobile,
}: {
    scale: number
    isMobile: boolean
}) {
    const smallModelRef = useRef(null)
    const largeModelRef = useRef(null)
    const showModel = scale === 0.08 || scale === 0.05
    const controls = {
        snap: true,
        speed: 1,
        zoom: 1,
        azimuth: [-Infinity, Infinity] as [number, number],
        config: { mass: 1, tension: 0, friction: 26 },
    }
    useGSAP(() => {
        if (showModel) {
            moveGroup(smallModelRef.current, -offset_distance)
            moveGroup(largeModelRef.current, 0)
            fadeMeshes(smallModelRef.current, 0)
            fadeMeshes(largeModelRef.current, 1)
        } else {
            moveGroup(smallModelRef.current, 0)
            moveGroup(largeModelRef.current, offset_distance)
            fadeMeshes(smallModelRef.current, 1)
            fadeMeshes(largeModelRef.current, 0)
        }
    }, [scale])
    return (
        <>
            <PresentationControls {...controls}>
                <group ref={largeModelRef}>
                    <MacBookModel16 scale={isMobile ? 0.05 : 0.08} />
                </group>
            </PresentationControls>
            <PresentationControls {...controls}>
                <group ref={smallModelRef}>
                    <MacBookModel14 scale={isMobile ? 0.03 : 0.06} />
                </group>
            </PresentationControls>
        </>
    )
}

export default ModelSwitcher
