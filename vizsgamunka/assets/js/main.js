(function () {
    "use strict";

    const $ = s => document.querySelector(s);
    const $$ = s => document.querySelectorAll(s);

    // Preloader
    const preloader = $('#preloader');
    if (preloader) window.addEventListener('load', () => preloader.remove());

    // Scroll header effect
    const header = $('#header');
    const toggleScrolled = () => {
        if (header?.classList.contains('fixed-top')) {
            document.body.classList.toggle('scrolled', window.scrollY > 100);
        }
    };
    window.addEventListener('load', toggleScrolled);
    document.addEventListener('scroll', toggleScrolled);

    // Menu toggle
    const menuToggle = $('#menuToggle');
    const navMenu = $('#navmenu');

    menuToggle?.addEventListener('click', e => {
        e.preventDefault();
        menuToggle.classList.toggle('open');

        if (navMenu?.classList.contains('active')) {
            navMenu.classList.remove('active');
        } else {
            navMenu.classList.remove('active');
            void navMenu.offsetWidth;
            navMenu.classList.add('active');
        }
    });

    $$('.navmenu a').forEach(link =>
        link.addEventListener('click', () => {
            menuToggle?.classList.remove('open');
            navMenu?.classList.remove('active');
        })
    );

    // Scroll-to-top
    const scrollTop = $('.scroll-top');
    const toggleScrollTop = () => scrollTop?.classList.toggle('active', window.scrollY > 100);
    scrollTop?.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);

    // Theme switcher
    const root = document.documentElement;
    root.setAttribute('data-theme',
        localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    );
    $('#switchTheme')?.addEventListener('click', e => {
        e.preventDefault();
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });

    // AOS
    window.addEventListener('load', () => {
        AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
    });

    // Swiper
    window.addEventListener('load', () => {
        $$('.init-swiper').forEach(swiperEl => {
            const config = JSON.parse(swiperEl.querySelector('.swiper-config').textContent.trim());
            delete config.autoHeight;
            new Swiper(swiperEl, config);
        });
    });

})();
