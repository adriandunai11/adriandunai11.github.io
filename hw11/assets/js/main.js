(function () {
    "use strict";

    let scrollTop = document.querySelector('.scroll-top');

    function toggleScrollTop() {
        if (scrollTop) {
            window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
    }

    if (scrollTop) {
        scrollTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        window.addEventListener('load', toggleScrollTop);
        document.addEventListener('scroll', toggleScrollTop);
    }

    const $root = $(document.documentElement);

    const saved = localStorage.getItem('theme');
    if (saved) {
        $root.attr('data-theme', saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        $root.attr('data-theme', 'dark');
    }

    $('#switchTheme').on('click', function (e) {
        e.preventDefault();
        const current = $root.attr('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        $root.attr('data-theme', next);
        localStorage.setItem('theme', next);
    });

    function aosInit() {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
    window.addEventListener('load', aosInit);
})();