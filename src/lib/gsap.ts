import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function fadeIn(el: Element | string | null) {
    return gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: 'power3.out',
    })
}

export { gsap, fadeIn, ScrollTrigger }
