self.onmessage = function (e) {
  const { data } = e;
  const result = heavyCalculation(data);

  self.postMessage(result);
};

function heavyCalculation(data) {
  let sum = 0;
  for (let i = 0; i < 10000000000; i++) {
    sum += i;
  }
  postMessage(sum + data);
}
