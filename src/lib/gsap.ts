import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function fadeIn(el: any) {
    return gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: 'power3.out',
    })
}

function animateFromBottom(el: string) {
    return gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
    })
}

export { gsap, fadeIn, animateFromBottom, ScrollTrigger }
