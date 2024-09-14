export default function () {

    let string = '#';
    for (let i = 0; i <= 7; i++) {



        console.log(string);
        string += '#'
    }


    for (let index = 0; index < 100; index++) {

        if (index % 3 === 0 && index % 5 === 0) {
            console.log('Fizz');
        } else if (index % 5 === 0) {
            console.log('Buzz');
        } else if (index % 3 === 0) {
            console.log('FizzBuzz');
        } else {
            console.log(index);
        }

    }


    let size = 9;
    let stringGrid = '';
    for (let i = 0; i < size; i++) {
       
        for (let x = 0; x < size; x++) {

            if (i % 2 === 0) {
                stringGrid += '# ';
            } else {
                stringGrid += ' #';
            }

        }

        stringGrid += '\n';

    }
    
    console.log(stringGrid);



}