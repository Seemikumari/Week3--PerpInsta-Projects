// JavaScript functionality for handling image uploads (simulated)
document.getElementById('uploadButton').addEventListener('click', function() {
    // Simulate image upload process
    var imageUrl = prompt('Enter image URL:');
    if (imageUrl) {
        addImageToGallery(imageUrl);
    }
});

// Function to add an image to the gallery
function addImageToGallery(imageUrl) {
    var gallery = document.querySelector('.gallery');
    
    var imgElement = document.createElement('img');
    imgElement.src = imageUrl;

    var imgContainer = document.createElement('div');
    imgContainer.appendChild(imgElement);

    gallery.appendChild(imgContainer);
}
