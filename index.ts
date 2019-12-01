/**
 * This package contains modules which help in using rxjs observables with async functions.
 */

import { Observable } from 'rxjs';

/**
 * creates a promise which either resolves to the first value
 * emitted by the given observable or rejects with an error
 * from the observable
 * @template Type the type of the observable.
 * @param obs the observable to create a promise from.
 */
export function firstValPromise<Type>(obs: Observable<Type>) {
    return new Promise((resolve, reject) => {
        obs.subscribe(val => {
            resolve(val)
        },
        error => {
            reject(error)
        })
    })
}