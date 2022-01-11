import { type } from "@testing-library/user-event/dist/type";
import * as types from "./types";
export default (state = { favorites: 0 },action) => {
  switch (action.type) {
    case types.ADD_TO_FAVORIATE:
      return {
        favorites: action.favorites,
      };
    case types.Decrement:
        return{
            favorites:action.favorites,
        }
    default:
      return state;
  }
};
//  useSelector to get state value 
//  useDispatch to update State 