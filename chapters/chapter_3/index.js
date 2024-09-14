export default function () {


    function xaveerMathMin(first, second) {

            if ( isNaN(first) || isNaN(second)) {
                throw new Error('Give parameter plzzzz noob');
            }

        if (first < second) {
            return first;
        }

        if (second < first) {
            return second;
        }

        throw new Error('Wat doe je hier???');

    }

    console.log(xaveerMathMin(1231231, 10));


    function isEven(numbo) {


        if (numbo === 0) {
            return true;
        } else if (numbo === 1) {
            return false;
        }
   
        if (numbo < 0) {
            return isEven(-numbo);
        }

        return isEven(numbo - 2);

    }

    console.log(isEven(-1));


    function countBs(string) {

        let counter = 0;
        for (let x = 0; x <= string.length; x++) {

            if (string[x] === 'B') {
                counter++;
            }

        }

        return counter;

    }

    console.log(countBs('BOB'));

    function countChar(string, char) {

        let counter = 0;
        for (let x = 0; x <= string.length; x++) {

            if (string[x] === char) {
                counter++;
            }

        }

        return counter;

    }
    
    console.log(countChar('kippppppenppp', 'p'));

}