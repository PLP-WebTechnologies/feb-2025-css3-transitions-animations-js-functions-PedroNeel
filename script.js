document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const themeSelect = document.getElementById('theme');
    const savePrefsBtn = document.getElementById('savePrefs');
    const animateBtn = document.getElementById('animateBtn');
    const resetBtn = document.getElementById('resetBtn');
    const targetBox = document.getElementById('targetBox');
    const body = document.body;
    
    // Animation types
    const animations = ['spin', 'bounce', 'pulse', 'color-shift'];
    let currentAnimationIndex = 0;
    
    // Load saved preferences
    loadPreferences();
    
    // Event Listeners
    savePrefsBtn.addEventListener('click', savePreferences);
    animateBtn.addEventListener('click', triggerAnimation);
    resetBtn.addEventListener('click', resetAnimation);
    
    // Functions
    function loadPreferences() {
        // Load theme preference
        const savedTheme = localStorage.getItem('themePreference');
        if (savedTheme) {
            themeSelect.value = savedTheme;
            applyTheme(savedTheme);
        }
        
        // Load any other preferences you might add in the future
    }
    
    function savePreferences() {
        const selectedTheme = themeSelect.value;
        localStorage.setItem('themePreference', selectedTheme);
        applyTheme(selectedTheme);
        
        // Show confirmation animation
        savePrefsBtn.textContent = 'Saved!';
        savePrefsBtn.style.backgroundColor = '#2ecc71';
        setTimeout(() => {
            savePrefsBtn.textContent = 'Save Preferences';
            savePrefsBtn.style.backgroundColor = '#4a90e2';
        }, 1000);
    }
    
    function applyTheme(theme) {
        // Remove all theme classes
        body.classList.remove('light', 'dark', 'blue');
        // Add the selected theme class
        body.classList.add(theme);
    }
    
    function triggerAnimation() {
        // Remove any existing animation classes
        resetAnimation();
        
        // Get next animation
        const animationClass = animations[currentAnimationIndex];
        
        // Apply the animation
        targetBox.classList.add(animationClass);
        
        // Update index for next animation
        currentAnimationIndex = (currentAnimationIndex + 1) % animations.length;
        
        // Change button text to show next animation
        animateBtn.textContent = `Next: ${animations[currentAnimationIndex]}`;
    }
    
    function resetAnimation() {
        // Remove all animation classes
        animations.forEach(anim => {
            targetBox.classList.remove(anim);
        });
    }
});