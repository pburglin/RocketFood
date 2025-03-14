/**
 * RocketFood - Main Application Logic
 */

// DOM Elements
const cameraButton = document.getElementById('camera-button');
const uploadButton = document.getElementById('upload-button');
const fileInput = document.getElementById('file-input');
const manualInput = document.getElementById('manual-input');
const analyzeTextButton = document.getElementById('analyze-text-button');
const infoButton = document.getElementById('info-button');
const cameraCard = document.getElementById('camera-card');
const cameraView = document.getElementById('camera-view');
const cameraCanvas = document.getElementById('camera-canvas');
const takePhotoButton = document.getElementById('take-photo-button');
const cancelCameraButton = document.getElementById('cancel-camera-button');
const resultsCard = document.getElementById('results-card');
const previewImage = document.getElementById('preview-image');
const textPreview = document.getElementById('text-preview');
const textContent = document.getElementById('text-content');
const loadingIndicator = document.getElementById('loading-indicator');
const resultsDisplay = document.getElementById('results-display');
const scoreBadge = document.getElementById('score-badge');
const ingredientsList = document.getElementById('ingredients-list');
const tipsList = document.getElementById('tips-list');
const scanAgainButton = document.getElementById('scan-again-button');

// Bootstrap Modal
const infoModal = new bootstrap.Modal(document.getElementById('info-modal'));

// Global variables
let stream = null;
let imageCapture = null;

// Initialize the application
function init() {
    // Set up event listeners
    cameraButton.addEventListener('click', startCamera);
    uploadButton.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', handleFileUpload);
    analyzeTextButton.addEventListener('click', analyzeManualInput);
    takePhotoButton.addEventListener('click', takePhoto);
    cancelCameraButton.addEventListener('click', stopCamera);
    scanAgainButton.addEventListener('click', resetApp);
    infoButton.addEventListener('click', () => infoModal.show());
}

// Camera Functions
async function startCamera() {
    try {
        // Request camera access
        stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment' },
            audio: false
        });
        
        // Set up video stream
        cameraView.srcObject = stream;
        
        // Create ImageCapture object
        const track = stream.getVideoTracks()[0];
        imageCapture = new ImageCapture(track);
        
        // Show camera UI
        cameraCard.classList.remove('d-none');
        
        // Hide intro card
        document.querySelector('.card').classList.add('d-none');
    } catch (error) {
        console.error('Error accessing camera:', error);
        alert('Unable to access camera. Please check permissions or try uploading an image instead.');
    }
}

function stopCamera() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        stream = null;
        imageCapture = null;
    }
    
    cameraView.srcObject = null;
    cameraCard.classList.add('d-none');
    document.querySelector('.card').classList.remove('d-none');
}

async function takePhoto() {
    try {
        // Capture image from camera
        const bitmap = await imageCapture.grabFrame();
        
        // Draw to canvas
        const canvas = cameraCanvas;
        canvas.width = bitmap.width;
        canvas.height = bitmap.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(bitmap, 0, 0);
        
        // Get image data
        const imageData = canvas.toDataURL('image/jpeg');
        
        // Stop camera
        stopCamera();
        
        // Process the image
        processImage(imageData);
    } catch (error) {
        console.error('Error taking photo:', error);
        alert('Error capturing image. Please try again.');
    }
}

// File Upload Function
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
        alert('Please select an image file.');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
        processImage(e.target.result);
    };
    reader.readAsDataURL(file);
}

// Manual Text Input Function
function analyzeManualInput() {
    const text = manualInput.value.trim();
    if (!text) {
        alert('Please enter an ingredients list.');
        return;
    }
    
    // Hide intro card
    document.querySelector('.card').classList.add('d-none');
    
    // Show results card
    resultsCard.classList.remove('d-none');
    
    // Show text preview
    textPreview.classList.remove('d-none');
    textContent.textContent = text;
    
    // Simulate loading
    simulateLoading(() => {
        // Analyze the text
        const results = analyzeIngredients(text);
        displayResults(results);
    });
}

// Image Processing Function
function processImage(imageData) {
    // Hide intro card
    document.querySelector('.card').classList.add('d-none');
    
    // Show results card
    resultsCard.classList.remove('d-none');
    
    // Show image preview
    previewImage.src = imageData;
    previewImage.classList.remove('d-none');
    
    // Simulate OCR and loading
    simulateLoading(() => {
        // In a real app, we would use OCR here
        // For demo purposes, we'll use some sample ingredient lists
        const sampleIngredients = [
            "Water, Organic Sprouted Wheat, Organic Honey, Sea Salt, Yeast",
            "High Fructose Corn Syrup, Modified Food Starch, Artificial Flavors, Red #40, Yellow #5, BHT, Sodium Benzoate",
            "Enriched Flour, Sugar, Vegetable Oil (Soybean and/or Canola), Corn Syrup, Whey, Salt, Baking Soda, Soy Lecithin, Natural and Artificial Flavors",
            "Guacamole Dip (Water, Hydrogenated Soybean Oil, Modified Food Starch, Artificial Colors, Natural Flavors, Salt, Citric Acid)",
            "Organic Rolled Oats, Organic Honey, Organic Coconut Oil, Organic Almonds, Organic Cinnamon, Sea Salt"
        ];
        
        // Randomly select a sample for demo purposes
        const randomSample = sampleIngredients[Math.floor(Math.random() * sampleIngredients.length)];
        
        // Show extracted text
        textPreview.classList.remove('d-none');
        textContent.textContent = randomSample;
        
        // Analyze the ingredients
        const results = analyzeIngredients(randomSample);
        displayResults(results);
    });
}

