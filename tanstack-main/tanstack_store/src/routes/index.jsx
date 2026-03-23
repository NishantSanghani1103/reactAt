/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router'
import { batch } from '@tanstack/react-store';
import { counterState } from '../stores/counterStore';

export const Route = createFileRoute('/')({
    component: RouteComponent,
})

function RouteComponent() {

    // fatch and update state

    // const countStore = createStore(0);
    // console.log(countStore.state);
    // countStore.setState(() => 1)
    // console.log(countStore.state);

    // using batch function we can update state multiple times. 

    // const countStore = createStore(0);
    // batch(() => {
    //     countStore.setState(() => 1)
    //     countStore.setState(() => 2)
    // })

    // console.log(countStore.state);


    // const store = createStore({
    //     count: 0
    // })

    // console.log(store.state);


    // store.setState((prev) => {      
    //     return {
    //         ...prev,
    //         count: prev.count + 1
    //     }
    // })

    // console.log(store.state);
    // const store = createStore({
    //     count: 0
    // })

    // const unsubscribe = store.subscribe(() => {
    //     console.log(store.state)
    // })


    // runs when counterStore changed.



    return (
        <>
            <div>Hello "/"!</div>
        </>
    )
}
