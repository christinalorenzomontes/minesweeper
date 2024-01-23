document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const flagsLeft = document.querySelector('#flags-left');
    const width = 10;
    let squares = [];
    let bombAmount = 20;

    // Create board
    const createBoard = () => {
        flagsLeft.innerHTML = bombAmount;

        const bombArray = Array(bombAmount).fill('bomb');
        const emptyArray = Array(width * width - bombAmount).fill('valid');
        const gameArray = emptyArray.concat(bombArray);
        const shuffledArray = gameArray.sort(() => Math.random() - 0.5);


        for (let i = 0; i < width * width; i++) {
            const square = document.createElement('div');
            square.id = i;
            square.classList.add(shuffledArray[i]);
            grid.appendChild(square);
            squares.push(square);

            // Normal Click
            square.addEventListener('click', () => {
                click(square);
            })

            // Control and Left Click
            square.addEventListener('click', () => {
                // addFlag(square);
            })
        }

        // Add numbers
        for ( let i = 0; i < squares.length; i++) {
            let total = 0;
            const isLeftEdge = (i % width === 0);
            const isRightEdge = (i % width === width - 1);

            if (squares[i].classList.contains('valid') ) {
                if ( i > 0 && !isLeftEdge && squares[i - 1].classList.contains('bomb') ) total++
                if ( i > 9 && !isRightEdge && squares[i + 1 - width].classList.contains('bomb') ) total++
                if ( i > 10 && squares[i - width].classList.contains('bomb') ) total++
                if ( i > 11 && !isLeftEdge && squares[i - width - 1].classList.contains('bomb') ) total++
            }
        }
    }
    createBoard();

    const click = (square) => {
        console.log(square);
    }

    // const addFlag = (square) => {
    //     console.log(square);
    // }
})

