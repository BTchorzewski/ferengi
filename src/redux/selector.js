import { createSelector } from 'reselect';

const likedRules = (state) => {
    return state.rules.filter( e => {
        return e.isLiked === true;
    })
}

const allRules = (state) => {
    return state.rules;
}

const getLikedRules = createSelector(
    [likedRules],
    (rule) => rule
)

const getAllRules = createSelector(
    [allRules],
    (rule) => rule
)

export {getLikedRules, getAllRules};