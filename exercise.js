
// getCustomer(1, (customer) => {
//   console.log('Customer: ', customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log('Top movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...')
//       });
//     });
//   }
// });

print()

async function print() {
  try {
    const customer = await getCustomer(1)
    console.log('Customer: ', customer);
    if (customer.isGold) {
      const movies = await getTopMovies()
      console.log('Top movies: ', movies);
      const email = await sendEmail(customer.email, movies)
      console.log('Email sent...')
     }

  } 
  catch (err){console.log("Error",err)}
}


function getCustomer(id ) {
 return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ 
        id: id, 
        name: 'Mosh Hamedani', 
        isGold: true, 
        email: 'email' 
      });
    }, 4000);  
  })
}


function getTopMovies() {
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 4000);
  })
}

function sendEmail(email, movies, callback) {
  return new Promise((resolve, reject) => { 
    setTimeout(() => {
      resolve();
    }, 4000);
  })
}