interface ImageObj {
    videoWidth: number;
    width: number;
    videoHeight: number;
    height: number;
    data: Uint8ClampedArray;
}
export default class ARControllerNFT {
    private options;
    private id;
    private width;
    private height;
    private image;
    private orientation;
    private cameraParam;
    private cameraId;
    private cameraLoaded;
    private artoolkitNFT;
    private listeners;
    private nftMarkers;
    private transform_mat;
    private marker_transform_mat;
    private transformGL_RH;
    private videoWidth;
    private videoHeight;
    private videoSize;
    private framepointer;
    private framesize;
    private dataHeap;
    private videoLuma;
    private camera_mat;
    private videoLumaPointer;
    private canvas;
    private ctx;
    private nftMarkerFound;
    private nftMarkerFoundTime;
    private nftMarkerCount;
    private defaultMarkerWidth;
    private _bwpointer;
    constructor(width: number, height: number, cameraParam: string, options?: object);
    static initWithDimensions(width: number, height: number, cameraParam: string, options?: object): Promise<ARControllerNFT>;
    static initWithImage(image: ImageObj, cameraParam: string, options?: object): Promise<ARControllerNFT>;
    process(image: ImageObj): void;
    detectNFTMarker(): void;
    trackNFTMarkerId(id: number, markerWidth?: number): any;
    detectMarker(image: any): number;
    getNFTMarker(markerIndex: number): {
        error: number;
        found: number;
        id: number;
        pose: Float64Array;
    };
    addEventListener(name: string, callback: object): void;
    removeEventListener(name: string, callback: object): void;
    dispatchEvent(event: {
        name: string;
        target: any;
        data?: object;
    }): void;
    debugSetup(): void;
    transMatToGLMat(transMat: Float64Array, glMat: Float64Array, scale?: number): Float64Array;
    arglCameraViewRHf(glMatrix: Float64Array, glRhMatrix?: Float64Array, scale?: number): Float64Array;
    getTransformationMatrix(): Float64Array;
    getCameraMatrix(): Float64Array;
    setDebugMode(mode: boolean): number;
    getDebugMode(): boolean;
    getProcessingImage(): number;
    setLogLevel(mode: boolean): number;
    getLogLevel(): number;
    setProjectionNearPlane(value: number): void;
    getProjectionNearPlane(): number;
    setProjectionFarPlane(value: number): void;
    getProjectionFarPlane(): number;
    setThresholdMode(mode: number): number;
    getThresholdMode(): number;
    setThreshold(threshold: number): number;
    getThreshold(): number;
    loadNFTMarker(urlOrData: string): Promise<{
        id: number;
    }>;
    setImageProcMode(mode: number): number;
    getImageProcMode(): number;
    private converter;
    private _initialize;
    private _initNFT;
    private _copyImageToHeap;
}
export {};
