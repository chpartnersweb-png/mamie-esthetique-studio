import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export function initSite() {
  gsap.registerPlugin(ScrollTrigger);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let lenis: Lenis | undefined;
  let tick: ((time: number) => void) | undefined;
  const media = gsap.matchMedia();

  function configureScroll() {
    if (tick) gsap.ticker.remove(tick);
    lenis?.destroy();
    lenis = undefined;
    if (!reduceMotion.matches) {
      lenis = new Lenis({ lerp: .085, smoothWheel: true, syncTouch: false, anchors: { offset: -110 } });
      lenis.on('scroll', ScrollTrigger.update);
      tick = (time: number) => lenis?.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    }
  }
  configureScroll();
  reduceMotion.addEventListener('change', configureScroll);
  media.add('(prefers-reduced-motion: no-preference)', () => {
    const hero = gsap.timeline({ defaults: { ease: 'power2.out' } });
    hero.from('.hero-photo img', { scale: 1.045, duration: 1.45 })
      .from('.hero-location', { opacity: 0, y: 10, duration: .7 }, .12)
      .from('.hero h1 span', { opacity: 0, y: 20, stagger: .16, duration: .9 }, .25)
      .from('.hero-description, .hero-button, .hero-conditions', { opacity: 0, y: 12, stagger: .08, duration: .65 }, .6);
    document.querySelectorAll<HTMLElement>('.reveal').forEach((element) => {
      gsap.from(element, { y: 18, opacity: 0, duration: .75, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 94%', once: true } });
    });
    const curve = document.querySelector<SVGPathElement>('.about-curve path');
    if (curve) {
      const length = curve.getTotalLength();
      gsap.fromTo(curve, { strokeDasharray: length, strokeDashoffset: length }, { strokeDashoffset: 0, duration: 1.8, ease: 'power1.inOut', scrollTrigger: { trigger: '.about', start: 'top 70%', once: true } });
    }
  });
  const dialog = document.querySelector<HTMLDialogElement>('#mobile-navigation');
  const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
  function closeMenu() { dialog?.close(); }
  toggle?.addEventListener('click', () => {
    if (!dialog) return;
    dialog.showModal();
    toggle.setAttribute('aria-expanded', 'true');
    lenis?.stop();
  });
  dialog?.querySelector('.menu-close')?.addEventListener('click', closeMenu);
  dialog?.addEventListener('click', (event) => {
    if (event.target === dialog) closeMenu();
    if ((event.target as Element).closest('a')) closeMenu();
  });
  dialog?.addEventListener('close', () => {
    toggle?.setAttribute('aria-expanded', 'false');
    lenis?.start();
  });
  document.querySelectorAll('details').forEach((details) => details.addEventListener('toggle', () => ScrollTrigger.refresh()));
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
  document.addEventListener('astro:before-swap', () => {
    media.revert();
    if (tick) gsap.ticker.remove(tick);
    lenis?.destroy();
    reduceMotion.removeEventListener('change', configureScroll);
  }, { once: true });
}
