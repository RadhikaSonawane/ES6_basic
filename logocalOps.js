// && - AND operation - Both sides need to be true
// || - OR operation - One side need to be true

let isVerified = true;
let isLoggedIn = true;
let hasPaymentToken = true;
let isGuest = true;
if(isVerified && isLoggedIn && hasPaymentToken){
    console.log('Greeting message for User');
    console.log('Allow access to paid course');
} else if (isVerified || isGuest){
    console.log('Allow access to view free courses');
} else {
    console.log('Please ragister and complete the formalities');
}