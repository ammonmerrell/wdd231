const getString = window.location.search;
console.log(getString);

// document.addEventListener('DOMContentLoaded', function () {
//     const timestampfield = document.getElementById('timestamp');
// })

// timestampfield.value = formatTimestamp();

// function formatTimestamp() {
//     const now = new Date();
//     const year = now.getFullYear();
//     return year;
// }

const myInfo = new URLSearchParams(getString);
console.log(myInfo)

console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('organization'));
console.log(myInfo.get('email'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('company'));
console.log(myInfo.get('desc'));
console.log(myInfo.get('level'));
console.log(myInfo.get('timestamp'));




results.innerHTML = `
<p>The submission of ${myInfo.get('first')} ${myInfo.get('last')}\nwith email of ${myInfo.get('email')} and phone of ${myInfo.get('phone')} whith ${myInfo.get('organization')}.</p>
<p>at ${myInfo.get('timestamp') }.</p>`;