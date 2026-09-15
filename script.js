// ==========================================
// 🎀 ななかのあみだくじ
// ==========================================

// GitHub Pagesと同じ場所にある画像を読み込む
const BASE_URL = "./";

const BG_IMAGE_NAME = "amida-lines-1.png";


// ==========================================
// 🎧 13種類のキャラクター
// ==========================================

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


// ==========================================
// 🏁 ゴールの種類
// ==========================================

const resultCategories = [
  { text: "超あたり", id: "cho_atari" },
  { text: "大当たり", id: "ooatari" },
  { text: "あたり", id: "atari" },
  { text: "はずれ", id: "hazure" },
  { text: "大はずれ", id: "dai_hazure" }
];


// ==========================================
// 💬 35種類の五七五セリフ集
// ==========================================

const messages = {

  cho_atari: [
    {
      main: "超あたり！",
      sub: "無敵の笑顔、スペシャルななか"
    },
    {
      main: "最高だ！",
      sub: "奇跡を起こす、ミラクルななか"
    },
    {
      main: "すっごーい！",
      sub: "テンション最高、ウルトラななか"
    },
    {
      main: "やったねー！",
      sub: "幸運運ぶ、えんじぇるななか"
    },
    {
      main: "神引きだ！",
      sub: "みんなを照らす、シャイニーななか"
    },
    {
      main: "おめでとう！",
      sub: "今日も全開、パーフェクトななか"
    },
    {
      main: "超はっぴー！",
      sub: "運命感じる、ロマンチックななか"
    }
  ],

  ooatari: [
    {
      main: "大当たり！",
      sub: "今日も一緒に、スペシャルななか"
    },
    {
      main: "大勝利！",
      sub: "今日も明日も、ずっと無敵ななか"
    },
    {
      main: "イエイイエイ！",
      sub: "ルンルン気分の、ハッピーななか"
    },
    {
      main: "さすがだね！",
      sub: "頼りになるよ、ジーニアスななか"
    },
    {
      main: "いいかんじ！",
      sub: "笑顔がキラリ、アイドルななか"
    },
    {
      main: "ツイてるね！",
      sub: "ご機嫌ナナメな、わけがないななか"
    },
    {
      main: "わぁーい！",
      sub: "お祝いしよっか、フェスティバルななか"
    }
  ],

  atari: [
    {
      main: "やったじゃん！",
      sub: "今日も幸運、スーパーななか"
    },
    {
      main: "よかったね！",
      sub: "のんびりいこう、マイペースななか"
    },
    {
      main: "ナイスだよ！",
      sub: "いつも元気に、スマイルななか"
    },
    {
      main: "いいじゃんね！",
      sub: "今日はまったり、リラックスななか"
    },
    {
      main: "やったあー！",
      sub: "おやつを食べよう、食いしん坊ななか"
    },
    {
      main: "フフフのフ！",
      sub: "ちょっとドヤ顔、得意げななか"
    },
    {
      main: "ラッキーだ！",
      sub: "こっそり応援、チアガールななか"
    }
  ],

  hazure: [
    {
      main: "はずれてない！笑",
      sub: "今日も一緒に、大好きななか"
    },
    {
      main: "大丈夫！",
      sub: "わたしがついてる、とってもななか"
    },
    {
      main: "どんまいっ！",
      sub: "明日があるさ、ポジティブななか"
    },
    {
      main: "およよよよ？",
      sub: "ちょっぴりドジっ子、てへぺろななか"
    },
    {
      main: "気にしない！",
      sub: "一緒に笑おう、スマイリーななか"
    },
    {
      main: "あれれれれ？",
      sub: "迷子になっても、たくましいななか"
    },
    {
      main: "ざんねーん！",
      sub: "でもでも心は、大吉ななか"
    }
  ],

  dai_hazure: [
    {
      main: "任せとけ！",
      sub: "今日もあたしは、ポンコツななか"
    },
    {
      main: "大はずれ！？",
      sub: "むしろおいしい、芸人ななか"
    },
    {
      main: "うっそーん！",
      sub: "涙はポイッだ、強がりななか"
    },
    {
      main: "ぴえんだよ…",
      sub: "ヨシヨシしてね、甘えん坊ななか"
    },
    {
      main: "マジですか…",
      sub: "逆に運命、ミラクルななか"
    },
    {
      main: "大ピンチ！？",
      sub: "ここから逆転、ヒーローななか"
    },
    {
      main: "やっちまった！",
      sub: "これもご愛嬌、キュートななか"
    }
  ]
};


