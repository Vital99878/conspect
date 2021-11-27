import {Person, Dictionary} from './basic.models';

// extends
type TCondition<T> = T extends boolean ? boolean : Person
type TStringTest<T> = T extends 'test' ? 'it\'s test' : 'it\'s not test'

const test:TStringTest<number> = 'it\'s not test';
const isBooleanType: TCondition<false> = true;
const person: TCondition<number> = {name: 'v', age: 56};


// keyof - взять один из ключей типа. Тип должен быть с ключами!
type TPersonKey = keyof Person | 'new key';

// typeof - obtain type from value.
// ! можно использовать, чтобы получить тип ответа промиса
const person_2: typeof person = {age: 25, name: ' new person'}
const fn = (): 5 => 5;
type TFn = typeof fn;
const fn_2: TFn = () => 5


// in - работает как перебор значений.
type TPersonKeys = {
    [Key in keyof Person]: string
}

const personKey: TPersonKey = 'new key'
const personKeys: TPersonKeys = {age: 'age', name: ''}



