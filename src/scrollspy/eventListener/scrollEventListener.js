const scrollEventListener = () => {
    const scrollPos = scrollContainer.scrollTop || document.body.scrollTop;

    sections.forEach(section => { //TODO: Define sections
        if (section.offsetTop <= scrollPos) {
            const id = section.id;

            const activeNavigationLink = document.querySelector('.active');
            if (activeNavigationLink)
                activeNavigationLink.classList.remove('active');

            document.querySelector(`a[href*=${id}]`).parentNode.classList.add('active');
        }
    });
};

export default scrollEventListener;