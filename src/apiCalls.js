const getVagas = () => {
  return fetch("https://www.mocky.io/v2/5d6fb6b1310000f89166087b").then(
    (response) => response.json()
  );
};

export { getVagas };
