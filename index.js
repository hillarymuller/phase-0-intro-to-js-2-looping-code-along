const cards = ["Guadalupe", "Ollie", "Aki"];
function writeCards(cards) {
    const messages = [];
        for (let i = 0; i < cards.length; i++){
        const message = `Thank you, ${cards[i]}, for the wonderful surprise gift!`;
        messages.push(message);
    }
    return messages;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"]));

function countDown(n){
    for (let n = 10; n >= 0; n--){
        console.log(n);
    }
}