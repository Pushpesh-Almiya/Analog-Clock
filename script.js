// Clock calculation
// Hours...
// 12 hours = 360 degree
// 1 hour =360/12 = 30 degree
// H hour = 30H degree +(1/2)*M

// 60 min = 30degree
// 1 min = 30/60= 1/2 degree
//  M min = (1/2)*M +(1/120)*S degree

//Minutes ......
// 60 min = 360 degree
// 1 min = 360/60 = 6 degree
// M min=  6M degree

//Seconds ......
// 60 sec = 360 degree
// 1 sec = 360/60 = 6 degree
// S sec= (6)*S degree

let hr = document.getElementById("hour")
let min = document.getElementById("min")
let sec = document.getElementById("sec")


function displayTime(){
    let date = new Date();

    //Getting hours min and seconds from the Date
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()
    // console.log(date)

    let hRotation =30*hh + mm/2;
    // let hRotation =30*hh ;
    let mRotation =6*mm;
    let sRotation =6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`
    min.style.transform = `rotate(${mRotation}deg)`
    sec.style.transform = `rotate(${sRotation}deg)`
}
setInterval(displayTime,1000)