/**
 * @author nstCactus
 * @date 24/10/16 13:39
 */

type Dht22Reading = {
    temperature: number,
    humidity: number,
    isValid: boolean,
    errors: any,
};

interface Dht {
    read(
        sensorType: number,
        gpioPin: number,
        callback?: (err: Error, temperature: number, humidity: number) => void
    ): Dht22Reading;
}
