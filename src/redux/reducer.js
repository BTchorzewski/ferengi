import { LIKE_RULE, UNLIKE_RULE } from "./types";
import JSONdata from '../data/rules';

const initialState = {
    rules: []
}

if(!localStorage.getItem('ferengi')) {
   initialState.rules = [...JSONdata];
} else {
    const rules = localStorage.getItem('ferengi');
    

    initialState.rules = [...JSON.parse(rules)]
}


export default (state = initialState, { type, id}) => {
    switch (type) {
        case LIKE_RULE: 
            const updatedItemsLikes = ()=> {
                const newRules = [...state.rules];
                const ruleIndex = state.rules.findIndex( e => {return e.id === id});
                const newRule = state.rules[ruleIndex];
                newRule.isLiked = true;
                newRules[ruleIndex] = newRule;
                return {
                    rules: newRules
                }
            }
            return updatedItemsLikes()

        case UNLIKE_RULE: 
            const updatedItemsUnlikes = ()=> {
                const newRules = [...state.rules];
                const ruleIndex = state.rules.findIndex( e => {return e.id === id});
                const newRule = state.rules[ruleIndex];
                newRule.isLiked = false;
                newRules[ruleIndex] = newRule;
                return {
                    rules: newRules
                }
            }
            return updatedItemsUnlikes()

        default: 
            return state;
    }
}
