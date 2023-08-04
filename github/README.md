# sesac-ydp-5
새싹X코딩온 웹 개발자 부트캠프 과정 수업 코드 저장소

작성자 : Sean
git lense기능으로 누가, 언제 어떤것을 변경했는지 알려준다
변경된 줄은 초록색

월 수 과자 채움
8/10에 뭐 있음
7?, 8?월에 퍼스널 컬러진단, 증명사진 지원
스터디 간식비 지원
창업 프로그램

git 명령어
1. git clone [github-repository-url]: github (remote) repository 저장소 local로
2. git remote -v remote repository url 이 잘 연결되었는지 확인
3. git status : 현재 파일상태 (변경내역) 확인
4. git add . (아무말도 없다 : 명령어가 잘 수행되었다, Not found: 잘못되었다) : 변경사항을 staging area 이동(임시 저장)
5. git commit -m "커밋메세지": 버전 남기기
6. git log : "커밋"히스토리를 조회 할 수 있다.
    git log --oneline : 커밋 ID + message 간단히 한 줄로 보여줌
7. git push origin main (github 로그인페이지나 인증 메시지가 뜨는 경우도 있다.)
    403에러 뜨는 경우(윈도우: 제어판->사용자 계정메뉴->자격증명 관리->windows 자격 증명-> 일반 자격증명 제거)
                    (맥: terminal-> keychain access-> 키체인 접근의 검색에서 github 검색, git credential-osxkeychain erase
host=github.com
protocol=https
> [Press Enter])
f
교육일정dsfsd