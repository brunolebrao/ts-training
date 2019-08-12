import { Reducer } from 'redux';
import { RepositoriesState, RepositoryTypes } from './types';

const INITIAL_STATE: RepositoriesState = {
  data: [
    {
      id: 1,
      name: 'Bruno',
    },
  ],
  loading: false,
  error: false,
};

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepositoryTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case RepositoryTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case RepositoryTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: false,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
