class Player {
    constructor() {
        this.position = { x: 0, y: 0, z: 0 };
        this.velocity = { x: 0, y: 0, z: 0 };
        this.jumpStrength = 5;
        this.gravity = -0.1;
        this.isJumping = false;
        this.keys = {};
        this.mouseSensitivity = 0.1;
        this.mouseX = 0;
        this.mouseY = 0;

        // Event listeners
        window.addEventListener('keydown', (e) => this.handleKeyDown(e));
        window.addEventListener('keyup', (e) => this.handleKeyUp(e));
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    }

    handleKeyDown(event) {
        this.keys[event.key] = true;
    }

    handleKeyUp(event) {
        this.keys[event.key] = false;
    }

    handleMouseMove(event) {
        this.mouseX += event.movementX * this.mouseSensitivity;
        this.mouseY += event.movementY * this.mouseSensitivity;
    }

    update() {
        // Movement
        if (this.keys['w']) this.velocity.z -= 0.1; // Forward
        if (this.keys['s']) this.velocity.z += 0.1; // Backward
        if (this.keys['a']) this.velocity.x -= 0.1; // Left
        if (this.keys['d']) this.velocity.x += 0.1; // Right

        // Jumping
        if (this.isJumping && this.position.y <= 0) {
            this.velocity.y = this.jumpStrength;
            this.isJumping = false;
        }

        // Gravity
        this.velocity.y += this.gravity;

        // Update position
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.position.z += this.velocity.z;

        // Basic collision detection with ground
        if (this.position.y < 0) {
            this.position.y = 0;
            this.velocity.y = 0;
            this.isJumping = true;
        }
    }

    jump() {
        if (this.position.y === 0) {
            this.isJumping = true;
        }
    }
}