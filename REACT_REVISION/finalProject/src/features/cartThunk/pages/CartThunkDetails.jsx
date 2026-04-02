/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useGlobalCartProductDetails } from '../../../hooks/useGlobalCart'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchGlobalCartDetails } from '../cartThunckDetailsSlice';

export default function CartThunkDetails() {

    const { id } = useParams()
    console.log(id);

    const { globalCartError, globalCartLoading, globalCartProduct } = useGlobalCartProductDetails()
    console.log(globalCartProduct);


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchGlobalCartDetails(id))
    }, [])

    return (
        <div>CartThunkDetails</div>
    )
}
