import fs from "fs/Promises";
import { error } from "node:console";
const writeFile = async (data ,path) => {
  await fs.writeFile(path ,data ,(error)=> 
  {
      if(error) console.log("data ha sbeen written succesfully ");
      else console.log(first)
  })
}
const readFile = async(path)=> {
  await fs.readFile(path,"utf-8")(error,data=>{
      if(error) {console.log("unable to read data ");
        console.log("enside error ")
      }

      else {
       
        console.log(data);
       console.log("this is from data part. ");}
  });
}

const appendFile = async( data,path )=> {
  await fs.appendFile(path,data,error=>{
      if(error) console.log("unable to append data ");
      else console.log(data);
  });
}

