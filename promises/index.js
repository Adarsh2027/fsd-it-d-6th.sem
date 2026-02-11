const mypromise =new Promise((resolve,reject)=>{
  let age=24;

  if (age>18){
  resolve("Elligble for vote ");
  } 
    else {
      reject(" Not Elligble for vote")
    }
 

})