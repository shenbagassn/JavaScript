function checkPrime(n){

notPrime=false;
for(var i=2;i<=n-1;i++){
    if(n%i==0){
        console.log(n + "is not a prime number")  ;
        notPrime=true;
        break;
    }
}
  if(notPrime==false){
        console.log(`${n} is a prime number`);
    }
}


checkPrime(8);