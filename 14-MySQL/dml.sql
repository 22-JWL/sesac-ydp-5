CREATE TABLE customer (
	custid CHAR(10) PRIMARY KEY NOT NULL,
    custname VARCHAR(10) NOT NULL,
    addr CHAR(10) NOT NULL,
    phone CHAR(11),
    birth DATE
);

-- 외래키 제약 조건
-- 두 테이블 사이의 관계를 맺음
-- 다른 테이블의 기본키를 외래키로 연결
-- 기준 테이블: 기본키를 갖는 테이블(customer)
-- 참조 테이블 : 외래키가 있는 데이블 (orders)
-- 형식 : foreign key(열_이룸) references 기준_테이블(열_이름)

-- on update cascade: 기준 테이블의 데이터가 변경되면 참조 테이블의 데이터도 변경
-- on delete cascade: 기준 테이블의 데이터가 삭제되면 참조 테이블의 데이터도 삭제


CREATE TABLE authors (
	author_id INT PRIMARY KEY NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50)
);

CREATE TABLE books (
	book_id INT PRIMARY KEY NOT NULL,
    title VARCHAR(100),
    author_id INT,
    publication_date DATE,
    FOREIGN KEY (author_id) REFERENCES authors(author_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE orders (
	order_id INT PRIMARY KEY,
    book_id INT,
    customer_name VARCHAR(50),
    order_date DATE,
    FOREIGN KEY (book_id) REFERENCES books(book_id) ON UPDATE CASCADE ON DELETE CASCADE
);

-- 2. 테이블 목록 확인
-- 현재 사용중인 데이터베이스의 모든 테이블 조회

show tables;

-- 3. 테이블 구조 확인
-- 테이블의 컬럼 정보(자료형, NULL 여부, KEY, DEFAULT 등)

desc authors;

drop table orders;

-- INSERT 추가

INSERT INTO customer (custid, custname, addr, phone, birth)
	VALUES('lucky', '이재욱', '미국 뉴욕', '010222333', '2002-03-05');

INSERT INTO customer (custid, custname, addr, phone, birth) VALUES('lucky', '이재욱', '미국 뉴욕', '010222333', '2002-03-05');

INSERT INTO customer VALUES ('sadf', '이재훈', '미국 시카고', '0103123513', '2004-02-20');

insert into customer values ('kiwi', '김키위', '대한민국 서울', '01012341234', '1990-03-17');
insert into customer values ('apple', '이사과', '대한민국 포항', '01012344321', '1992-06-17');

INSERT INTO user (id, pw, name, gender, birthday, age) VALUES
        ("widowmaker", "38ewifh3", "위도우", "F", "1976-06-27", 47),
        ("dvadva", "k3f3ah", "송하나", "F", "2001-06-03", 22),
        ("jungkrat", "4ifha7f", "정크랫", "M", "1999-11-11", 24);
        
insert into orders values (NULL, 'apple', '프링글스', '3000', 1);
insert into orders values (NULL, 'kiwi', '홈런볼', '2000', 3);

-- update 수정
-- custid 가 lucky인 고객의 주소를 대한민ㄴ국 서울로 변경
update customer set addr = '대한민국 서울' WHERE custid = 'lucky';

-- delete 삭제

-- custid가 sadf인 사람의 정보를 테이블에서 삭제
delete from customer where custid = 'sadf';

-- 고객 테이블에 'apple' 고객을 삭제했을 때, 주문 테이블에서 'apple' 고객의 주문정보가 함께 삭제되는지? (on delete cascade)
delete from customer where custid = 'apple';

-- SELECT 조회
SELECT * FROM customer;
SELECT * FROM user;

truncate table customer;
truncate table orders;

-- 테이블 삭제 순서!
-- customer table, orders table이 customer.custid 를 기준으로 "관계" 맺음
-- customer table 존재하는 회원만 orders 테이블에 데이터를 추가할 수 있음
-- 만약에 orders 테이블이 있는데, customer 테이블을 삭제 (drop) 하면?
-- orders 테이블은 어떤 고객의 생일 정보를 알고 싶어도 customer 테이블 자체가 날라갔기 때문에 알 수 없음. 
-- pk-fk 연결된 테이블은 외래키가 설정된 테이블 (참조 테이블) 먼저 삭제
-- (1) orders 테이블 삭제 -> (2) customer 테이블 삭제
 
INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('kiwi', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍수지', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');




INSERT INTO orders VALUES(NULL, 'jy9987', '프링글스', 3500, 2);
INSERT INTO orders VALUES(NULL, 'kiwi', '새우깡', 1200, 1);
INSERT INTO orders VALUES(NULL, 'hello', '홈런볼', 4200, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);
INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);
INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);
INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);
INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);
INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);
INSERT INTO orders VALUES(NULL, 'kiwi', '꼬깔콘', 1700, 2);
INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);
INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);
INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);
INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);
INSERT INTO orders VALUES(NULL, 'kiwi', '고구마깡', 1300, 3);
INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);
INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);
INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);

-- 모든 고객의 아이디를 검색
select birthday FROM user;

-- 모든 고객의 아이디, 생년월일 검색(순서 O)
select birth, custid from customer;

-- 모든 고객의 아이디, 이름 , 주소, 전번, 생년월일 검색
select custid, custname, addr, phone, bitrh from customer;

select * from customer;

-- -- 고객 테이블에 있는 모든 주소 검색
select addr from customer;

