export const ADD = "ADD"

export const addFeature = (feature) => {
    return{ type: ADD, payload: feature};

}

export const REMOVE = "REMOVE"


export const removeFeature = (feature) => {
    return {type: REMOVE, payload: feature};
}
