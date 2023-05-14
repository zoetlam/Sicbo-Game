function play(){
    const randomNumber = ()=> Math.floor(Math.random() * 6) + 1;
    const imgSrc = (num) => {
        let n = "images/dice"+num+".png";
        return n;
    };
    let randomNumber1 = randomNumber();
    let randomNumber2 = randomNumber();
    let randomNumber3 = randomNumber();

    let total = randomNumber1 + randomNumber2 + randomNumber3;

    let imgSrc1 = imgSrc(randomNumber1);
    let imgSrc2 = imgSrc(randomNumber2);
    let imgSrc3 = imgSrc(randomNumber3);

    document.querySelectorAll('img')[0].setAttribute('src', imgSrc1);
    document.querySelectorAll('img')[1].setAttribute('src', imgSrc2);
    document.querySelectorAll('img')[2].setAttribute('src', imgSrc3);
    document.querySelector('p').innerHTML = "Total: " + total;
 
}
document.querySelector('button').addEventListener('click', play);