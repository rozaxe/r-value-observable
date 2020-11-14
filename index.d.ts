import { Observable } from 'rxjs'

/**
 * A subclass of Observable that has a synchronous access to its current value.
 *
 * @class ValueObservable<T>
 */
type ValueObservable<T> = Observable<T> & {
    readonly value: T
    getValue(): T
}
