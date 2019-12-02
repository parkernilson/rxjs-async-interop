/**
 * This package contains modules which help in using rxjs observables with async functions.
 */

 //TODO: figure out how peer dependencies work to make sure this package will work with projects that don't have exactly the same version of rxjs

import { Observable } from 'rxjs';

/**
 * creates a promise which either resolves to the first value
 * emitted by the given observable or rejects with an error
 * from the observable
 * @template Type the type of the observable.
 * @param obs the observable to create a promise from.
 */
export function firstValPromise<Type>(obs: Observable<Type>): Promise<Type> {
    return new Promise<Type>((resolve, reject) => {
        obs.subscribe((val: Type) => {
            resolve(val)
        },
        (error: any) => {
            reject(error)
        })
    })
}