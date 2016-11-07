/**
 * @author nstCactus
 * @date 24/10/16 13:39
 */

interface Ds18b20 {
    list(callback?: (error: Error, deviceIds: Array<string>) => void): Array<string>;

    readSimpleC(decimals?: number, callback?: (error: Error, reading: number) => void): number;
    readSimpleC(callback?: (error: Error, reading: number) => void): number;

    readSimpleF(decimals?: number, callback?: (error: Error, reading: number) => number): number;
    readSimpleF(callback?: (error: Error, reading: number) => number): number;

    readC(deviceId: string, decimals?: number, callback?: (error: Error, reading: number) => number): number;
    readC(deviceId: string, callback?: (error: Error, reading: number) => number): number;

    readF(deviceId: string, decimals?: number, callback?: (error: Error, reading: number) => number): number;
    readF(deviceId: string, callback?: (error: Error, reading: number) => number): number;

    readAllC(decimals?: number, callback?: (error: Error, readings: Array<number>) => Array<number>): Array<number>;
    readAllC(callback?: (error: Error, readings: Array<number>) => Array<number>): Array<number>;

    readAllF(decimals?: number, callback?: (error: Error, readings: Array<number>) => Array<number>): Array<number>;
    readAllF(callback?: (error: Error, readings: Array<number>) => Array<number>): Array<number>;

    setW1Directory(devicePath: string): void;
}
