export const addCat=({name, activity})=>({ //create your own method 
type: "ACTION_ADD_CAT",   //build an object 
payload: {
    name, 
    activity, 
}
})