let tokenCount = 100; // initialize player's token count

function play(){
    const imgSrc = (num) => {
        let n = "images/dice"+num+".png";
        return n;
    };
    // generate random numbers between 1 and 6 for each dice
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;;
    let dice3 = Math.floor(Math.random() * 6) + 1;;

    let imgSrc1 = imgSrc(dice1);
    let imgSrc2 = imgSrc(dice2);
    let imgSrc3 = imgSrc(dice3);

    // display the dice values
    document.querySelectorAll('img')[0].setAttribute('src', imgSrc1);
    document.querySelectorAll('img')[1].setAttribute('src', imgSrc2);
    document.querySelectorAll('img')[2].setAttribute('src', imgSrc3);

    // calculate the total and determine win or loss
    let total = dice1 + dice2 + dice3;
    let betAmount = parseInt(document.getElementById("bet-amount").value);
    let betType = document.getElementById("bet-type").value;
    let resultText = "";

    if (betAmount > tokenCount) { // check if player can afford the bet
        resultText = "You don't have enough tokens!";
      } else {
        if (betType === "big") {
          if (total >= 11 && total <= 17) {
            tokenCount += betAmount;
            resultText = "You won " + (betAmount) + "!";
          } else {
            tokenCount -= betAmount;
            resultText = "You lost " + betAmount + ".";
          }
        } else if (betType === "small") {
          if (total >= 4 && total <= 10) {
            tokenCount += betAmount;
            resultText = "You won " + (betAmount) + "!";
          } else {
            tokenCount -= betAmount;
            resultText = "You lost " + betAmount + ".";
          }
        } else if (betType === "triple") {
          if (dice1 === dice2 && dice1 === dice3) {
            tokenCount += betAmount * 30;
            resultText = "You won " + (betAmount * 30) + "!";
          } else {
            tokenCount -= betAmount;
            resultText = "You lost " + betAmount + ".";
          }
        }
      }
    
    // display the result and update the token count
    document.getElementById("result").innerHTML = resultText;
    document.getElementById("token-count").innerHTML = tokenCount;
    document.getElementById("total").innerHTML = "Total:" + total;
      
}
document.querySelector('button').addEventListener('click', play);