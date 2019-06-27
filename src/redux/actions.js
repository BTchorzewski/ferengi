import {
    LIKE_RULE,
    UNLIKE_RULE,
    
} from "./types";


const changeToLiked = (id) => {
    return {
        type: LIKE_RULE,
        id: id
    }
}
const changeToUnliked = (id) => {
    return {
        type: UNLIKE_RULE,
        id: id,
        payload: {
            id: "dx55",
            number: 3,
            rule: "testowe",
            source: "The Maquis, Part II\" (DS9 episode)",
            isLiked: true
        }
    }
}



export {changeToLiked, changeToUnliked };
