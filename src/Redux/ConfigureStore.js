import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {Dishes} from './Dishes';
import {Comments} from './Comments';
import {Promotions} from './Promotions';
import {Leaders} from './Leaders';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        applyMiddleware(thunk)
    )

    return store
}