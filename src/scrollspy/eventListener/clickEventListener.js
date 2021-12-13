const clickEventListener = event => {
    event.preventDefault();  //TODO: Really necessary?

    const navigationLink = event.source; //TODO: Use class?
    const targetSection = document.querySelector(navigationLink.getAttribute("href"));

    targetSection.scrollIntoView({
        behavior: "smooth"
    });
};

export default clickEventListener;