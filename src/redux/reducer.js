import { LIKE_RULE, UNLIKE_RULE } from "./types";

const initialState = {
    rules: [
        {
            id: "dx1",
            number: 1,
            rule: "Once you have their money... you never give it back.",
            source: "The Nagus\" (DS9 episode)",
            isLiked: false
        },
        {
            id: "dx2",
            number: 2,
            rule: "The best deal is the one that brings the most profit.",
            source: "The 34th Rule (DS9 novel)",
            isLiked: false
        },
        {
            id: "dx3",
            number: 2,
            rule: "Money is everything.",
            source: "Strange New Worlds 9: \"The Last Tree on Ferenginar: A Ferengi Fable From the Future",
            isLiked: false
        },
        {
            id: "dx4",
            number: 3,
            rule: "Never spend more for an acquisition than you have to.",
            source: "The Maquis, Part II\" (DS9 episode)",
            isLiked: false
        }
    ]
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
