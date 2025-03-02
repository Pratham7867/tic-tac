let boxs = document.querySelectorAll('.box')
let reset = document.querySelector('#reset')
let newGamebtn=document.querySelector('#newbtn')
let msgContainer=document.querySelector('.msgcontainer')
let msg=document.querySelector('#msg')


let turn0 = true;

const winpaterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {
    turn0 = true;
    enablebox()
    msgContainer.classList.add('hide')
}

boxs.forEach((box) => {
    box.addEventListener('click', () => {

        if (turn0) {
            box.innerHTML = 'O'
            turn0 = false
        }
        else {
            box.innerHTML = 'X'
            turn0 = true
        }
        box.disabled = true;
        checkwinner()
    })
})
const disabledbox = () => {
    for (let box of boxs) {
        box.disabled = true
    }
}
const enablebox = () => {
    for (let box of boxs) {
        box.disabled = false
        box.innerHTML = '';
    }
}

const showwinner = (winner) => {
    msg.innerHTML = 'congratulation,winner is' + winner;
    msgContainer.classList.remove('hide')
    disabledbox();
}

const checkwinner = () => {
    for (let pattern of winpaterns) {
        let pos1val = boxs[pattern[0]].innerText;
        let pos2val = boxs[pattern[1]].innerText;
        let pos3val = boxs[pattern[2]].innerText;

        if (pos1val !== '' && pos1val === pos2val && pos2val === pos3val) {
                console.log('winner',pos1val);            
                showwinner(pos1val)
            }
        }
    }

newGamebtn.addEventListener('click', resetgame)
reset.addEventListener('click', resetgame)