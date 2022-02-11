export interface IPhone{
    useLightning(): void;
}

interface Android{
    useMicroUSB(): void;
}

export class IPhone7 implements IPhone {
    useLightning() {
        console.log(`%cUsing lightning port ...`, 'color:green; font-size: 14px');
    }
}

export class LightningToMicroUSBAdapter implements Android {
    iphoneDevice: IPhone;

    constructor(iphone: IPhone) {
        this.iphoneDevice = iphone;
    }

    useMicroUSB() {
        console.log(`%cMicro USB converted to Lightning.`, 'color:tomato; font-size: 14px');
        this.iphoneDevice.useLightning();
    }
}

