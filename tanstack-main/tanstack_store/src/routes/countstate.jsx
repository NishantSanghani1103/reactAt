/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router'
import { batch, useStore } from '@tanstack/react-store'
import { counterState } from '../stores/counterStore'

export const Route = createFileRoute('/countstate')({
    component: RouteComponent,
})

function RouteComponent() {
    const count = useStore(counterState, (store) => store.count)



    return (
        <>
            <div>Hello "/countstate"! {count}</div>
            <button onClick={() => counterState.setState((prev) => {
                return {
                    ...prev,
                    count: prev.count + 1
                }
            })}>Change Counter</button>
        </>
    )
}
