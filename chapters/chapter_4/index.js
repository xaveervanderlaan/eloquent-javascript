export default function () {


    function sum(data) {

        let sum_number = 0;

        data.forEach((element) => {
            sum_number += element;
        });

        return sum_number;

    }

    function range(start, end, step = 1) {


        let data = [];

        if (step < 0) {

            for (let i = start; i >= end; i += step) {
                data.push(i);
            }

        } else {

            for (let x = start; x <= end; x += step) {
                data.push(x);
            }

        }

        return data;

    }

    console.log(sum(range(1, 10)));



    let myArray = ["A", "B", "C"];
    /**
     * Reverse array
     * 
     * @param {Array} data 
     */
    function reverseArray(data) {

        let reverseData = [];
        for (let index = data.length - 1; index >= 0; index--) {
            reverseData.push(data[index]);
        }

        return reverseData;

    }

    console.log(reverseArray(myArray));

    let arrayValue = [1, 2, 3, 4, 5];
    /**
     * Pass by reference to modify an array variable
     * 
     * @param {Array} data 
     */
    function reverseArrayInPlace(data) {


        let reverseData = [];

        for (let index = data.length - 1; index >= 0; index--) {
            reverseData.push(data.pop());
        }

        return arrayValue = reverseData;

    }

    reverseArrayInPlace(arrayValue);
    console.log(arrayValue);


    console.log('--------------- \n');

    function arrayToList(array) {

        let data = {};

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            // const struc = { value: null, rest: null };
            let temp_obj = {};

            //console.log(element);

            Object.assign(data, { value: element, rest: null });
            // temp_obj = struc['value'] = element;

            console.log(element);
            if (array[index + 1]) {
               // console.log(array[index + 1]);

                //temp_obj.rest = { value: array[index + 1], rest: null };
               // console.log(index);
            }

            

        }

        console.log('------------');

        return data;

    }

    console.log(arrayToList([10, 20, 30]));

}