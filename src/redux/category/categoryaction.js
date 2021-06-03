import CATEGORYTYPE from './categorytype'

export const getdata=item=>({
    type:CATEGORYTYPE.GET_DATA,
    payload:item
})