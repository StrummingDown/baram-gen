const resetBtn = document.querySelector(".reset-btn");

const resetBtnClick = () => {
  const check = confirm("초기화를 하시겠습니까?");
  if (check) {
    localStorage.clear();
    location.reload();
  }
};

resetBtn.addEventListener("click", resetBtnClick);
