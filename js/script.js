const nav = document.querySelector("nav");
const navItem = document.querySelector(".nav-item");
const navMenu = document.querySelector(".nav-menu");
const span1 = navMenu.querySelector("span:first-child");
const span2 = navMenu.querySelector("span:nth-child(2)");
const span3 = navMenu.querySelector("span:last-child");
const aTags = navItem.querySelectorAll("a");

function removeClass() {
    navItem.classList.remove("active");
    span1.classList.remove("active");
    span2.classList.remove("active");
    span3.classList.remove("active");
}

function toggleClass() {
    navItem.classList.toggle("active");
    span1.classList.toggle("active");
    span2.classList.toggle("active");
    span3.classList.toggle("active");
}

aTags.forEach((a) => {
    a.addEventListener("click", () => {
        removeClass();
    });
});

navMenu.addEventListener("click", () => {
    toggleClass();
});

document.addEventListener("click", (e) => {
    if (e.target != navMenu && e.target != span1 && e.target != span2 && e.target != span3 && e.target != nav) {
        removeClass();
    }
});

const dataKopi = [
    {
        nama: "Americano",
        harga: 20_000,
        deskripsi:
            "Sebuah minuman kopi yang ringan dengan basis espresso dan air panas. Menghasilkan rasa kopi yang kuat namun tetap menyegarkan.",
        gambar: "americano.jpg",
    },
    {
        nama: "Latte",
        harga: 25_000,
        deskripsi:
            "Sebuah minuman kopi yang lembut dan kaya, terdiri dari satu atau dua shot espresso yang dicampur dengan susu steamed dan lapisan busa susu di atasnya.",
        gambar: "latte.jpg",
    },
    {
        nama: "Espresso",
        harga: 15_000,
        deskripsi: "Shot kopi kecil yang kuat dan pekat. Merupakan dasar untuk sebagian besar minuman kopi lainnya.",
        gambar: "espresso.jpg",
    },
    {
        nama: "Cappuccino",
        harga: 25_000,
        deskripsi:
            "Campuran sempurna antara espresso, susu steamed, dan busa susu. Menghasilkan minuman kopi yang kreamy dengan rasa kopi yang kaya.",
        gambar: "cappuccino.jpg",
    },
    {
        nama: "Macchiato",
        harga: 18_000,
        deskripsi: "Espresso dengan sejumlah kecil busa susu, memberikan sentuhan manis dan lembut pada kekuatan kopi.",
        gambar: "macchiato.jpg",
    },
    {
        nama: "Flat White",
        harga: 22_000,
        deskripsi:
            "Campuran espresso dan susu steamed dalam proporsi yang seimbang, menciptakan minuman kopi yang lembut dengan rasa kopi yang tetap menonjol.",
        gambar: "flat-white.jpg",
    },
];

const productContainer = document.querySelector(".product-container");

dataKopi.forEach((kopi) => {
    const productItem = document.createElement("div");
    const imgProductItem = document.createElement("img");
    const spanProductItem = document.createElement("span");
    const btnProductItem = document.createElement("button");

    productItem.classList.add("product-item");
    imgProductItem.setAttribute("src", `imgs/${kopi["gambar"]}`);
    spanProductItem.innerHTML = kopi["nama"];
    btnProductItem.innerHTML = "Detail";

    productItem.append(imgProductItem);
    productItem.append(spanProductItem);
    productItem.append(btnProductItem);
    productContainer.append(productItem);
});

const buttonDetails = document.querySelectorAll(".product-item button");
const overlay = document.querySelector(".overlay");
const gambar = overlay.querySelector(".detail-produk .left img");
const namaKopi = overlay.querySelector(".nama-kopi");
const deskripsi = overlay.querySelector(".deskripsi");
const harga = overlay.querySelector(".harga");
const buttonClose = overlay.querySelector("button");

buttonDetails.forEach((button, index) => {
    button.addEventListener("click", () => {
        overlay.style.display = "flex";
        overlay.style.animation = "500ms fadeInDown forwards";
        namaKopi.innerHTML = dataKopi[index]["nama"];
        deskripsi.innerHTML = dataKopi[index]["deskripsi"];
        harga.innerHTML = "Rp. " + dataKopi[index]["harga"];
        gambar.src = "imgs/" + dataKopi[index]["gambar"];
    });
});

buttonClose.addEventListener("click", () => {
    overlay.style.animation = "500ms fadeOutUp forwards";
    setTimeout(() => {
        overlay.style.display = "none";
    }, 500);
});
