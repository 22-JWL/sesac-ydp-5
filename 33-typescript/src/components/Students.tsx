import React from 'react';

interface StudentInfo {
  name: string;
  grade: number;
  part?: string;
  handleClick: (name: string, grade: number) => void;
  //반환값은 void이다
}

//type사용해도 상관 없지만 하나로 통일하자!
// type StudentInfo {
//     name: string;
//     grade: number;
//   }

//FC: functional component
//React.FC 사용할 때는 Generic을 이용해서 props타입을 표현
// const Student: React.FC<StudentInfo> = ({ name, grade }) => {
//   return (
//     <div>
//       <li>이름 : {name}</li>
//       <li>학년 : {grade}</li>
//     </div>
//   );
// };

// export default function Students({name, grade}: StudentInfo) {
//   return <div>Students</div>;
// }

const Student = ({ name, grade, part, handleClick }: StudentInfo) => {
  return (
    <div onClick={() => handleClick(name, grade)}>
      <li>이름 : {name}</li>
      <li>학년 : {grade}</li>
      <li>전공 : {part || '자유전공'}</li>
      <br></br>
    </div>
  );
};

export default Student;