// Simulate loading (for demo purposes)
function simulateLoading(callback) {
    // Show loading indicator
    loadingIndicator.classList.remove('d-none');
    resultsDisplay.classList.add('d-none');
    
    // Simulate processing time
    setTimeout(() => {
        // Hide loading indicator
        loadingIndicator.classList.add('d-none');
        resultsDisplay.classList.remove('d-none');
        
        // Execute callback
        callback();
    }, 2000);
}

// Display Results Function
function displayResults(results) {
    // Update score badge
    updateScoreBadge(results.overallScore);
    
    // Clear previous results
    ingredientsList.innerHTML = '';
    tipsList.innerHTML = '';
    
    // Add ingredients to list
    results.ingredients.forEach(ingredient => {
        const item = document.createElement('div');
        item.className = `list-group-item list-group-item-${getCategoryClass(ingredient.category)}`;
        
        const content = `
            <div class="d-flex justify-content-between align-items-start">
                <div>
                    <div class="ingredient-name">${ingredient.original}</div>
                    <div class="ingredient-description">${ingredient.description}</div>
                    ${ingredient.alternatives.length > 0 ? 
                        `<div class="mt-1"><small><strong>Better alternatives:</strong> ${ingredient.alternatives.join(', ')}</small></div>` : 
                        ''}
                </div>
                <span class="badge bg-${getCategoryClass(ingredient.category)} ms-2">${getCategoryLabel(ingredient.category)}</span>
            </div>
        `;
        
        item.innerHTML = content;
        ingredientsList.appendChild(item);
    });
    
    // Add tips to list
    results.tips.forEach(tip => {
        const item = document.createElement('div');
        item.className = 'tip-item';
        item.innerHTML = `<i class="bi bi-lightbulb"></i> ${tip}`;
        tipsList.appendChild(item);
    });
}

// Update Score Badge
function updateScoreBadge(score) {
    // Remove existing classes
    scoreBadge.classList.remove('bg-success', 'bg-warning', 'bg-danger');
    
    // Add appropriate class and update text
    switch (score) {
        case 'green':
            scoreBadge.classList.add('bg-success');
            scoreBadge.innerHTML = '<i class="bi bi-check-circle"></i> GREEN - Looks Good!';
            break;
        case 'yellow':
            scoreBadge.classList.add('bg-warning');
            scoreBadge.innerHTML = '<i class="bi bi-exclamation-triangle"></i> YELLOW - Use Caution';
            break;
        case 'red':
            scoreBadge.classList.add('bg-danger');
            scoreBadge.innerHTML = '<i class="bi bi-x-circle"></i> RED - Potentially Harmful';
            break;
    }
}

// Helper Functions
function getCategoryClass(category) {
    switch (category) {
        case 'green': return 'success';
        case 'yellow': return 'warning';
        case 'red': return 'danger';
        case 'misleading': return 'danger';
        default: return 'secondary';
    }
}

function getCategoryLabel(category) {
    switch (category) {
        case 'green': return 'GOOD';
        case 'yellow': return 'CAUTION';
        case 'red': return 'AVOID';
        case 'misleading': return 'MISLEADING';
        default: return 'UNKNOWN';
    }
}

// Reset App Function
function resetApp() {
    // Hide results card
    resultsCard.classList.add('d-none');
    
    // Show intro card
    document.querySelector('.card').classList.remove('d-none');
    
    // Reset form
    fileInput.value = '';
    manualInput.value = '';
    
    // Reset previews
    previewImage.classList.add('d-none');
    textPreview.classList.add('d-none');
}

// Polyfill for ImageCapture if not available
if (!window.ImageCapture) {
    window.ImageCapture = class {
        constructor(track) {
            this.track = track;
        }
        
        async grabFrame() {
            const videoElement = document.createElement('video');
            videoElement.srcObject = new MediaStream([this.track]);
            videoElement.play();
            
            // Wait for video to be ready
            await new Promise(resolve => {
                videoElement.onloadedmetadata = () => {
                    resolve();
                };
            });
            
            const canvas = document.createElement('canvas');
            canvas.width = videoElement.videoWidth;
            canvas.height = videoElement.videoHeight;
            
            const ctx = canvas.getContext('2d');
            ctx.drawImage(videoElement, 0, 0);
            
            return canvas;
        }
    };
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);
