/* eslint-disable import/no-anonymous-default-export */
const TODOS_STORAGE_KEY = 'TODOS'
var objectDefault = [
    {id: 1, task: "Nộp báo cáo PT&TKHDT", complete: false, dateOf: "2021-12-05T23:59"},
    {id: 2, task: "Báo cáo cuồi kì PT&TKHDT", complete: false, dateOf: "2021-12-14T09:00"},
    {id: 3, task: "Báo cáo giỏ hàng Web", complete: false, dateOf: "2021-11-27T23:59"},
    {id: 4, task: "Thi thực hành Net", complete: false, dateOf: "2021-12-02T07:00"},
    {id: 5, task: "Báo cáo đồ án Net", complete: false, dateOf: "2021-12-23T07:00"},
    {id: 6, task: "Thi giữa kì Hệ CSDL", complete: false, dateOf: "2021-11-27T07:00"},
    {id: 7, task: "Thi cuối kì Hệ CSDL", complete: false, dateOf: "2021-12-12T07:00"},
    {id: 8, task: "Báo cáo tìm hiểu Net", complete: false, dateOf: "2021-12-04T07:00"},
];
export default {
    get(){
        var result = JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) === null || JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)).length ===0 ?
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(objectDefault)) : 
        JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY));
        return result
    },
    set(todoList){
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todoList));
    }
}
