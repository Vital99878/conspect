// overload function
export function tTest(data: string): string;
export function tTest(data: number): number;
export function tTest(data: number | string): number | string {
    console.log(data)
    return data
}
