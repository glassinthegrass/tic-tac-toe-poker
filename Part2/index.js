console.log('i am connected')

const getId = document.getElementById('getId')
const assignStyle = document.getElementById('assignStyle')

console.log(getId)
console.log(assignStyle)

const setCard = () => {
    const card = document.getElementById(getId.value);
    card.style.color = assignStyle.value
    console.log(card)
}
