import React from 'react';
import { useForm } from 'react-hook-form';

export default function NameAgeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log('onValid', data);
  };

  const onInValid = (err) => {
    console.log('onInValid', err);
  };

  return (
    <div>
      <h1>react-hook-form</h1>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          placeholder="username"
          {...register('username', {
            required: '이름을 입력해주세요',
            message: '이름은 최소 2글자 이상 작성해주세요',
          })}
        ></input>
        {errors.username?.message}
        <br></br>
        <input
          type="text"
          placeholder="나이를 입력하세요"
          {...register('age', {
            validate: {
              notMinus: (v) => v > 0 || '나이는 0보다 큰 정수 입니다',
            },
          })}
        ></input>
        {errors.age?.message}
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
