// wave-gradient.js

export default class WaveGradient {
    /**
     * @param {HTMLCanvasElement} canvas
     */
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.colors = ["#021B79", "#e0c3fc", "#ff6a00"];
      this.frame = 0;
  
      this.canvas.width = this.width;
      this.canvas.height = this.height;
  
      this.animate = this.animate.bind(this);
      this.handleResize = this.handleResize.bind(this);
  
      window.addEventListener("resize", this.handleResize);
      this.animate();
    }
  
    animate() {
      this.frame += 0.01;
  
      const gradient = this.ctx.createLinearGradient(0, 0, this.width, this.height);
      this.colors.forEach((color, i) => {
        const shift = Math.sin(this.frame + i) * 0.5;
        gradient.addColorStop(i / (this.colors.length - 1), color);
      });
  
      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(0, 0, this.width, this.height);
      requestAnimationFrame(this.animate);
    }
  
    handleResize() {
      this.width = this.canvas.width = window.innerWidth;
      this.height = this.canvas.height = window.innerHeight;
    }
  
    destroy() {
      window.removeEventListener("resize", this.handleResize);
    }
  }
  