const BASE_URL = "https://raw.githubusercontent.com/zettaimilaclev-creator/Amidakuji-nanaka/main/";
const BG_IMAGE_NAME = "amida-lines-1.png"; 

// 13種類のキャラクター
const allFruits = [
  { id: "strawberry", name: "いちご" },
  { id: "grape", name: "ブドウ" },
  { id: "peach", name: "もも" },
  { id: "kiwi", name: "キウイ" },
  { id: "banana", name: "バナナ" },
  { id: "orange", name: "オレンジ" },
  { id: "coconut", name: "ココナッツ" },
  { id: "blueberry", name: "ブルーベリー" },
  { id: "cherry", name: "さくらんぼ" },
  { id: "apple", name: "アップル" },
  { id: "lavender", name: "ラベンダー" },
  { id: "honey", name: "ハニー" },
  { id: "mint", name: "ミント" }
];

// ★ゴールの種類（colorプロパティを追加して色を連動させました！）
const resultCategories = [
  { text: "超あたり", id: "cho_atari", color: "color-pink" },
  { text: "大当たり", id: "ooatari", color: "color-orange" },
  { text: "あたり", id: "atari", color: "color-blue" },
  { text: "はずれ", id: "hazure", color: "color-green" },
  { text: "大はずれ", id: "dai_hazure", color: "color-purple" }
];

// 五七五セリフ集
const messages = {
  cho_atari: [
    { main: "超あたり！", sub: "無敵の笑顔、スペシャルななか" },
    { main: "最高だ！", sub: "奇跡を起こす、ミラクルななか" },
    { main: "すっごーい！", sub: "テンション最高、ウルトラななか" }
  ],
  ooatari: [
    { main: "大当たり！", sub: "今日も一緒に、スペシャルななか" },
    { main: "大勝利！", sub: "今日も明日も、ずっと無敵ななか" }
  ],
  atari: [
    { main: "やったじゃん！", sub: "今日も幸運、スーパーななか" },
    { main: "よかったね！", sub: "のんびりいこう、マイペースななか" }
  ],
  hazure: [
    { main: "はずれてない！笑", sub: "今日も一緒に、大好きななか" },
    { main: "大丈夫！", sub: "わたしがついてる、とってもななか" }
  ],
  dai_hazure: [
    { main: "任せとけ！", sub: "今日もあたしは、ポンコツななか" },
    { main: "大はずれ！？", sub: "むしろおいしい、芸人ななか" }
  ]
};

// 全12本の線を正確に記憶
const bridges = [
  { y: 0.27, line: 3 }, { y: 0.28, line: 0 }, { y: 0.35, line: 2 }, 
  { y: 0.39, line: 3 }, { y: 0.41, line: 1 }, { y: 0.48, line: 2 }, 
  { y: 0.51, line: 0 }, { y: 0.52, line: 3 }, { y: 0.55, line: 1 }, 
  { y: 0.59, line: 2 }, { y: 0.62, line: 1 }, { y: 0.67, line: 3 }
].sort((a, b) => a.y - b.y);

let currentTopFruits = [];
let currentGoals = [];
let isPlaying = false;
let currentShareText = ""; 

const gameScreen = document.getElementById("game-screen");
const resultScreen = document.getElementById("result-screen");
const startContainer = document.getElementById("start-node-container");
const goalContainer = document.getElementById("goal-node-container");
const bgLineImg = document.getElementById("bg-line-img");
const resultChara = document.getElementById("result-chara-img");
const resultTitle = document.getElementById("result-title");
const resultMainText = document.getElementById("result-main-text");
const resultSubText = document.getElementById("result-sub-text");
const resetBtn = document.getElementById("reset-btn");
const shareBtn = document.getElementById("share-btn");
const linesWrapper = document.getElementById("lines-wrapper");

