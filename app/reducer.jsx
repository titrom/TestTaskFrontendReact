const Map = require("immutable").Map;

const reducer = function (state = Map(), action) {
    switch (action.type) {
        case "SET_STATE":
            return state.merge(action.state);
        case "ADD_PHONE":
            return state.update("phones", (phones) => [...phones, action.phones]);
        case "DELETE_PHONE":
            return state.update("phones", (phones)=> phones.filter((item) => item !== action.phones));
    }
    return state;
}

module.exports = reducer;