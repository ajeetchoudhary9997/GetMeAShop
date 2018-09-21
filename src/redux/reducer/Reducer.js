import { ACTION_TYPE } from '../actions/Actions'
const initialState = {
    todoList: [

    ],
    totalElementList: [

    ],
    notesForUpdate: {},
    isHeartFilterApply: false,
    isFavouriteFilterApply: false,
}
const Reducer = (state = initialState, action) => {

    switch (action.type) {
        case ACTION_TYPE.ADD_NOTES:
            return {
                ...state,
                totalElementList: this.addNewNote(state, action.payload.item),
                todoList: this.applyFilter(state, state.isHeartFilterApply, state.isFavouriteFilterApply)
            }
        case ACTION_TYPE.UPDATE_NOTES:
            return {
                ...state,
                totalElementList: this.updateNote(state, action.payload.item),
                todoList: this.applyFilter(state, state.isHeartFilterApply, state.isFavouriteFilterApply),
                notesForUpdate: action.payload.item
            }
        case ACTION_TYPE.DELETE_NOTES:
            return {
                ...state,
                totalElementList: this.deleteNote(state, action.payload.item),
                todoList: this.applyFilter(state, state.isHeartFilterApply, state.isFavouriteFilterApply)
            }
        case ACTION_TYPE.NOTES_FOR_UPDATE:
            return { ...state, notesForUpdate: action.payload.item }
        case ACTION_TYPE.APPLY_FILTER:
            return {
                ...state,
                isHeartFilterApply: action.payload.isHeartFilterApply,
                isFavouriteFilterApply: action.payload.isFavouriteFilterApply,
                todoList: this.applyFilter(state, action.payload.isHeartFilterApply, action.payload.isFavouriteFilterApply),
            }
        default:
            return { ...state }
    }
}
addNewNote = (state, item) => {
    if (state.totalElementList.length == 0) {
        item.id = 0
    } else {
        item.id = (state.totalElementList[state.totalElementList.length-1].id+1)
    }
    console.log('new Added item id=============================',item.id);
    
    state.totalElementList.push(item)
    return state.totalElementList
}
updateNote = (state, item) => {
    totalElementList = state.totalElementList.map((item1) => {
        if (item1.id == item.id) {
            item1.noteTitle = item.noteTitle
            item1.noteBody = item.noteBody
            item1.noteUpdationTime = item.noteUpdationTime
            item1.isLiked = item.isLiked
            item1.isFavourite = item.isFavourite
        }
        return item1
    })
    return totalElementList
}
deleteNote = (state, item) => {
    if (item == undefined) return state.totalElementList
    var itemIndex
    state.totalElementList.map((item1, index) => {
        if (item1.id == item.id) {
            itemIndex = index
        }
    })
    console.log('removing index', itemIndex);

    if (itemIndex != undefined)
        state.totalElementList.splice(itemIndex, 1)
    return state.totalElementList
}
applyFilter = (state, isHearted, isFavourite) => {
    let newTodoArray = []
    state.totalElementList.map((item) => {
        if (isFavourite && isHearted) {
            if (item.isLiked && item.isFavourite) {
                newTodoArray.push(item)
            }
        } else if (isHearted) {
            if (item.isLiked) {
                newTodoArray.push(item)
            }
        } else if (isFavourite) {
            if (item.isFavourite) {
                newTodoArray.push(item)
            }
        } else {
            newTodoArray.push(item)
        }
    })
    return newTodoArray
}
export default Reducer