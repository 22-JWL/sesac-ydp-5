import PropTypes from 'prop-types';

export default function FunctionComponent(Props) {
  const student = '이재욱';
  const { title, author, price, type } = Props;
  return (
    <div>
      <h1>이번주 베스트셀러</h1>
      {/* <p>
        새로운 컴포넌트의 이름은 <b>{Props.name}</b>
      </p> */}
      <p>
        <b style={{ color: 'red', font: '100px' }}>{title}</b>
        <br></br>

        <b>저자: {author}</b>
        <br></br>
        <b>판매가: {price}</b>
        <br></br>
        <b>구분: {type}</b>
        <br></br>
      </p>
    </div>
  );
}

FunctionComponent.defaultProps = {
  name: '기본 이름',
};

//오류를 콘솔로 표시해 준다
FunctionComponent.propTypes = {
  name: PropTypes.string,
};
