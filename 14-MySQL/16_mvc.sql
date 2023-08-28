-- 이모지, 특수 문자를 사용할 수 있는 인코딩
create database sesac_16_mvc character set utf8mb4 collate utf8mb4_unicode_ci;
drop database sesac_16_mvc;
show databases;
use sesac_16_mvc;

CREATE TABLE visitor(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    comment mediumtext
);
drop table visitor;

insert into visitor values (1, '철수', '차가워 졌다');
insert into visitor values (2, '영희', '머리를 찼다');
desc visitor;

select * from visitor;


-- ethan 이라는 새로운 계정(mysql 접속 가능한 계정) 생성
create user 'user'@'%' IDENTIFIED BY '1234';

GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;

FLUSH privileges;

ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '1234';

grant all privileges on *.* to 'user'@'%' with grant option;

show database;
select *from mysql.user



