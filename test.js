import './style.css'



const obj = {};
const arr = [1, 2, 3];

obj.test = 'qwe';
obj.test = {test: {q: null}};

obj.test2 = Object.assign({}, obj.test);

console.log(obj);
console.log(arr);

console.log('-------------------');

let data = {};

for (let index = 0; index < arr.length; index++) {

    const element = arr[index];
    const struc = { value: null, rest: null };


    let temp_obj;

    temp_obj = Object.assign({}, { value: element, rest: null });

    data = Object.assign(temp_obj);

    console.log(temp_obj);
    if (arr[index + 1]) {

        data = Object.assign(temp_obj);

    }

    

}

console.log(data);