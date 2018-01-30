import {ajax} from '../../src/util/ajax';

// let request = new Promise((resolve, reject) => {
//     ajax.request({
//         url: '/getData/id',
//         args: 1
//     });
// });
// request.then(function () {
//     return "finished";
// });

let request = ajax.request({
    url: '/getData/id',
    id: 1
});

export {request};