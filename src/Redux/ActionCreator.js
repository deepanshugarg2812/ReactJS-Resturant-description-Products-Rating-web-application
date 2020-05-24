import * as ActionTypes from './ActionTypes'
import {baseUrl} from '../Shared/baseUrl'
import {fetch} from 'cross-fetch'

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true))

    return fetch(baseUrl + 'dishes').then(res => res.json()).then((dishes) => dispatch(addDishes(dishes.DISHES)))
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments').then(response => response.json()).then(comments => dispatch(addComment(comments.COMMENTS)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComment = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const postComment = (dishId,rating,author,comment) => (dispatch) => {
    const newComment = {
        dishId : dishId,
        rating : rating,
        author : author,
        comment : comment
    }
    newComment.data = new Date().toISOString();

    return fetch(baseUrl + 'comments',{
        method : 'POST',
        headers: {
            "Content-Type": "application/json"
          }
    }).then(response => {
        if (response.ok) {
            return response;
          } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
        error => {
              throw error;
        })
      .then(response => response.json())
      .then(response => dispatch(addComment(response)))
      .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message);
    })
}

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions').then(response => response.json()).then(promos => dispatch(addPromos(promos.PROMOTIONS)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const fetchLeaders = () => (dispatch) => {
    return fetch(baseUrl + 'leaders').then(response => response.json()).then(leaders => dispatch(addLeaders(leaders.LEADERS)))
}

export const addLeaders = (leaders) => ({
    type : ActionTypes.ADD_LEADERS,
    payload : leaders
})