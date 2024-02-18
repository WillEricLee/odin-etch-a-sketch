function sixteenSquare(squares) {
    if (squares > 100) {squares = 100;}

    const container = document.querySelector(".boxes");
    container.textContent = "";
    for (let i = 0; i<squares; i++) {
        const row = document.createElement('div');
        row.className = "row";
        row.style.height = parseFloat((90/squares)) + "vh";
        for (let j = 0; j<squares; j++) {
            const box = document.createElement('div');
            box.className="box";
            box.addEventListener('mouseover', () => {
                box.style.backgroundColor = 'black';
            });

            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

const button = document.querySelector(".square-button");
button.addEventListener( 'click', () => sixteenSquare( parseInt(prompt("Enter the number of squares per side:")) ) );

sixteenSquare(4);