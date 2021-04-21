import {combineReducers} from 'redux-immutable'
import recommendReducer from '../pages/discover/c-pages/recommend/store/index'
import playerReducer from '../pages/player/store'
const cReducer=combineReducers({
    recommendReducer,
    playerReducer
})
export default cReducer