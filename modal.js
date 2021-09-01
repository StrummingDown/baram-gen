const modal = document.querySelector(".modal");
const modalForm = modal.querySelector("form");
const modalInput = modal.querySelector("input");
const modalButton = modal.querySelector("button");

const checkModalHidden = () => {
  const check = localStorage.getItem("checkTime");
  if (check) {
    modal.classList.add("hidden");
  } else {
    modal.classList.remove("hidden");
  }
};

const insertCheckTime = (e) => {
  e.preventDefault();
  let time = modalInput.value;
  time = time.replace(" ", "T");
  const checkTime = new Date(time).getTime();
  if (time.length === 16 && checkTime < Date.now()) {
    localStorage.setItem("checkTime", checkTime);
    modal.classList.add("hidden");
  }
  modalInput.focus();
};

checkModalHidden();
modalForm.addEventListener("submit", insertCheckTime);
