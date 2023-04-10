const anchors = document.querySelectorAll('ul li');
const boxes = document.querySelectorAll('.card-template');

anchors.forEach((a) => {
    a.addEventListener('click', () => {
        const filter = a.getAttribute('data-filter');

        boxes.forEach((box) => {
            if (filter === 'all' || box.classList.contains(filter)) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });

        anchors.forEach((a) => {
            a.classList.remove('active');
        });
        a.classList.add('active');
    });
});