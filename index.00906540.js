(()=>{
    function cycleFeatures() {
        const items = document.querySelectorAll('#what-we-do-features ul li');
        let index = 0;
        let paused = false;
        function pause() {
            paused = !paused;
            items.forEach((item)=>{
                item.classList.remove('active-list-item');
            });
        }
        function focusItem() {
            if (!paused) setTimeout(()=>{
                if (index >= items.length) index = 0;
                items.forEach((item)=>{
                    item.classList.remove('active-list-item');
                });
                items[index].classList.add('active-list-item');
                index++;
            }, 1000);
            setTimeout(focusItem, 3000);
        }
        focusItem();
        document.getElementById('what-we-do-features').addEventListener('mouseenter', pause);
        document.getElementById('what-we-do-features').addEventListener('mouseleave', pause);
    }
    cycleFeatures();
})();

//# sourceMappingURL=index.00906540.js.map
