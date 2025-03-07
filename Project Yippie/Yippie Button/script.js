// Get the image element
const playButton = document.getElementById('playButton');
const miniImageContainer = document.getElementById('miniImageContainer');

// Add an event listener to the image to play the audio on click
playButton.addEventListener('click', function() {
    // Create a new audio element each time the image is clicked
    const audio = new Audio('yippee.mp3'); // Path to your audio file
    audio.play(); // Play the new audio element

    // Create a mini image element
    const miniImage = document.createElement('img');
    miniImage.src = playButton.src;
    miniImage.classList.add('mini-image');

    // Position the mini image at the same location as the playButton
    const rect = playButton.getBoundingClientRect();
    miniImage.style.left = `${rect.left + window.scrollX}px`;
    miniImage.style.top = `${rect.top + window.scrollY}px`;

    // Append the mini image to the container
    miniImageContainer.appendChild(miniImage);

    // Remove the mini image after the animation ends
    miniImage.addEventListener('animationend', () => {
        miniImage.remove();
    });
});