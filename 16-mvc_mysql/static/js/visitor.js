const { name } = require('ejs');

//front js
console.log('static / js/visitor');

//tbody
const tbody = document.querySelector('tbody');
const buttonGroup = document.querySelector('button-group');

//폼의 등록버튼 클릭시 테이블에 방문데이터 추가
function createVisitor() {
  const form = document.forms['visitor-form'];

  axios({
    method: 'post',
    url: '/visitor',
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((res) => {
    console.log('post/visitor 요청에 대한  응답', res.data);
    const { id, name, comment } = res.data;
    const newVisitor = `
    <tr id="tr_${id}">
      <td>${id}</td>
      <td>${name}</td>
      <td>${comment}</td>
      <td><button type="button" onclick="editVisitor(${id})">수정</button></td>
      <td><button type="button" onclick="deleteVisitor(this, ${id}})">삭제</button></td>
    </tr>
`;

    //js
    tbody.insertAdjacentHTML('beforeend', newVisitor);
  });
}

function deleteVisitor(obj, id) {
  console.log(obj, id);
  //boolean 리턴)
  if (!confirm('정말로 삭제하나요?')) {
    return;
  }

  //confirm 창에서 [확인]누르면 viditor 데이터 삭제
  // : axios로 DELETE /visitor 요청 날려서 db에 데이터 delete하기

  axios({
    method: 'delete',
    url: '/visitor',
    data: {
      id: id,
    },
  }).then((res) => {
    console.log('delete /visitor 요청에 대한 응답', res.data);
  });
}

function editVisitor(id) {
  console.log(id, ' 번 방명록 수정!!');

  //TODO:
  //1. id를 가지고 방명록 하나를 조회-> input에 각각 value로 저장
  axios({
    method: 'get',
    url: '/visitor',
    params: {
      id: id,
    },
  });
  //2. [변경], [취소] 버튼 보이기
}
//res: id, name, comment
