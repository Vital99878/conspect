import React, {useState, ReactElement} from 'react'
import './TestTS.css'

const TestTS: React.FC = () => {
    type ConstructorType<C> = C extends {
                new(arg: infer A, ...args: any[]): any
            }
            ? A : never

    interface Car {
        year: number
    }


    const car: { year: number, speed?: number } = {
        year: 2015,
        speed: 200,
    }

    const showCar = (car: Car): void => {
        console.log(car.year)
    }

    class Person {
        name

        constructor(name: string, age?: number) {
            this.name = name
        }
    }

    const tt: ConstructorType<typeof Person> = 'ssss'

    const p = new Person('Vital')
    showCar(car)
    return <div className="test-typescript">Learn TS</div>
}

export default TestTS
