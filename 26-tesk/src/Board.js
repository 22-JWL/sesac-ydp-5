import './App.css';
import React, { useState } from 'react';

//멤버 리스트
export default function Board() {
  const members = [
    {
      id: 1,
      user_id: '코디',
      eject: '무요',
    },
    {
      id: 2,
      user_id: '윤소희',
      eject: '무요무요',
    },
  ];
  //전체 멤버 설정
  const [member, setMember] = useState(members);
  //이름 설정
  const [user_id, setUser] = useState('');
  //게시글 설정
  const [eject, setEject] = useState('');

  //추가
  const addInfo = () => {
    setMember(
      member.concat({ id: member.length + 1, user_id: user_id, eject: eject })
    );

    // input 초기화
    setUser('');
    setEject('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="작성자"
        value={user_id}
        onChange={(e) => setUser(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="제목"
        value={eject}
        onChange={(e) => setEject(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') addInfo();
        }}
      />
      <button onClick={addInfo}>작성</button>
      <br></br>
      <br></br>
      <select>
        {member.map((val) => {
          if (member.length > 0) {
            return <option key={val.id} value={val.user_id}></option>;
          } else {
            return <option key="1" value="작성자"></option>;
          }
        })}
      </select>
      &nbsp;
      <input type="text" placeholder="검색어" /> &nbsp;
      <button>검색</button>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {member.map((val) => {
            return (
              <tr>
                <td>{val.id}</td>
                <td>{val.eject}</td>
                <td>{val.user_id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
