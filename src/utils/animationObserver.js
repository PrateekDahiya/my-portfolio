const setupAnimationObserver = () => {
    console.log('Setting up animation observer...');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            console.log(`Element ${entry.target.id || entry.target.tagName} is intersecting: ${entry.isIntersecting}`);
            if (entry.isIntersecting) {
                entry.target.classList.add('interaction-in');
                console.log(`Added interaction-in to ${entry.target.id || entry.target.tagName}`);
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe all elements with the 'animation-translate' class
    const animatedElements = document.querySelectorAll('.animation-translate');
    console.log(`Found ${animatedElements.length} elements with .animation-translate class.`);
    animatedElements.forEach(element => {
        observer.observe(element);
        console.log(`Observing element: ${element.id || element.tagName}`);
    });
};

export default setupAnimationObserver; 