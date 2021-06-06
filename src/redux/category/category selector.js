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





export const findItems=collectionUrlParams=>createSelector(
    [selectCatItems],
    collections=>(collections? collections[collectionUrlParams].items.find(subcat=>subcat.linkUrl === collectionUrlParams.linkUrl):null)
    //collection[hats]  یا  collection[sneakres]
)

