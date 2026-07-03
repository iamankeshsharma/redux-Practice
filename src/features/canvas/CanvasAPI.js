export function fetchRandomColor(){
    const res = new Promise((resolve) => {
        setTimeout(()=>resolve({data:getRandomColor()}), 1000);
    });
    return res;
}

const getRandomColor = () => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#33FFF5"];
  return colors[getRandomNumber(0, colors.length - 1)];
};

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
