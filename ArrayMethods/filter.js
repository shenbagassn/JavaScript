var markArr =[89,45,65,78,35,55];
var newArr=[];

function loadArr(){
    document.getElementById("p1").innerHTML = markArr;
 }
  function doValidate()
  {
    console.log("inside fnc");
    if(document.getElementById("chck1").checked)
    {
        for(var i=0;i<markArr.length;i++)
        {
            if(markArr[i]>=50)
            {
            newArr.push(markArr[i]);
            }
        }
        document.getElementById("p1").innerHTML= newArr;
    }else
    {
        document.getElementById("p1").innerHTML = markArr;
    }
  }