
let timerID,
    hourCount = 0,
    minCount = 0,
    secCount = 0,
    msecCount = 0,
    startbtn = document.getElementById("start"),
    stopbtn = document.getElementById("stop"),
    resumebtn = document.getElementById("resume"),
    resetbtn = document.getElementById("reset");
//-------------------------Date & Time-------------------------
function onStart() {
   
    let currentDate = new Date();
    let date = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
    let hour = currentDate.getHours();
    let min = currentDate.getMinutes();
    let sec = currentDate.getSeconds();
    let millisec = currentDate.getMilliseconds();
    
    // day = checkDay(day);
    month = checkMonth(month);
    date = checkLength(date);
    min = checkLength(min);
    sec = checkLength(sec);

    document.getElementById("date").innerHTML = "Date: " + date + " " + month + " " + year; 
    document.getElementById("time").innerHTML = "Time: " + hour + ":" + min + ":" + sec;

    setTimeout(onStart, 500);
}

function checkLength(x) {
    if( x < 10)
        return "0" + x;
    else
        return x;
}

// function checkDay(num) {
//     let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
//     return days[num];
// }

function checkMonth(num) {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[num];
}

//-------------------------Start Button-------------------------

function start() {

    startbtn.disabled = true;
    stopbtn.disabled = false
    resumebtn.disabled = true;

    timerID = setInterval(() => { 
        getMsec();
    }, 10);

    function getMsec() {
        if(++msecCount >= 100){
            msecCount = 0;
            getSec();
        }
        document.getElementById("timer").innerHTML = checkLength(hourCount)  + ":" + checkLength(minCount) + ":" + checkLength(secCount) + ":" + checkLength(msecCount);
    
    }

    function getSec() {     
        if(++secCount >= 60){
            secCount = 0;
            getMin();
        }
        document.getElementById("timer").innerHTML = checkLength(hourCount)  + ":" + checkLength(minCount) + ":" + checkLength(secCount) + ":" + checkLength(msecCount);
    }
    
    function getMin() {     
        if(++minCount >= 60){
            minCount = 0;
            getHour();
        }
        document.getElementById("timer").innerHTML = checkLength(hourCount)  + ":" + checkLength(minCount) + ":" + checkLength(secCount) + ":" + checkLength(msecCount);
    }
    
    function getHour() {     
        if(++hourCount >= 60){
            hourCount = 0;
            getHour();
        }
        document.getElementById("timer").innerHTML = checkLength(hourCount)  + ":" + checkLength(minCount) + ":" + checkLength(secCount) + ":" + checkLength(msecCount);
    }
    
}

//-------------------------Stop Button-------------------------

function stop() {

    stopbtn.disabled = true;
    resumebtn.disabled = false;


    clearInterval(timerID);
    resumebtn.disabled = false;
}

//-------------------------Resume Button-------------------------

function resume() {
    start();
}

//-------------------------Reset Button-------------------------

function reset() {

    if(stopbtn.disabled === true)
    {
        startbtn.disabled = false;
    }

    if(resumebtn.disabled === false)
    {
        resumebtn.disabled = true;
    }

    hourCount = 0;
    minCount = 0;
    secCount = 0;
    msecCount = 0;

    document.getElementById("timer").innerHTML = checkLength(hourCount)  + ":" + checkLength(minCount) + ":" + checkLength(secCount) + ":" + checkLength(msecCount);
}

















