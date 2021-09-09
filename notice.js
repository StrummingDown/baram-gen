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
            2021-09-09<br /><br />
            1. 홈페이지 리뉴얼중 입니다.<br /><br />
            2. 임시점검시간을 반영하였습니다. 15:30<br/><br/>
            3. 이 사이트는 젠타임을 공유하지 않습니다.<br/>
            기록하셔도 다른사람은 전혀 모릅니다.<br/>
            젠타임 공유하는걸까봐<br/>
            사용 안하시는분도 있는거 같아서<br/>
            미리 말씀 드립니다.<br/><br/>
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
