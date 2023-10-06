import React from 'react';

export default function Ex1() {
  return (
    <div>
      <form>
        <label htmlFor="writer">작성자:</label>
        <input id="writer" type="text" name="writer" />
        <label htmlFor="title">제목:</label>
        <input id="title" type="text" name="title" />
        <button type="button">작성</button>
      </form>

      <form>
        <select name="type">
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>

        <input type="text" name="search" placeholder="검색어" />
        <button type="button">검색</button>
      </form>

      <h3>전체 댓글 목록</h3>
      <table border={1} style={{ margin: '30px auto', width: '500px' }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>

      <h3>댓글 검색 결과</h3>
      <table border={1} style={{ margin: '30px auto', width: '500px' }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
