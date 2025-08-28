// // handler.js
// exports.handler = async (event, context) => {
//   console.log('Event:', JSON.stringify(event));
  
//   try {
//     const response = {
//       statusCode: 200,
//       headers: {
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*"
//       },
//       body: JSON.stringify({
//         message: "Hello from Lambda!",
//         path: event.path,
//         method: event.httpMethod
//       })
//     };
    
//     return response;
//   } catch (error) {
//     console.error('Error:', error);
    
//     return {
//       statusCode: 500,
//       body: JSON.stringify({
//         error: "Internal Server Error",
//         message: error.message
//       })
//     };
//   }
// };