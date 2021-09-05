const footer = document.querySelector(".footer");
const copyright = footer.querySelector(".copyright");

const getYear = () => {
  const year = new Date().getFullYear();
  return year;
};

copyright.innerHTML = `Copyright ${getYear()}. 바연젠 all rights reserved.`;
