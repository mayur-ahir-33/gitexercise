let next, prev;

const welcome = () => {
    if(!alert("Welcome to Lost Lands"))
    {
        initColor();
    }
    
}

const initColor = () => {
    document.getElementById('box1').style.backgroundColor = "#6695fa";
    document.getElementById('box3').style.backgroundColor = "#6695fa";
    document.getElementById('box1').style.color = "black";
    document.getElementById('box3').style.color = "black";

    setInterval(function(){ 
        document.getElementById('box2').style.backgroundColor = randomColorPicker(); 
    }, 3000);
}

const oops = () => {
    document.getElementById('oops').innerHTML = "Oops!"
}

const randomColorPicker = () => {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    return `rgb(${red},${green},${blue})`
}

const checkKey = (key) => {

    const colors = ['#e6261f', '#eb7532', '#f7d038', '#a3e048', '#49da9a', '#34bbe6', '#4355db', '#d23be7'];

    key = key || window.event;
    
    console.log(key);
    if (key.keyCode == '38' || key.keyCode == '39') {
        clearInterval(prev);
        let count = 0;
        next = setInterval(function(){ 
            document.getElementById('box4').style.backgroundColor = colors[count++];
            count===colors.length?count=0:count; 
        }, 3000);
    }
    else if (key.keyCode == '37' || key.keyCode == '40') {
        clearInterval(next);
        let count = colors.length-1
        prev = setInterval(function(){ 
            document.getElementById('box4').style.backgroundColor = colors[count--];
            count<0?count=colors.length-1:count; 
        }, 3000);
    }

}

document.onkeydown = checkKey;