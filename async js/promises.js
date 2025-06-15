// fetch("https://jsonplaceholder.typicode.com/users/1")
// .then((response)=>{
//     console.log("response => ",response)
//     response.json()
//     .then((data)=>{
//         console.log("data => ",data)
//     })
// })
// .catch((err)=>{
//     console.log("err => ",err)
// })

// function checkEligibility(age) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (age >= 18) {
//         resolve("Eligible");
//       } else {
//         reject("Not Eligible");
//       }
//     }, 5000);
//   });
// }

// checkEligibility(112)
//   .then((data) => {
//     console.log("data => ", data);
//     checkEligibility(23)
//       .then((data) => {
//         console.log("data => ", data);
//         checkEligibility(45)
//           .then((data) => {
//             console.log("data => ", data);
//           })
//           .catch((err) => {
//             console.log("Error => ", err);
//           });
//       })
//       .catch((err) => {
//         console.log("Error => ", err);
//       });
//   })
//   .catch((err) => {
//     console.log("Error => ", err);
//   });






