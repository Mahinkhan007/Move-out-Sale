function createCard(title, description, price, status, imagePaths) {
  const carouselId = `carousel-${Math.random().toString(36).substr(2, 9)}`;

  const indicators = imagePaths
    .map(
      (_, index) =>
        `<button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="${index}" class="${
          index === 0 ? "active" : ""
        }" aria-current="${index === 0 ? "true" : "false"}" aria-label="Slide ${
          index + 1
        }"></button>`
    )
    .join("");

  const carouselItems = imagePaths
    .map(
      (imagePath, index) =>
        `<div class="carousel-item ${
          index === 0 ? "active" : ""
        }"><img src="${imagePath}" class="d-block w-100" alt="Image ${
          index + 1
        }"></div>`
    )
    .join("");

  return `
            <div class="col-md-4">
                <div class="card mb-3">
                    <div id="${carouselId}" class="carousel slide">
                        <div class="carousel-indicators">
                            ${indicators}
                        </div>
                        <div class="carousel-inner">
                            ${carouselItems}
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${description}</p>
                        <p class="card-text">Price: ${price}</p>
                        <p class="card-text"><small class="text-body-secondary">${status}</small></p>
                    </div>
                </div>
            </div>
        `;
}

function addCardsToContainer(containerId) {
  const cardContainer = document.getElementById(containerId);

  const cardData = [
    {
      title: "Gaming Table",
      description:
        "Strong and sturdy gaming/reading table. Kept very clean and no damaged section.",
      price: "RM 70",
      status: "Available",
      imagePaths: [
        "images/study table/IMG_1586.png",
        "images/study table/IMG_1583.png",
        "images/study table/IMG_1585.png",
        "images/study table/IMG_1588.png",
      ],
    },
    {
      title: "27in. ASUS TUF GAMING MONITOR",
      description:
        "27 inch IPS 2K 165hz 1ms HDR10 Gaming monitor with built in Speaker. Looks like brand new with not a single scratch on it.\n Shopee link- https://my.shp.ee/YFxHWZ5",
      price: "RM 700",
      status: "Available",
      imagePaths: [
        "images/monitor/IMG_1540.png",
        "images/monitor/IMG_1537.png",
        "images/monitor/IMG_1541.png",
        "images/monitor/IMG_1542.png",
      ],
    },
    {
      title: "Hyper X alloy Gaming Keyboard(Blue)",
      description:
        "[With box]Rarely used aircraft-grade aluminium body gaming keyboard. Shopee link- https://my.shp.ee/F9YeFpV",
      price: "RM 180",
      status: "Available",
      imagePaths: [
        "images/keyboard/IMG_1528.png",
        "images/keyboard/IMG_1532.png",
        "images/keyboard/IMG_1530.png",

        "images/keyboard/IMG_1527.png",
      ],
    },
    {
      title: "Hisense 43in 4K TV",
      description:
        "Scratch Free 43 inch TV with wall mount. Shoppe Link -https://my.shp.ee/HWWW2CH",
      price: "RM 650",
      status: "Available",
      imagePaths: [
        "images/tv/IMG_1648.png",
        "images/tv/IMG_1651.png",
        "images/tv/IMG_1647.png",

        "images/tv/IMG_1649.png",
      ],
    },
    {
      title: "TT Racing Swift X 2020 Gaming Chair",
      description:
        "Chair is in great shape, arms and chair itself are reclinable. No torn fabric or such. Official link-https://ttracing.my/products/ttracing-swift-x-2020-air-threads-fabric-gaming-chair",
      price: "RM 185",
      status: "Available",
      imagePaths: [
        "images/gaming chair/IMG_1652.png",
        "images/gaming chair/IMG_1656.png",
        "images/gaming chair/IMG_1657.png",
        "images/gaming chair/IMG_1654.png",
        "images/gaming chair/IMG_1655.png",
      ],
    },

    {
      title: "Metal Shelf/Storage",
      description: "Sturdy",
      price: "RM 18",
      status: "Available",
      imagePaths: ["images/shelf/IMG_1580.png"],
    },
    {
      title: "Inosuke Hasibara action figure",
      description: "8 inch 650 gram action figure",
      price: "RM 40",
      status: "Available",
      imagePaths: [
        "images/inosuke/IMG_1660.png",
        "images/inosuke/IMG_1659.png",
      ],
    },
    {
      title: "Very wide mirror👍",
      description: "Clean👍",
      price: "RM 25",
      status: "Available",
      imagePaths: ["images/wide mirror/IMG_1662.png"],
    },
    {
      title: "Very tall mirror👍",
      description: "No scratch👍, metal and heavy stand",
      price: "RM 38",
      status: "Available",
      imagePaths: ["images/tall mirror/IMG_1661.png"],
    },
    {
      title: "Tefal Rice Cooker",
      description:
        "Still under warranty but definitely lost the warranty card. Does its job well. Shopee link- https://my.shp.ee/bCB9T3S",
      price: "RM 65",
      status: "Available",
      imagePaths: [
        "images/rice cooker/IMG_1636.png",
        "images/rice cooker/IMG_1637.png",
      ],
    },
    {
      title: "Toshiba Microwave Oven",
      description:
        "Still under warranty but then AGAIN, lost the warranty card xD. Does its job great. Shopee link- https://my.shp.ee/LgERxea",
      price: "RM 115",
      status: "Available",
      imagePaths: ["images/oven/IMG_1638.png"],
    },
    {
      title: "Giant hypermall PVC Storage",
      description: "Lovely condition",
      price: "RM 25",
      status: "Available",
      imagePaths: [
        "images/storage/IMG_1632.png",
        " images/storage/IMG_1633.png",
        "images/storage/IMG_1634.png",
      ],
    },
    {
      title: "Gaming laptop cooling fan",
      description: "Barely used.",
      price: "RM 13",
      status: "Available",
      imagePaths: [
        "images/laptop fan/IMG_1533.png",
        "images/laptop fan/IMG_1534.png",
      ],
    },
    {
      title: "Huawei Wifi extender",
      description: "Very useful",
      price: "RM 30",
      status: "Available",
      imagePaths: ["images/extender/IMG_1658.png"],
    },
    {
      title: "Yonex pro badminton racket",
      description: "no scratch on the racket, although grip needs changing.",
      price: "RM 45",
      status: "Available",
      imagePaths: [
        "images/badminton/IMG_1663.png",
        "images/badminton/IMG_1664.png",
        "images/badminton/IMG_1665.png",
      ],
    },
  ];

  cardData.forEach((card) => {
    const cardHTML = createCard(
      card.title,
      card.description,
      card.price,
      card.status,
      card.imagePaths
    );
    cardContainer.innerHTML += cardHTML;
  });
}

window.onload = () => {
  addCardsToContainer("card-container");
};

document.querySelectorAll('img').forEach(img => {
  img.style.transform = 'rotate(0deg)';
});