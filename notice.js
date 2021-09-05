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
          3. 입력이라는것은 본인이 다음 젠시간을<br />알고 있는 경우 적으라는
          의미입니다.<br /><br />
          4. CUT버튼은 실제로 보스를 잡고<br />CUT버튼을 누를시<br />현재시간에서
          다음젠타임을<br />계산해 보여줍니다.<br /><br />
          5. 기록을 완료한 후 바연젠을 눌러<br />홈으로 갈시 다음젠타임이 빠른
          순서대로<br />정렬해 보여줍니다.
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
            6. 다음젠시간 입력을 좀 더 편하게<br/>입력할수 있게 변경하였습니다.<br/><br/>
            7. 피드백을 받고있습니다.<br />(이메일: voluntad3000@gmail.com)
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
  }
};

const headerNoticeClick = () => {
  modalNotice.classList.remove("hidden");
};

modalSelect.addEventListener("change", modalSelectChange);
headerNotice.addEventListener("click", headerNoticeClick);
modalNotice.addEventListener("click", modalClick);
