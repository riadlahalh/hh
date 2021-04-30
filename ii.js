function updateDate() {
    var date =new Date();
    var setTime =document.getElementById("setTime");
    setTime.innerHTML=date.getHours()-1+":"+date.getMinutes()+":"+date.getSeconds();
    var setDate =document.getElementById("setDate");
    setDate.innerHTML=date.getDate()+"-"+parseInt(date.getMonth()+1) +"-"+date.getFullYear();
    }
    setInterval(updateDate,100)
onload= updateDate();
function getcolor() {

    var getcolor =document.getElementById("input1").value;
localStorage.setItem("color",getcolor)
document.getElementById("main2").style.background=localStorage.getItem("color");
document.getElementById("body").style.background=localStorage.getItem("color");

        }
        function setcolor() {

    document.getElementById("input1").value=localStorage.getItem("color")
    document.getElementById("main2").style.background=localStorage.getItem("color");
    document.getElementById("body").style.background=localStorage.getItem("color");
    
    
        }
        setInterval(setcolor,100 )