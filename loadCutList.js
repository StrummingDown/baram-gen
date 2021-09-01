const loadCutList = (cutList) => {
  const component = [];
  cutList.map((data) => {
    const nextGentime = new Date(data.nextGentime);
    const create = `<div class="card" data-type="${data.title}">
    <h1 class="title">${data.title}</h1>
    <p>예상젠</p>
    <span class="check-time">${calEstimatedTime(data.gentime)}</span>
    <p>다음젠</p>
    <span class="cut-time">${printTimeStamp(nextGentime)}</span>
    <button data-type="cut">CUT</button>
  </div>`;
    component.push(create);
  });
  container.innerHTML = component.join("");
};

function init() {
  temp = JSON.parse(localStorage.getItem("cutList"));
  if (temp) {
    temp.sort((a, b) => a.nextGentime - b.nextGentime);
    loadCutList(temp);
  } else {
    temp = [];
  }
}

init();