// ==========================================
// 🪜 あみだくじの横線
// ==========================================

const bridges = [

  { y: 0.27, line: 3 },
  { y: 0.28, line: 0 },
  { y: 0.35, line: 2 },
  { y: 0.39, line: 3 },
  { y: 0.41, line: 1 },
  { y: 0.48, line: 2 },
  { y: 0.51, line: 0 },
  { y: 0.52, line: 3 },
  { y: 0.55, line: 1 },
  { y: 0.59, line: 2 },
  { y: 0.62, line: 1 },
  { y: 0.67, line: 3 }

].sort((a, b) => a.y - b.y);


// ==========================================
// 🎮 ゲーム状態
// ==========================================

let currentTopFruits = [];
let currentGoals = [];
let isPlaying = false;


// ==========================================
// 🔎 HTML要素取得
// ==========================================

const gameScreen =
  document.getElementById("game-screen");

const resultScreen =
  document.getElementById("result-screen");

const startContainer =
  document.getElementById("start-node-container");

const goalContainer =
  document.getElementById("goal-node-container");

const bgLineImg =
  document.getElementById("bg-line-img");

const resultChara =
  document.getElementById("result-chara-img");

const resultTitle =
  document.getElementById("result-title");

const resultMainText =
  document.getElementById("result-main-text");

const resultSubText =
  document.getElementById("result-sub-text");

const resetBtn =
  document.getElementById("reset-btn");

const shareBtn =
  document.getElementById("share-btn");

const linesWrapper =
  document.getElementById("lines-wrapper");


// ==========================================
// 🎮 ゲーム初期化
// ==========================================

function initGame() {

  isPlaying = false;

  gameScreen.classList.remove("hidden");
  resultScreen.classList.add("hidden");

  startContainer.innerHTML = "";
  goalContainer.innerHTML = "";

  bgLineImg.src =
    BASE_URL + BG_IMAGE_NAME;


  // キャラクターをランダムに5種類選ぶ

  const shuffledTop =
    [...allFruits].sort(
      () => 0.5 - Math.random()
    );

  currentTopFruits =
    shuffledTop.slice(0, 5);


  // ゴールをランダムに並び替える

  currentGoals =
    [...resultCategories].sort(
      () => 0.5 - Math.random()
    );


  // ========================================
  // 🎧 スタートキャラクター
  // ========================================

  currentTopFruits.forEach(
    (fruit, index) => {

      const startNode =
        document.createElement("div");

      startNode.className =
        "node-item";

      startNode.id =
        `start-${index}`;


      startNode.innerHTML = `
        <img
          src="${BASE_URL}headphone-${fruit.id}.png"
          alt="ヘッドホン"
        >
      `;


      startNode.onclick =
        () => startAmidaAnimation(index);


      startContainer.appendChild(
        startNode
      );
    }
  );


  // ========================================
  // 🏁 ゴール
  // ========================================

  currentGoals.forEach(
    (goal, index) => {

      const goalNode =
        document.createElement("div");

      goalNode.className =
        "goal-text-box";

      goalNode.id =
        `goal-${index}`;

      goalNode.innerText =
        goal.text;

      goalContainer.appendChild(
        goalNode
      );
    }
  );
}


// ==========================================
// 🪜 あみだくじのルート計算
// ==========================================

function calculatePath(startIndex) {

  let currentLine =
    startIndex;

  const path = [
    {
      line: currentLine,
      y: 0.18
    }
  ];


  bridges.forEach(
    (bridge) => {

      // 右へ移動

      if (
        bridge.line === currentLine
      ) {

        path.push({
          line: currentLine,
          y: bridge.y
        });

        currentLine++;

        path.push({
          line: currentLine,
          y: bridge.y
        });

      }

      // 左へ移動

      else if (
        bridge.line === currentLine - 1
      ) {

        path.push({
          line: currentLine,
          y: bridge.y
        });

        currentLine--;

        path.push({
          line: currentLine,
          y: bridge.y
        });
      }
    }
  );


  path.push({
    line: currentLine,
    y: 0.82
  });


  return {
    path,
    finalIndex: currentLine
  };
}


