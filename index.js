const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')
move(character).to(100, 250)


move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)


// Function to move the greenCharacter
function moveGreenCharacter(key) {
    // Get the current position of the greenCharacter
    let currentLeft = parseInt(character.style.left);
    let currentBottom = parseInt(character.style.bottom);

    // Define the distance to move
    let moveDistance = 10;

    // Move the greenCharacter based on the arrow key pressed
    switch (key) {
        case 'ArrowLeft':
            character.style.left = (currentLeft - moveDistance) + 'px';
            break;
        case 'ArrowRight':
            character.style.left = (currentLeft + moveDistance) + 'px';
            break;
        case 'ArrowUp':
            character.style.bottom = (currentBottom + moveDistance) + 'px';
            break;
        case 'ArrowDown':
            character.style.bottom = (currentBottom - moveDistance) + 'px';
            break;
    }
}

// Add event listener for keydown event
document.addEventListener('keydown', function(event) {
    // Check if the pressed key is an arrow key
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
        // Prevent default behavior of arrow keys (scrolling the page)
        event.preventDefault();
        // Move the greenCharacter
        moveGreenCharacter(event.key);
    }
});