const button = document.querySelector('button');
const output = document.querySelector('p');

const setTime = (duration) => {
  const promise = new Promise((resolver, reject) => {
    setTimeout(() => {
      resolver("done")
    }, duration);
  });
  return promise;
}

const getposition = () => {
  const promise = new Promise((resolver, reject) => {

    navigator.geolocation.getCurrentPosition((position) => {

      resolver(position);

    }, (err) => {
      // console.log(err);
      reject(err);
    });

  });
  return promise;
}
function trackUserHandler() {
  let myPos;
  getposition().then(posData => {
    //  console.log("promis->", posData);
    myPos = posData;
    return setTime(2000);
  }).then(data => {
    console.log(data, myPos)
  }).catch(err => {
    console.log("promis err", err);
  })
  console.log('Clicked!');

}

button.addEventListener('click', trackUserHandler);

// let result = 0
// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);