import PropTypes from 'prop-types';

export default function FunctionComponent(Props) {
  const student = '이재욱';
  const { name } = Props;
  return (
    <div>
      <h1>HI {student}!</h1>
      {/* <p>
        새로운 컴포넌트의 이름은 <b>{Props.name}</b>
      </p> */}
      <p>
        제가 좋아하는 음식은 <b style={{ color: 'red' }}>{name}</b>
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
