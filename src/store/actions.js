import { ADD_TO_FAVORIATE } from "./types";
import {Decrement} from './types';
import {Appnd} from './types';
import {NAppnd} from './types'
export const addToFavorite = (payload) => {
  return {
    type: ADD_TO_FAVORIATE,
    payload: { favorites: payload.favorites},
  };
};

export const decrement = (payload) => {
    return {
      type: Decrement,
      payload: { decrement: payload.favorites},
    };
  };