const lists = document.querySelector(".header__select");
const container = document.querySelector(".container");

const printData = (data, value) => {
  let temp = [];
  data.map((map) => {
    const create = `<div class="card" data-type="${value}">
      <h1 class="title">${map.name}</h1>
      <p>예상젠</p>
      <span class="check-time">${calEstimatedTime(map.gentime)}</span>
      <p>다음젠</p>
      <form>
        <input type="text" placeholder="07:04"/>
        <button data-submit="submit">입력</button>
      </form>
      <span class="cut-time "></span>
      <button data-type="cut">CUT</button>
    </div>`;
    temp.push(create);
  });
  container.innerHTML = temp.join("");
};

const listInput = (e) => {
  const { value, name } = e.target;
  if (name === "itemList") {
    getDataByItem(value).then((data) => printData(data, value));
    e.target.value = "아이템선택";
  } else if (name === "bossList") {
    getDataByMonster(value).then((data) => printData(data, value));
    e.target.value = "보스선택";
  }
};

lists.addEventListener("input", listInput);
