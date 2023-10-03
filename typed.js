import defaults from './defaults.js';

class Initializer {
    constructor() {
        // Initialize default options
        this.options = {...defaults };

        // Initialize other properties
        this.el = null;
        // Initialize other properties here...

        // Bind methods to this instance
        this.load = this.load.bind(this);
        // Add other methods and bindings as needed...
    }

    load(elementId, options = {}) {
        // Check if elementId is a string (HTML element ID)
        if (typeof elementId === 'string') {
            this.el = document.querySelector(elementId);
        } else {
            this.el = elementId;
        }

        // Merge options with defaults
        this.options = {...this.options, ...options };

        // Add other initialization logic here...

        // Example: Setting up cursor animations
        if (this.options.showCursor) {
            this.appendCursorAnimationCss();
        }

        // Example: Setting up fade-out animations
        if (this.options.fadeOut) {
            this.appendFadeOutAnimationCss();
        }
    }

    // Define helper methods here...

    appendCursorAnimationCss() {
        // Add cursor animation CSS here...
    }

    appendFadeOutAnimationCss() {
        // Add fade-out animation CSS here...
    }
}

// Create a single instance of Initializer
export const initializer = new Initializer();

// Export the class if needed
// export default Initializer;