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
export declare function firstValPromise<Type>(obs: Observable<Type>): Promise<Type>;
