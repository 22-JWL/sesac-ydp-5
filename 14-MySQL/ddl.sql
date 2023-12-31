-- 데이터 베이스: 데이터의 집합
-- DBMS : 데이터베이스를 운영/ 관리하는 프로그램(ex.My.SQL)
-- 테이블 : 하나 이상의 열과 행으로 구성된 데이터베이스의 최소 단위
-- SQL: RDBMS에서 사용되는 언어(데이터베이스를 구축, 관리 활용하기 위한 언어)

-- DDL (Data Definition Language)
-- 데이터베이스, 테이블을 정의하는 언어

-- [Database 관련 명령어]
-- 1. Database 생성
create database sesac_14_tesk default character set utf8 collate utf8_general_ci;

-- 2. Database 목록 조회
show databases;
-- 3. Database 사용 선언
use sesac_14_tesk;
-- 4.Database 삭제alter
drop database sesac;


-- [Table 관련 명령어]
-- 1. 테이블 생성
-- 제약조건("옵션")
-- NOT NULL : NULL 허용 x
-- AUTO_INCREMENT : 자동 숫자 증가, 테이블에 데이터 추가할 때 마다 자동으로 숫자 증가alter
-- PRIMARY KEY : 기본키 (중복값 허용 x, NULL 허용 X, 하나의 테이블당 하나)
-- DEFAULT 기본값 : 특정 속성의 기본 값 설정
-- UNIQUE: 중복 허용X BUT NULL허용 하나의 테이블당 여러개 가능!!
CREATE TABLE orders(
	order_id INT PRIMARY KEY NOT NULL,
    book_id INT,
    customer_name VARCHAR(50),
    order_date date
);
-- 2. 테이블 목록 확인
-- 현재 사용중인 데이터베이스의 모든 테이블 조회alter
show tables;

-- 3. 테이블 구조 확인
-- 테이블의 컬럼 정보(자료형, NULL 여부, KEY, DEFAULT 등)

desc books;

-- 4.테이블 삭제
-- drop : 테이블 존재 자체를 없앰alter
DROP TABLE member;
-- trancate : 테이블 구조만 남겨놓고 모든 행 삭제
truncate table product;

-- 5. 테이블 정의 수정
-- 이미 테이블을 만들었고, 테이블에 데이터가 추가되었을 떄
-- 컬럼 정보가 바뀌어야 하는 경우 사용

-- 5-1. 컬럼 추가
ALTER TABLE member ADD interest VARCHAR(100);

-- 5-2. 컬럼 수정
ALTER TABLE member MODIFY gender varchar(2) NOT NULL;
alter table product change new_column new_column2 int; -- 컬럼명 변경


-- 5-2. 컬럼 삭제
ALTER TABLE member DROP age;