select DISTINCT add FROM comtomer;

SELECT * FROM USER ORDER BY BIRTHDAY ASC;


select* from customer order by custname DESC;


SELECT * FROM customer WHERE birth >= '2000-01-01' ORDER BY addr, custid desc;

-- < WHERE 조건 >
-- 비교: =, <>, <, <=, >, >=
-- 범위: BETWEEN
-- 집합: IN, NOT IN
-- 패턴: LIKE
-- NULL: IS NULL, IS NOT NULL
-- 복합조건: AND, OR, NOT

-- 비교
-- 고객 이름이 강해린인 고객을 검색
select birth from costomer where custname= '강해린';-- < WHERE 조건 >
-- 고객 이름 강혜린x





select birth from costomer where custname= '강해린!';-- < WHERE 조건 
-- 비교: =, <>, <, <=, >, >=
-- 범위: BETWEEN
-- 집합: IN, NOT IN
-- 패턴: LIKE
-- NULL: IS NULL, IS NOT NULL
-- 복합조건: AND, OR, NOT

-- 비교
-- 고객 이름이 강해린인 고객을 검색

-- 범위
-- 1995년이상 2000년 이하 출생 고객 검색


-- 집합
-- 주소가 서울 혹은 런던인 고객 검색
-- 주소가 서울 혹은 런던이 아닌 고객 검색



-- 패턴
-- 주소가 '미국 로스앤젤레스'인 고객을 검색

-- 주소에 '미국'이 포함되어 있는 고객 검색
-- %: 0개 이상 문자열

-- 고객 이름 두번째 글자가 '지'인 고객 검색
-- 참고

-- 고객 이름 세번째 글자가 '수'인 고객
-- 참고



-- 복합조건 (AND, OR, NOT)
-- 주소지가 대한민국이고, 2000년생 이후 출생 고객 검색

-- 주소지가 미국이거나 영국인 고객 검색

-- 휴대폰 번호 마지막 자리가 4가 아닌 고객 검색

-- 범위
-- 1995년이상 2000년 이하 출생 고객 검색


-- 집합
-- 주소가 서울 혹은 런던인 고객 검색
-- 주소가 서울 혹은 런던이 아닌 고객 검색



-- 패턴
-- 주소가 '미국 로스앤젤레스'인 고객을 검색

-- 주소에 '미국'이 포함되어 있는 고객 검색
-- %: 0개 이상 문자열

-- 고객 이름 두번째 글자가 '지'인 고객 검색
-- 참고

-- 고객 이름 세번째 글자가 '수'인 고객
-- 참고



-- 복합조건 (AND, OR, NOT)
-- 주소지가 대한민국이고, 2000년생 이후 출생 고객 검색
select*from customer where addr like '대한민국%' and birth >= '2000-01-01';

-- 주소지가 미국이거나 영국인 고객 검색
select*from customer where addr like '미국%' or addr like '영국%';
-- 휴대폰 번호 마지막 자리가 4가 아닌 고객 검색`
select*from customer where phone not like '%_4' ;




-- 실습.SELECT문
SELECT * FROM orders;

SELECT * FROM USER ORDER BY birthday ASC;
SELECT * FROM USER WHERE gender = 'M' ORDER BY NAME DESC;


SELECT id, name FROM user WHERE birthday LIKE '199%';

SELECT * FROM user WHERE birthday LIKE '%_06_%' ORDER BY birthday ASC;

SELECT * FROM user WHERE gender = 'M' AND birthday LIKE '197%';

SELECT *FROM user ORDER BY age DESC LIMIT 3;

SELECT * FROM user WHERE age BETWEEN 25 AND 50;

UPDATE user SET pw = '12345678' WHERE id = 'hong1234';

DELETE FROM user WHERE id = 'jungkrat';




-- <집계 함수>
-- 계산하여 어떤 값을 리턴하는 "함수"
-- group by 절과 함께 쓰이는 케이스가 많음
use orders;
SELECT * FROM orders;

-- 주문 테이블에서 총 판매 개수 검색
select sum(amount) from orders;

-- 주문 테이블에서 총 판매 개수 검색 + 의미있는 열이름으로 변경
select sum(amount) as 'total_amount' from orders;

-- 주문 테이블에서 총 판매 개수, 평균 판매 개수, 상품 최저가, 상품 최고가 검색
SELECT 
    SUM(amount) AS 'total_sum',
    AVG(amount) AS 'total_avg',
	MIN(price) AS 'total_min',
    MAX(price) AS  'total_max_price' 
	FROM orders;
    
-- 

    
-- 주문 테이블에서 총 주문 건수 (= 튜플 개수)
select count(*) from orders;


-- 주문 테이블에서 주문한 고객 수(중복 없이)
select count(distinct custid;

-- 고객별로 주문한 고객 수(중복 없이)

-- 고객별 주문 건수 구하기

select custid, count(*) from orders group by custid;

SELECT * FROM orders;
select custid, sum(amount) from orders group by custid;

select custid, sum(price*amount) from orders group by custid;

-- 상품별 판매 개수 
select prodname, sum(amount) from orders group by prodname;

-- 총 주문액이 10000원 이상인 고객에 대해서 고객별로 주문한 상품 통 수량 구하기
select custid, sum(amount) from orders group by custid having sum(price * amount) >= 10000;

select custid, sum(amount) from orders group by custid having sum(price * amount) >= 10000;