# ValueObservable

Add a subclass of RxJS's Observable that has access to its current value.

```ts
const count$ = new BehaviorSubject<number>(42)
const valueObservable$ = count$ as ValueObservable<number>

valueObservable$.value // 42
valueObservable$.next(51) // Property 'next' does not exist on type 'ValueObservable<number>'.
```
