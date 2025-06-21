/**
 * WaveGradient options.
 *
 * @typedef {object} WaveGradientOptions
 * @property {number} [amplitude] Gradient waves amplitude.
 * @property {string[]} [colors] Gradient color layers. Limited to 10.
 * @property {number[]} [density] Level of detail of the plane geometry.
 * @property {number} [fps] Frames per second for rendering.
 * @property {number} [seed] Seed for the noise function.
 * @property {number} [speed] Speed of the gradient waves.
 * @property {number} [time] Initial time of the animation.
 * @property {boolean} [wireframe] Wireframe render mode.
 */
/** @typedef {number} DOMHighResTimeStamp */
/**
 * Class that recreates the https://stripe.com animated gradient.
 */
declare class WaveGradient {
    /**
     * Create a gradient instance. The element must be a canvas HTML
     * element.
     *
     * @param {HTMLCanvasElement} canvas - canvas element
     * @param {WaveGradientOptions} options - gradient options
     * @throws {TypeError} if the canvas element is not a valid canvas
     * element
     * @throws {Error} if it can't acquire a WebGL 2.0 context
     */
    constructor(canvas: HTMLCanvasElement, options: WaveGradientOptions);
    /** @private */
    private gl;
    /** @private */
    private clipSpace;
    /** @private */
    private density;
    /** @private */
    private speed;
    /** @private */
    private frameInterval;
    /** @private */
    private lastFrameTime;
    /** @private */
    private shouldRender;
    /** @private */
    private drawMode;
    /** @private */
    private drawCount;
    /**
     * The time the animation has been running in milliseconds. Can be
     * set while the animation is running to seek to a specific point in
     * the animation.
     *
     * @type {number}
     */
    time: number;
    /**
     * Resize the canvas (and geometry) to match the size it's displayed
     * at.
     *
     * @private
     */
    private resize;
    /**
     * Renders a frame.
     *
     * @private
     * @param {DOMHighResTimeStamp} now - Current frame timestamp
     */
    private render;
    /**
     * Clears resources used by the gradient instance and stops rendering.
     */
    destroy(): void;
}
/**
 * Clip space plane geometry
 */
type ClipSpacePlaneGeometry = {
    positions: ArrayBuffer;
    indices: ArrayBuffer;
    count: number;
};
type ClipSpaceConfig = {
    gl: WebGL2RenderingContext;
    shaders: [string, string];
    attributes: {
        [x: string]: ArrayBuffer;
    };
    elements: ArrayBuffer;
    uniforms: any;
};
type AttributeInfo = {
    buffer: WebGLBuffer;
    location: number;
};
type ClipSpaceUniform = {
    type: ClipSpaceUniformType;
    value: number | Array<ClipSpaceUniform>;
};
type ClipSpaceUniformType = "1f" | "2f" | "3f" | "1i";
/**
 * WaveGradient options.
 */
type WaveGradientOptions = {
    /**
     * Gradient waves amplitude.
     */
    amplitude?: number | undefined;
    /**
     * Gradient color layers. Limited to 10.
     */
    colors?: string[] | undefined;
    /**
     * Level of detail of the plane geometry.
     */
    density?: number[] | undefined;
    /**
     * Frames per second for rendering.
     */
    fps?: number | undefined;
    /**
     * Seed for the noise function.
     */
    seed?: number | undefined;
    /**
     * Speed of the gradient waves.
     */
    speed?: number | undefined;
    /**
     * Initial time of the animation.
     */
    time?: number | undefined;
    /**
     * Wireframe render mode.
     */
    wireframe?: boolean | undefined;
};
type DOMHighResTimeStamp = number;

export { type AttributeInfo, type ClipSpaceConfig, type ClipSpacePlaneGeometry, type ClipSpaceUniform, type ClipSpaceUniformType, type DOMHighResTimeStamp, WaveGradient, type WaveGradientOptions };
