let gameProgress = []

function play(clickedId) {
    let thePlayer = document.getElementById('player')
    let clickedFunction = document.getElementById(clickedId)

    if (thePlayer.innerText === 'X') {
        thePlayer.innerText = 'O'
        clickedFunction.innerText = 'X'
        gameProgress[clickedId] = 'X'
    } else {
        thePlayer.innerText = 'X'
        clickedFunction.innerText = 'O'
        gameProgress[clickedId] = 'O'
    }


    const topLeft = gameProgress[0]
    const topMid = gameProgress[1]
    const topRight = gameProgress[2]
    const midLeft = gameProgress[3]
    const mid = gameProgress[4]
    const midRight = gameProgress[5]
    const bottLeft = gameProgress[6]
    const bottMid = gameProgress[7]
    const bottRight = gameProgress[8]

    if (topLeft !== undefined && topLeft === topMid && topLeft === topRight) {
        alert(`${topLeft} is the winner!`)
        reset()
    } else if (topLeft !== undefined && topLeft === mid && topLeft === bottLeft) {
        alert(`${topLeft} is the winner!`)
        reset()
    } else if (topMid !== undefined && topMid === mid && topMid === bottMid) {
        alert(`${topMid} is the winner!`)
        reset()
    } else if (topRight !== undefined && topRight === midRight && topRight === bottRight) {
        alert(`${topRight} is the winner!`)
        reset()
    } else if (topLeft !== undefined && topLeft === mid && topLeft === bottRight) {
        alert(`${topLeft} is the winner!`)
        reset()
    } else if (midLeft !== undefined && midLeft === mid && midLeft === midRight) {
        alert(`${midLeft} is the winner!`)
        reset()
    } else if (bottLeft !== undefined && bottLeft === bottMid && bottLeft === bottRight) {
        alert(`${bottLeft} is the winner!`)
        reset()
    } else if (bottLeft !== undefined && bottLeft === mid && bottLeft === topRight) {
        alert(`${bottLeft} is the winner!`)
        reset()
    }

    
}
function fullBoard(){
    let boardFull = true
    for (let i = 0; i < 9; i++) {
        if (gameProgress[i] === undefined) {
            boardFull = false
        }
    }
    if (boardFull === true) {
        alert(`It's a CAT`)
        reset()
    }
}

function reset() {
    window.location.reload(true)
}

