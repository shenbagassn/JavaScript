var firstArray= ["home","About us","contact","services"];
var indexnum;


 function displayList(arr){
 var res ="<ul>";
 for( var i=0;i<arr.length;i++)
 {
 res+= "<li>"+arr[i]+" <input type='button' value='Edit' onclick='doEdit("+i+")' > <input type='button' value='Delete' onclick='doDelete("+i+")' > </li>"; //res+ --> res = res +
 }
 res+=  "</ul>";
 document.getElementById("r1").innerHTML= res;
 }

function doOperation(op){
 var textbox= document.getElementById("txt1").value;

 switch (op){
     case 'push':
     firstArray.push(textbox);
     break;

     case 'pop':
     firstArray.pop(textbox);
         break;

     case 'shift':
     firstArray.shift(textbox);
         break;

     case 'unshift':
     firstArray.unshift(textbox);
         break;
 }        
 displayList(firstArray);
}

function doDelete(ind)
{
 //alert(ind);
 firstArray.splice(ind,1);
 displayList(firstArray);
}

function doEdit(ind)
{
//alert(ind);
document.getElementById("editdiv").style.display= "block";
 document.getElementById("txt2").value= firstArray[ind];
 indexnum= ind;
}

function doUpdate(){
 //alert("update");
 //alert(indexnum);
 firstArray[indexnum] = document.getElementById("txt2").value;
   displayList(firstArray);
}

function dosearch(searchValue){

 //console.log(searchValue);
 var newarr=[];

var sp= document.getElementById("searchSpan");
 for(var i=0;i<firstArray.length;i++)
 {
   if(firstArray[i].toLowerCase().includes(searchValue.toLowerCase())) 
   {
     newarr.push(firstArray[i]);        
   } 
 }
   displayList(newarr);
   if(newarr.length>0){
     sp.innerHTML  =newarr.length + "record(s) found" ;
     sp.style.color='green';
 }
 else{
   sp.innerHTML  =newarr.length + "record(s) found" ;
   sp.style.color='red';
 }
 

 //document.getElementById("searchSpan").innerHTML  =" No records found";
}