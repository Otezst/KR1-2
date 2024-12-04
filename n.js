// Массив с информацией о товарах
const products = [
    { id: 1, name: "Кобура", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxJViLg4OBqYl_wJMEf2h8RJQ0D_NZTB4ucw&s", price: 500 },
    { id: 2, name: "Подсумки", image: "https://images.allmulticam.ru/r/kxltQDEsemw/rs:fit:400:0:1/plain/images/products/1/5640/624842248/large_%D0%A1%D1%80%D0%B5%D0%B4%D0%BD%D0%B8%D0%B9_%D1%83%D1%82%D0%B8%D0%BB%D0%B8%D1%82%D0%B0%D1%80%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BE%D0%B4%D1%81%D1%83%D0%BC%D0%BE%D0%BA_5.45_DESIGN__1_.jpg@jpg", price: 700 },
    { id: 3, name: "Брелки", image: "https://ae04.alicdn.com/kf/Sab2f864ca06d45f18bf5c6b972e556dfD.jpg_480x480.jpg", price: 300 },
    { id: 4, name: "Перчатки", image: "https://xn--b1acfnjxoe.xn--p1ai/wp-content/uploads/2022/05/img_3539-scaled.jpg", price: 850 },
    { id: 5, name: "Очки Тактические", image: "https://ratniksafe.ru/image/cache/data/photo/jjjj/ess_1-364x364.jpg", price: 1000 },
    { id: 6, name: "Палатка", image: "https://sp-snab.ru/image/catalog/apm3.jpg", price: 70000 },
];

// Контейнер для товаров
const container = document.getElementById("productContainer");

// Добавление товаров
products.forEach(product => {
    const productHTML = `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Цена: ${product.price} руб.</p>
                <input type="number" placeholder="0" min="0">
            </div>
        </div>
    `;
    container.innerHTML += productHTML;
});

// Обработчик для кнопки
document.getElementById("addToCart").addEventListener("click", () => {
    // Переход на сайт (например, сайт для оформления заказа или корзины)
    window.location.href = "https://www.bing.com/?cc=ru"; // Замените на ссылку вашего сайта
});
