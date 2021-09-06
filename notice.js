const modalNotice = document.querySelector(".modal__notice");
const headerNotice = document.querySelector(".list--notice");
const modalSelect = modalNotice.querySelector(".notice__title");
const noticeMain = modalNotice.querySelector(".notice__main");

const modalSelectChange = (e) => {
  const { value } = e.target;
  switch (value) {
    case "how":
      noticeMain.innerHTML = `<p class="notice__how">
          1. 점검시간을 적습니다.<br />예시: 2021-02-02 14:00<br />21년 9월기준 잠시 비활성화했습니다.<br /><br />
          2. 아이템과 보스중<br />취지에 맞는걸 선택합니다.<br /><br />
          3. CUT버튼은 실시간으로 보스를 잡고<br />CUT버튼을 누를시<br />현재시간에서
          다음젠타임을<br />계산해 보여줍니다.<br /><br />
          4. 기록을 완료한 후 바연젠을 누르면<br />다음젠타임이 빠른
          순서대로<br />정렬해 보여줍니다.<br/><br/>
          5. 잡은시간을 입력할 경우<br/>그 시간을 기준으로<br/>젠타임을 계산해 보여줍니다.<br/><br/>
          6. 왼쪽위 새로고침 버튼을 누를시<br/>초기화를 할 수 있습니다.
        </p>`;
      break;
    case "update":
      noticeMain.innerHTML = `<p class="notice__update">
            2021-09-06<br /><br />
            1. 디자인 구조를 조금 변경하였습니다.<br /><br />
            2. 북방대초원 맹독화군에 대한<br />젠타임 오류와 맵 오류를
            수정하였습니다.<br /><br />
            3. 좀 더 가독성 좋은 폰트로 변경하였습니다.<br /><br/>
            4. 공지사항 게시판을 추가하였습니다.<br /><br />
            5. 예상젠 딜레이시간을<br/>1시간에서 50분으로 변경하였습니다.<br /><br />
            6. 시간을 입력받는 부분을<br/>직관성있게 변경하였습니다.<br/><br/>
            7. iOS에서 예상젠시간이<br/>제대로 안나오는 현상을 수정하였습니다.<br/><br/>
            8. 업데이트 예정게시판을 추가 했습니다.<br/><br/>
            피드백을 받고있습니다.<br />(이메일: voluntad3000@gmail.com)
          </p>`;
      break;
    case "schedule":
      noticeMain.innerHTML = `<p class="notice__update">
            1. 타이머<br /><br />
            2. 보스의 젠타임<br />
            예시: 철갑대사 - 1시간<br /><br/>
            3. 드랍아이템목록<br /><br />
            4. 디자인<br/><br/>
            5. 잡은시간<br/><br/>
            6. 시간대 고정 보스추가
          </p>`;
      break;
    default:
      break;
  }
};

const modalClick = (e) => {
  const {
    dataset: { type },
  } = e.target;
  if (type === "close") {
    modalNotice.classList.add("hidden");
    container.classList.remove("hidden");
  }
};

const headerNoticeClick = () => {
  modalNotice.classList.remove("hidden");
  container.classList.add("hidden");
};

modalSelect.addEventListener("change", modalSelectChange);
headerNotice.addEventListener("click", headerNoticeClick);
modalNotice.addEventListener("click", modalClick);
