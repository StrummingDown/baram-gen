const getDataByItem = async (item) => {
  const { data } = await fetch("db.json").then(async (res) => await res.json());
  return data.filter((db) => db.item === item);
};

const getDataByMonster = async (type) => {
  const { data } = await fetch("db.json").then(async (res) => await res.json());
  return data.filter((db) => db.type === type);
};

const getDataByTitle = async (title) => {
  const { data } = await fetch("db.json").then(async (res) => await res.json());
  return data.filter((db) => db.name === title);
};
