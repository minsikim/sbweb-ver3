const initialState = {
    language : 'ko'
};

const universalReducer = (state = initialState, action) => {

    switch(action.type){
        case 'CHANGE_LAN' : {
            const newLanguage = state.language === "ko" ? "en" : "ko";
            return {
                ...state,
                language: newLanguage
            };
        } break;
    }

    return state;
}

export default universalReducer;