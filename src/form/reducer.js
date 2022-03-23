export const reducer=(state,action)=>{
    if(action.type==='Add_item'){
        const newPeople=[...state.people,action.payload];
        return {
            ...state,
            people:newPeople,
            isModelopen:true,
            modelContent:'item added'
        }
    }
    if(action.type==='No_value'){
        return{
            ...state,
            isModelopen:true,
            modelContent:'please enter value'
        }
    }
    if(action.type==='Close_model'){
        return(
            {
                ...state,
                isModelopen:false
            }
        )
    }
    if(action.type==='Remove_item'){
        const newPeople=state.people.filter((person)=>person.id!==action.payload
        )
        return{
            ...state,
            people:newPeople
        }
    }
    throw new Error('no matching action type');
};
