function login(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}
function getVideo() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('back');
      resolve('back');
    }, 1000);
  });
}
function getDetail() {
  return new Promise(function (resolve, reject) {
    resolve('callback hell');
  }, 1000);
}
login('kim')
  .then((info) => {
    console.log(info + '반가워');
    return getVideo(info);
  })
  .then((info) => {
    console.log(info + '을 실행했구나');
    return getDetail(info);
  })
  .then((info) => {
    console.log('여기는' + info);
  });
