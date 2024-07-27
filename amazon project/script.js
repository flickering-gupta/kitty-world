document.getElementById('change-background').addEventListener('click', function() {
    // Array of background images
    const backgrounds = [
        ,
        'background2.jpg',
        'background3.jpg'
    ];

    // Get a random image from the array
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    // Change the background image
    document.body.style.backgroundImage = `url(${randomBackground})`;
});
