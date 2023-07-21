
let sec;
let hrs;
let min;
let time;
let check;
let val;
function manualTime()
{

 time=document.getElementById("inputTime").value;
 let array=time.split(':');
 hrs=parseInt(array[0]);
 min=parseInt(array[1]);
 sec=parseInt(array[2]);
 document.getElementById("time").innerHTML=time;
}

function executecount()
{    
    document.getElementById("hidden").classList.remove("hidden");
    document.getElementById("nothide").classList.add("hidden");
   
    time=document.getElementById("inputTime").value;
    let array=time.split(':');
    hrs=parseInt(array[0]);
    min=parseInt(array[1]);
    sec=parseInt(array[2]);
    executions();
     
   
}

function executions()
{
    check=  setInterval(exc,1000);
}


function exc()
{
    
       
        if(hrs==0 && min==0 && sec==0)
        {
            clearInterval(check);
            document.getElementById("time").innerHTML="completed";
            setTimeout(()=>{
                window.location.reload();
            },3000)
            document.getElementById("inputTime").value="00:00:00"; 
            document.getElementById("hidden").classList.add("hidden");
        }
        else
        {
            sec==0 && (sec=60,min-=1);
            min<0 && (min=59,hrs-=1);
            sec-=1;
            displayTime(sec,hrs,min);
        }
}

function pause(){
    val=document.getElementById("toggler").value;
    toggler();
}

function toggler(){
    if(val=="true"){
        clearInterval(check);
        document.getElementById("toggler").innerText="go";
        document.getElementById("toggler").value=false;
        }else{
        executions();
        document.getElementById("toggler").value=true;
        document.getElementById("toggler").innerText="stop";
        }
}


function begin(){

    manualTime();
    time=document.getElementById("inputTime").value;
    let array=time.split(':');
    hrs=parseInt(array[0]);
    min=parseInt(array[1]);
    sec=parseInt(array[2]);
    val="true";
    toggler();

}


function displayTime(sec,hrs,min)
{
    let hours;
    let minutes;
    let seconds;
    hrs<10 ? ( hours='0'+hrs ): hours=hrs;
    min<10 ? (minutes='0'+min) : minutes=min;
    sec<10 ? (seconds='0'+sec) : seconds=sec;
    document.getElementById("time").innerHTML=`${hours}:${minutes}:${seconds}`;

}

