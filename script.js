const hour = document.querySelector(".hour");
const minutes = document.querySelector(".minutes");
const second = document.querySelector(".second");
const alertBtn = document.querySelector(".alert-btn");
const textFlid = document.querySelector(".textFlid");
const reading = document.querySelectorAll(".reading p");
const readingBox = document.querySelector(".reading");
const boxOff = document.querySelector(".box-off");
const warningAnimation = document.querySelector(".warning");
let i =  0
const openBox = (e) => {
    e === true
        ?
        textFlid.classList.add('active')
        &
        alertBtn.classList.add('remove')
        :
        textFlid.classList.remove('active')
        &
        alertBtn.classList.remove('remove')
}
const timer = () => {
    const time = new Date();
    hour.innerHTML = time.getHours();
    minutes.innerHTML = time.getMinutes();
    second.innerHTML = time.getSeconds();
    if(hour.innerHTML ==reading[0].innerHTML & minutes.innerHTML == reading[1].innerHTML & second.innerHTML == reading[2].innerHTML ){
        warningAnimation.classList.add("active");
        readingBox.classList.remove("active");
        setInterval(timerFinish, 1000);
        setInterval(warningone , 1000);
        setInterval(warningtwo , 2000)
    }
}
setInterval(timer, 1000)
timer();
const finish =()=>{
    document.querySelector("body").style.background="#222"
    warningAnimation.classList.remove("active");
    alertBtn.classList.remove("remove");
}
const continuation =()=>{
    document.querySelector("body").style.background="#222"
    warningAnimation.classList.remove("active");
    readingBox.classList.add("active");
    i+= 10
    sucsesClick(false)
}
const sucsesClick = (e) => {
    const hourInput = document.querySelector(".hour-input");
    const minInput = document.querySelector(".minutes-input")
    const secondInput = document.querySelector(".second-input")
    if (hourInput.value == "" | minInput.value == "" | secondInput.value == "") {
        alert("فلید ها رو پر کن")
    }
    if (hourInput.value > 23 | minInput.value > 59 | secondInput.value > 59) {
        alert("عدد واردشده صحیح نیست")
    }
    else{
    readingBox.classList.add("active")
    textFlid.classList.remove('active')
    let a = +minInput.value + i 
    reading[2].innerHTML =  secondInput.value
    if ( a > 59){
        reading[0].innerHTML = + hourInput.value +1 
        reading[1].innerHTML = a -60
        if(reading[0].innerHTML>= 24){
            reading[0].innerHTML = 0
        }   
    }
    else{
        reading[0].innerHTML = hourInput.value
        reading[1].innerHTML = !!e ? minInput.value : a
    }
    }
}
timerMakos = 121;
timeLimit = 0;
const timerFinish = ()=>{
        const secondTimer = document.querySelector(".second-timer");
        let timePassed = timeLimit +=1;
        let timeSet = timerMakos - timePassed;
        secondTimer.innerHTML = timeSet;
        if(secondTimer.innerHTML === "0"){
            document.querySelector("body").style.background="#222"
            warningAnimation.classList.remove("active");
            alertBtn.classList.remove("remove");
        }
}
const warningone = ()=>{
    warningAnimation.classList.add("orange");
}
const warningtwo = ()=>{
    warningAnimation.classList.remove("orange");
}
