const printTimeStamp = (time) => {
  const hours = time.getHours();
  const minutes = time.getMinutes();
  return `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
};

const calEstimatedTime = (gentime) => {
  const checkTime = Number(localStorage.getItem("checkTime"));
  const passTime = Date.now() - checkTime;
  const delayTime = 3600000;
  let count = Math.floor(passTime / gentime);
  const estimatedTime = new Date(checkTime + gentime * count);
  const remainTime = estimatedTime.getTime() - Date.now() + delayTime;
  if (remainTime <= 0) {
    count += 1;
    const time = new Date(checkTime + gentime * count);
    return printTimeStamp(time);
  } else {
    return printTimeStamp(estimatedTime);
  }
};
