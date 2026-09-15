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
