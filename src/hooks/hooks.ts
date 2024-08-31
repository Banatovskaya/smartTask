import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = (actionCreators:any) => {
    const dispatch = useDispatch<AppDispatch>()
    return useMemo(() =>
        bindActionCreators(actionCreators, dispatch), [dispatch])
};
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;