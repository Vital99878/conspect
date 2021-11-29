import {Person, Dictionary} from './basic.models';

// & - intersection
function addMaleFor(person: Person, male: 'man' | 'woman'): Person & {male: 'man' | 'woman'} {
    return {...person, male: male}
}
