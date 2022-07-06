/* eslint-disable @typescript-eslint/no-explicit-any */
export type ConstructorType<C> = C extends { new (arg: infer A, ...args: any[]): any } ? A : never;
