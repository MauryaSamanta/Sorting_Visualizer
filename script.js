function addbars(){

for(var i=0;i<10;i++)
{   var value=0;
    do{ value=Math.floor(Math.random()*10);}while(value==0);

    const bar=document.createElement("div");
    bar.classList.add("bars_dec")
    var d=value*30;
    var f=d.toString()+"px";
    bar.style.height=f;
    console.log(f);
    document.getElementById("bars").appendChild(bar);
}
}

function swap(b1,b2)
{
    const s1=window.getComputedStyle(b1);
    const s2=window.getComputedStyle(b2);
    const t1=s1.getPropertyValue("height");
    const t2=s2.getPropertyValue("height");
    b1.style.height=t2;
    b2.style.height=t1;
}

async function bubble_sort(){
    let bars=document.querySelectorAll(".bars_dec");
    let swapped;
    do{
        swapped=false;
        for(var i=0;i<bars.length-1;i++)
        {
            bars[i].style.background="red";
            bars[i+1].style.background="red";
            await new Promise((resolve)=>
            setTimeout(()=>{
                resolve();
            },1000)
            );
            let h1=parseInt(bars[i].style.height);
            let h2=parseInt(bars[i+1].style.height);
            if(h1>h2)
            {
                swap(bars[i],bars[i+1]);
                swapped=true;
            }
            bars[i].style.background="green";
            bars[i+1].style.background="green";
        }
    }while(swapped);
    alert("Bubble Sort Success!!")
}