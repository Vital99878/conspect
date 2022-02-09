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
        this.iphoneDevice.useLightning();
        console.log(`%cWant to use micro USB, converting...`, 'color:green; font-size: 14px');
    }
}

