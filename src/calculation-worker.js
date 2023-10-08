self.onmessage = function (e) {
  const { data } = e;

  // TODO
  const result = heavyCalculation(data);

  self.postMessage(result);
};
