let temp = [];

const createTimeStamp = (input) => {
  const currentTime = new Date(Date.now());
  const years = currentTime.getFullYear();
  const months = currentTime.getMonth() + 1;
  const days = currentTime.getDate();
  const timestamp = `${years}/${months}/${days} ${input}:00`;
  return timestamp;
};

const cardSubmit = (e) => {
  e.preventDefault();
  const {
    dataset: { submit },
    parentNode: { parentNode },
    parentNode: form,
  } = e.target;
  if (submit) {
    const title = parentNode.querySelector("h1").innerText;
    const cutSpan = parentNode.querySelector(".cut-time");
    const cardInput = parentNode.querySelector("input").value;
    const nextGentime = new Date(createTimeStamp(cardInput));
    const nextGentimeDelay = nextGentime.getTime() + 86400000;
    if (nextGentimeDelay > nextGentime.getTime()) {
      getDataByTitle(title).then((data) => {
        cutSpan.innerHTML = printTimeStamp(nextGentime);
        const obj = {
          title,
          gentime: data[0].gentime,
          nextGentime: nextGentime.getTime(),
        };
        const index = temp.findIndex((data) => data.title === obj.title);
        if (index !== -1) {
          temp[index] = obj;
        } else {
          temp.push(obj);
        }
        temp.sort((a, b) => a.nextGentime - b.nextGentime);
        form.classList.add("hidden");
        localStorage.setItem("cutList", JSON.stringify(temp));
      });
    }
  }
};

const cutBtnClick = (e) => {
  const {
    dataset: { type },
    parentNode,
  } = e.target;
  if (type === "cut") {
    const title = parentNode.querySelector("h1").innerText;
    const cutSpan = parentNode.querySelector(".cut-time");
    const form = parentNode.querySelector("form");
    getDataByTitle(title).then((data) => {
      const nextGentime = new Date(Date.now() + data[0].gentime);
      cutSpan.innerHTML = printTimeStamp(nextGentime);
      const obj = {
        title,
        gentime: data[0].gentime,
        nextGentime: nextGentime.getTime(),
      };
      const index = temp.findIndex((data) => data.title === obj.title);
      if (index !== -1) {
        temp[index] = obj;
      } else {
        temp.push(obj);
      }
      temp.sort((a, b) => a.nextGentime - b.nextGentime);
      if (form) {
        form.classList.add("hidden");
      }
      localStorage.setItem("cutList", JSON.stringify(temp));
    });
  }
};

container.addEventListener("click", cutBtnClick);
container.addEventListener("click", cardSubmit);
