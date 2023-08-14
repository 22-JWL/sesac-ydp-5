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

async function exec() {
  let user = await login('kim');
  console.log(user + '님 환영합니다.');
  let ba = await getVideo(user);
  console.log(ba + '을 실행했구나');
  let hello = await getDetail(videos[0]);
  console.log('여기는 ' + hello);
}

exec();