function initGame() {
  isPlaying = false;
  gameScreen.classList.remove("hidden");
  resultScreen.classList.add("hidden");
  
  startContainer.innerHTML = "";
  goalContainer.innerHTML = "";
  bgLineImg.src = BASE_URL + BG_IMAGE_NAME;

  const shuffledTop = [...allFruits].sort(() => 0.5 - Math.random());
  currentTopFruits = shuffledTop.slice(0, 5);
  currentGoals = [...resultCategories].sort(() => 0.5 - Math.random());

  currentTopFruits.forEach((fruit, index) => {
    const startNode = document.createElement("div");
    startNode.className = "node-item";
    startNode.id = `start-${index}`;
    startNode.innerHTML = `<img src="${BASE_URL}headphone-${fruit.id}.png" alt="ヘッドホン">`;
    startNode.onclick = () => startAmidaAnimation(index);
    startContainer.appendChild(startNode);
  });

  currentGoals.forEach((goal, index) => {
    const goalNode = document.createElement("div");
    // ★ここで色付きのクラス（goal.color）を付与しています！
    goalNode.className = `goal-text-box ${goal.color}`; 
    goalNode.id = `goal-${index}`;
    goalNode.innerText = goal.text; 
    goalContainer.appendChild(goalNode);
  });
}

function calculatePath(startIndex) {
  let currentLine = startIndex;
  const path = [{ line: currentLine, y: 0.18 }]; 

  bridges.forEach(b => {
    if (b.line === currentLine) {
      path.push({ line: currentLine, y: b.y });
      currentLine++;
      path.push({ line: currentLine, y: b.y });
    } else if (b.line === currentLine - 1) {
      path.push({ line: currentLine, y: b.y });
      currentLine--;
      path.push({ line: currentLine, y: b.y });
    }
  });

  path.push({ line: currentLine, y: 0.82 }); 
  return { path, finalIndex: currentLine };
}

async function startAmidaAnimation(startIndex) {
  if (isPlaying) return;
  isPlaying = true;

  const { path, finalIndex } = calculatePath(startIndex);
  const headPhoneFruit = currentTopFruits[startIndex];
  const resultCategory = currentGoals[finalIndex];

  let runner = document.getElementById("runner");
  runner.style.backgroundImage = `url(${BASE_URL}headphone-${headPhoneFruit.id}.png)`;
  runner.classList.remove("hidden");

  const wrapperRect = linesWrapper.getBoundingClientRect();
  const startNodes = Array.from(startContainer.children);
  const lineXPositions = startNodes.map(node => {
    const rect = node.getBoundingClientRect();
    return rect.left - wrapperRect.left + (rect.width / 2) - 22; 
  });

  runner.style.transition = "none";
  runner.style.left = `${lineXPositions[path[0].line]}px`;
  runner.style.top = `${wrapperRect.height * path[0].y - 22}px`;

  for (let i = 1; i < path.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 20));
    const targetX = lineXPositions[path[i].line];
    const targetY = wrapperRect.height * path[i].y - 22;
    const isHorizontal = path[i].line !== path[i - 1].line;
    const duration = isHorizontal ? 0.5 : 0.6; 

    runner.style.transition = `top ${duration}s linear, left ${duration}s linear`;
    runner.style.left = `${targetX}px`;
    runner.style.top = `${targetY}px`;
    await new Promise(resolve => setTimeout(resolve, duration * 1000));
  }

  setTimeout(() => {
    runner.classList.add("hidden");
    showResultScreen(headPhoneFruit, resultCategory);
  }, 300);
}

function showResultScreen(fruit, category) {
  resultChara.src = `${BASE_URL}mini-${fruit.id}.png`;
  resultTitle.innerText = `今日のあなたは${fruit.name}！`;

  const possibleMsgs = messages[category.id];
  const randomMsg = possibleMsgs[Math.floor(Math.random() * possibleMsgs.length)];

  resultMainText.innerText = randomMsg.main;
  resultSubText.innerText = randomMsg.sub;

  currentShareText = `今日の運勢あみだくじ！\n結果は【${category.text}】の${fruit.name}でした🎧✨\n\n「${randomMsg.main}」\n${randomMsg.sub}\n\n👇みんなもここで遊んでみてね！\nhttps://codepen.io/nanakav/full/019fb176-45a9-79b4-a3d1-f00305d6b905`;
  
  gameScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
}

resetBtn.onclick = initGame;
if (shareBtn) {
  shareBtn.onclick = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(currentShareText)}`;
    window.open(url, '_blank');
  };
}

initGame();