// ==========================================
// 🎬 あみだくじアニメーション
// ==========================================

async function startAmidaAnimation(
  startIndex
) {

  if (isPlaying) {
    return;
  }

  isPlaying = true;


  const {
    path,
    finalIndex
  } =
    calculatePath(startIndex);


  const headPhoneFruit =
    currentTopFruits[startIndex];


  const resultFruit =
    headPhoneFruit;


  const resultCategory =
    currentGoals[finalIndex];


  // ========================================
  // 🏃 移動キャラクター作成
  // ========================================

  let runner =
    document.getElementById("runner");


  if (!runner) {

    runner =
      document.createElement("div");

    runner.id =
      "runner";

    runner.className =
      "runner";

    linesWrapper.appendChild(
      runner
    );
  }


  runner.style.backgroundImage =
    `url(${BASE_URL}headphone-${headPhoneFruit.id}.png)`;


  runner.classList.remove(
    "hidden"
  );


  // ========================================
  // 📐 座標計算
  // ========================================

  const wrapperRect =
    linesWrapper.getBoundingClientRect();


  const startNodes =
    Array.from(
      startContainer.children
    );


  const lineXPositions =
    startNodes.map(
      (node) => {

        const rect =
          node.getBoundingClientRect();

        return (
          rect.left -
          wrapperRect.left +
          rect.width / 2 -
          22
        );
      }
    );


  const startX =
    lineXPositions[path[0].line];


  const startY =
    wrapperRect.height *
    path[0].y -
    22;


  runner.style.transition =
    "none";

  runner.style.left =
    `${startX}px`;

  runner.style.top =
    `${startY}px`;


  // ========================================
  // 🪜 ルートを移動
  // ========================================

  for (
    let i = 1;
    i < path.length;
    i++
  ) {

    await new Promise(
      (resolve) =>
        setTimeout(resolve, 20)
    );


    const targetX =
      lineXPositions[path[i].line];


    const targetY =
      wrapperRect.height *
      path[i].y -
      22;


    const isHorizontal =
      path[i].line !==
      path[i - 1].line;


    const duration =
      isHorizontal
        ? 0.5
        : 0.6;


    runner.style.transition =
      `top ${duration}s linear, left ${duration}s linear`;


    runner.style.left =
      `${targetX}px`;

    runner.style.top =
      `${targetY}px`;


    await new Promise(
      (resolve) =>
        setTimeout(
          resolve,
          duration * 1000
        )
    );
  }


  // ========================================
  // 🎁 結果表示
  // ========================================

  setTimeout(
    () => {

      runner.classList.add(
        "hidden"
      );

      showResultScreen(
        resultFruit,
        resultCategory
      );

    },
    300
  );
}


// ==========================================
// 🎁 結果画面
// ==========================================

function showResultScreen(
  fruit,
  category
) {

  resultChara.src =
    `${BASE_URL}mini-${fruit.id}.png`;


  resultTitle.innerText =
    `今日のあなたは${fruit.name}！`;


  const possibleMsgs =
    messages[category.id];


  const randomMsg =
    possibleMsgs[
      Math.floor(
        Math.random() *
        possibleMsgs.length
      )
    ];


  resultMainText.innerText =
    randomMsg.main;


  resultSubText.innerText =
    randomMsg.sub;


  gameScreen.classList.add(
    "hidden"
  );

  resultScreen.classList.remove(
    "hidden"
  );
}


// ==========================================
// 🔄 もう一度ひく
// ==========================================

resetBtn.onclick =
  initGame;


// ==========================================
// 🕊️ Xでシェア
// ==========================================

shareBtn.onclick =
  () => {

    const text =
      `${resultTitle.innerText}\n${resultMainText.innerText}\n${resultSubText.innerText}\n\n#ななかのあみだくじ`;

    const shareUrl =
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;

    window.open(
      shareUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };


// ==========================================
// 🚀 起動
// ==========================================

initGame();
