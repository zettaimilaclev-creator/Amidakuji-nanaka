// ▼ GitHubから直接画像を読み込むURL設定
const BASE_URL = "https://raw.githubusercontent.com/zettaimilaclev-creator/Amidakuji-nanaka/main/";

// ▼ 古いヘッドホンが残らないように一度リセットする
const startContainer = document.getElementById("start-node-container");
startContainer.innerHTML = "";

// ▼ ヘッドホンを順番に生成する処理
currentTopFruits.forEach((fruit, index) => {
  const startNode = document.createElement("div");
  startNode.className = "node-item";
  startNode.id = `start-${index}`;

  // GitHubの画像パスを指定
  startNode.innerHTML = `
    <img src="${BASE_URL}headphone-${fruit.id}.png" alt="ヘッドホン">
  `;

  // クリックしたときのアニメーション開始
  startNode.onclick = () => {
    startAmidaAnimation(index);
  };

  startContainer.appendChild(startNode);
});
