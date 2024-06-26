# ⚔️ 강화하기

</br>

## 미션 요구사항

</br>

- 나의 아이템을 강화할 수 있는 프로그램입니다
- 이전 미션의 로그인 및 회원가입 기능을 사용합니다

- 로그인 및 회원가입을 할 수 있습니다
  > 로그인 해야 강화할 수 있습니다
  > 비로그인 유저는 명예의 전당만 확인 가능합니다
- 명예의 전당 - 상위 강화 등급 10개가 검의 이름과 함께 보여집니다
- 검의 이름을 입력 받습니다
- 이름은 최대 5글자로 제한합니다

- 규칙을 안내합니다

  > 확률 증가권(사용시 확률 10% 증가)은 계정당 3개 주어집니다.
  > 강화 단계에 따른 강화 확률이 보여집니다.
  > 확률 증가권 사용 할 시 증가된 확률을 보여줘야 합니다.

  상태는 강화 성공, 강화 실패, 파괴로 세 개의 결과 상태가 존재합니다.

  시작 레벨은 1입니다.

</br>

**💪🏻 강화 확률**

90% → 80% → 70% → 50% → 30% → 10% → 3%

1번 성공할 때마다 강화 확률이 올라갑니다

7번 성공 이후에는 3%로 고정됩니다

90% 강화 성공 확률 - 10% 강화 실패 확률

강화를 실패 하면 현재 강화 레벨이 유지 됩니다

</br>

**🔥 파괴 확률**

3강 이전 5%

4가 이후 부터 5%씩 증가, 예) 4강 10%, 15% ….

최대 50%까지 증가합니다

파괴되지 않을경우 한 단계 하강

파괴가 성공되면 Lv.0으로 하락합니다

</br>

- 강화 성공
  → 1단계상승
- 강화 실패

  - 파괴 성공
    → 0단계로 하락
  - 파괴 실패
    → 1단계 하락

- 강화하기 버튼을 클릭합니다
  > 정말 강화하시겠습니까? → 재확인 후 강화를 진행합니다
- 1개의 계정에서는 1개 물건만 강화할 수 있습니다

</br>

## 기능 요구사항

</br>

### FE

피그마 : [https://www.figma.com/design/LGnMHSOGfVhWMIRsoCvm78/Untitled?node-id=0-1&t=dFs70jSyEkxgklwl-0](https://www.figma.com/design/LGnMHSOGfVhWMIRsoCvm78/Untitled?node-id=0-1&t=dFs70jSyEkxgklwl-0)

</br>

### BE

POST /users/register - 회원가입
POST /users/login - 로그인
GET /users/check-duplicate-id - id 중복 확인
POST /items- 아이템 추가
POST /enhance - 강화하기 ( 확률 증가권 사용 여부 정보 추가 )
GET /enhance - 강화 결과 조회
GET /items - 내 아이템 조회
GET /items/top10 - 상위 10개 아이템 조회
위 API 명세서는 가이드이며, 원한다면 수정하거나, 추가해도 됩니다.

</br>

## 요구 페이지

</br>

- 로그인 페이지

  > 이메일과 비밀번호를 입력 받습니다
  > 일치하지 않는 경우 따로 불일치 문구를 표시합니다
  > 일치하는 경우 출석하기 버튼이 있는 페이지로 이동합니다

- 회원가입 페이지

  > 이메일 중복 확인을 합니다
  > 비밀번호를 확인합니다
  > 사용자의 이름을 입력 받습니다

- 검의 이름 입력받는 페이지

  > 검의 이름을 입력 받습니다
  > 최초 로그인 유저에게만 이 화면이 보여져야 합니다

- 강화 페이지

  > 검의 이름과 물건의 일러스트가 보입니다
  > 강화하기 버튼이 보입니다
  > 강화 성공, 강화 실패 → 파괴 or 하락 이벤트가 있습니다

- 명예의 전당 페이지
  > 상위 강화 등급 10개와 이름, 해당 검 소유자의 이름이 보여집니다
  > 비로그인 유저는 해당 페이지에만 접근 가능합니다
  > 비로그인 유저 → 왼쪽 상단에 로그인 버튼 보여주기
  > 로그인 유저 → 오른쪽 상단에 강화하러가기 버튼 보여주기

</br>

## 요구 기능

</br>

- 로그인
  이메일&비밀번호 일치 여부 확인
  </br>

- 회원가입
  이메일 중복 가입 확인
  비밀번호 일치 확인
  이름 입력 받기
  </br>
- 로그인 여부 구분
  로그인한 유저만 강화할 수 있습니다
  비로그인 유저는 명예의 전당만 확인 가능합니다
  </br>

- 최초 로그인 확인
  최초 로그인 한 유저에게만 물건 선택 및 물건 이름 입력 페이지가 나타나야 합니다
- 회원은 계정 1개당 1개의 물건만 강화 할 수 있습니다
  </br>

- 검 이름 입력
  검의 이름을 입력 받습니다
  </br>

- 강화 여부 확인
  강화하기를 선택하면 사용자의 선택을 재확인 하는 모달창이 떠야합니다
  </br>

- 강화
  등급에 따른 강화 확률에 맞게 강화를 진행합니다
  강화 결과에 따른 계산이 이루어져야 합니다
  강화 결과에 맞는 화면이 렌더링 됩니다
  </br>

- 확률 증가권
  사용자가 확률 증가권을 사용할 때 강화하기가 바로 실행 되어야 합니다
  모달 창에는 확률 증가권을 사용 후 증가한 최종 성공 확률이 보여져야 합니다
  </br>

- 명예의 전당
  상위 10개 등급의 물건이 보여집니다

  </br>

## 프로그래밍 요구사항

</br>

# Back End

- **Spring을 통해 서비스**
- JWT를 사용해 로그인 유지
- FE에서 사용할 api 제작
- 예외 처리를 해야 합니다
- 모든 정보 저장 및 계산
- 상황에 맞는 에러 메세지를 반환

# Front End

- **React를 통해 서비스**
- 로그아웃 구현
- 예외 처리를 해야 합니다
- BE에서 반환한 에러 메세지에 맞는 페이지 or 컴포넌트를 반환
- 디자인에 맞는 애니메이션 및 액션을 구현해야 합니다
