const button = document.querySelector('button');
const output = document.querySelector('p');

const setTime = async (duration) => {
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
async function trackUserHandler() {
  let myPos;
  try {
    const posData = await getposition();
    const timerData = await setTime(2000);
  } catch (err) {

    console.log("err");

  }
  const posData = await getposition();
  const timerData = await setTime(2000);
  console.log(posData, timerData);
  //.then(posData => {
  //     //  console.log("promis->", posData);
  //     myPos = posData;
  //     return setTime(2000);
  // }).then(data => {
  //     console.log(data, myPos)
  // }).catch(err => {
  //     console.log("promis err", err);
  // })
  console.log('Clicked!');

}

button.addEventListener('click', trackUserHandler);

// let result = 0
// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);