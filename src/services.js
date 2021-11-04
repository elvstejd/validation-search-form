import { people } from './testData';

export function getPersonById(id) {
    return new Promise((resolve, reject) => {
        const person = people.find(person => person.cedula === id);

        setTimeout(() => {
            if (!person) {
                reject();
            }

            resolve(person);
        }, 800);
    });
}