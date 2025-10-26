// function firstLine() {
//     console.log("line number 1");
// }
// firstLine();
//  setTimeout(() => {
//     console.log("line number 2");
//     ThridLine();
// }, 5000);

// function ThridLine(third) {
//     console.log("line number 3");
// }


// new Promise((resolve, reject) => {
//  let a = true;
//   if(a){
//     resolve("Apni pass korsen, smile pleaseeee!!!!!");
//   } else {
//     reject("Tumi Fail korso");
//   }
//     }).then((message) => {
//             console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


// function result1() {
//    return new Promise((resolve, reject) => {
//         resolve("You are passed");
//     })};
    
//     async function Main() {
//         console.log("Result is coming");
//         let res1 = await result1();
//                  console.log(res1);
//             console.log("End of the result");
       
//     }
//     Main();























    const lines = [
      "Hello, Suraiya baby!",
      "cholo tmk ekta kotha boli",
      "Ami tomake bhalobashi",
      "onek onek onek onek bhalobashi",
    ];


    lines.forEach((line, index) => {
      setTimeout(() => {
console.log(line);
    }, index * 2000); 
    });