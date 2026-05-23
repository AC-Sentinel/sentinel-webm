declare interface FixWebmDurationOptions {
    logger?: ((message: string) => void) | false;
}

declare function fixWebmDuration(
    blob: Blob,
    duration: number,
    callback?: (fixedBlob: Blob) => void,
    options?: FixWebmDurationOptions
): Promise<Blob> | void;

export default fixWebmDuration;
export { fixWebmDuration };