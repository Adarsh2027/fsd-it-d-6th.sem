import fs, { appendFile, appendFileSync } from "fs";
// write file sync - blocking
const writeFileSync= ()=> {
  try{  
    fs.writeFileSync("./example.text","This data is written with the help of 'writeFileSync'");
    console.log("successfully");
  } catch(error){
    console.log("some error occured");
  }


}
writeFileSync();


// read file sync - blocking
const readFileSync=()=>{
   try{  
     const  data = fs.readFileSync("./example.text");
    console.log(data);
  } catch(error){
    console.log("unable to read file.");
  }
}
readFileSync();

const AppendFileSync=(data)=>{
   try{  
     fs.appendFileSync("./example.text","this is the appended through 'append filesysnc'");
    console.log(" data has been appender succesfully .....");
  } catch(error){
    console.log("some error occured while appending");
  }
}

// console.log("before write file sync");
// writeFileSync();
// console.log("after write file sync");



AppendFileSync("data");