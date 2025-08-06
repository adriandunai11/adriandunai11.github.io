(function () {
    "use strict";

    const preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove();
        });
    }

    function toggleScrolled() {
        const selectBody = document.querySelector('body');
        const selectHeader = document.querySelector('#header');
        if (!selectHeader.classList.contains('fixed-top')) return;
        window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }

    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    $('#menuToggle').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('open');

        const $menu = $('#navmenu');
        if ($menu.hasClass('active')) {
            $menu.removeClass('active');
        } else {
            $menu.removeClass('active');
            void $menu[0].offsetWidth;
            $menu.addClass('active');
        }
    });

    $('.navmenu a').on('click', function () {
        $('#menuToggle').removeClass('open');
        $('#navmenu').removeClass('active');
    });

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