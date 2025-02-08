(()=>{
    function scrollToSection(element) {
        document.getElementById(element).scrollIntoView({
            behavior: 'smooth'
        });
    }
    function createHeroCTABtn() {
        if (document.getElementById('hero')) {
            const btn = document.createElement('button');
            btn.classList.add(...[
                'px-4',
                'py-2',
                'mr-4',
                'rounded',
                'border',
                'border-white',
                'bg-black',
                'hover:bg-white',
                'hover:text-black',
                'transition-all',
                'w-32'
            ]);
            btn.innerText = 'Learn More';
            btn.addEventListener('click', ()=>{
                scrollToSection('about');
            });
            document.getElementById('hero-cta').prepend(btn);
        }
    }
    createHeroCTABtn();
})();

//# sourceMappingURL=index.4507e437.js.map
