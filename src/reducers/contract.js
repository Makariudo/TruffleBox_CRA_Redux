import { NEW_INSTANCE, SEED_INSTANCE } from '../actions/types';

export const initialState = {
  web3: null,
  accounts: null,
  contract: null,
  storageValue: 0,
  isLoading: false
};

// reducer qui va gérer les recettes
const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case NEW_INSTANCE:
      return {
        ...oldState,
        isLoading: true,
      };
    case SEED_INSTANCE:
      return {
        ...oldState,
        isLoading: false,
        web3: action.web3,
        accounts: action.accounts,
        contract: action.instance,
        storageValue: action.storageValue,
      };
  
    default:
      return { ...oldState };
  }
};

export default reducer;