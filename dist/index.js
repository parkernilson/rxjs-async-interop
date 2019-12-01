"use strict";
/**
 * This package contains modules which help in using rxjs observables with async functions.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * creates a promise which either resolves to the first value
 * emitted by the given observable or rejects with an error
 * from the observable
 * @template Type the type of the observable.
 * @param obs the observable to create a promise from.
 */
function firstValPromise(obs) {
    return new Promise((resolve, reject) => {
        obs.subscribe(val => {
            resolve(val);
        }, error => {
            reject(error);
        });
    });
}
exports.firstValPromise = firstValPromise;
