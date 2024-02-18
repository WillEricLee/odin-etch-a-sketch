function sixteenSquare() {
    const container = document.querySelector(".boxes");
    for (let i = 0; i<4; i++) {
        const row = document.createElement('div');
        row.className = "row";
        for (let j = 0; j<4; j++) {
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

sixteenSquare();

