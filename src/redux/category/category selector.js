import {createSelector} from 'reselect'

const  selectdata=state=>state.cat;

export const selectCatItems=createSelector(
    [selectdata],
    shop=>shop.data
)

export const selectCatForOverview=createSelector(
    [selectCatItems],
    data=>data? Object.keys(data).map(key=>data[key]):[]
)
