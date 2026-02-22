// Product Data
const products = [
    { id: 1, name: "Gaming Laptop", price: 85000, image: "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/thumbnail.png" },
    { id: 2, name: "Smartphone 5G", price: 29999, image: "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/thumbnail.png" },
    { id: 3, name: "Wireless Headphones", price: 2499, image: "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png" },
    { id: 4, name: "Mechanical Keyboard", price: 4500, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSOcgspgKe0ILDTpoHfyB3hlXD0JUt5aAs_EY1HRy9-QbbWVOqVLg3jYczHTLfMhsKy-7zHjKrDcJjQ5AxjzKqbgPc7MFCGjsXSTwg6jonVEkF7wXJ10m6uVQ" }, // Fallback to laptop acc
    { id: 5, name: "Gaming Mouse", price: 1299, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSGFDdNEQFdTCVoFlXEzCCsOOsO7K4ESmdYlE0MpRGLgUjjt4SUbfsODHta5WrPrJk_3X_nxuxSAnN0wZkWgCO0SNcror_aaGyahw327EQy_oIILNwlcKkX1y8" }, // Fallback
    { id: 6, name: "Smart Watch", price: 6999, image: "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/thumbnail.png" }, // Watch fallback
    { id: 7, name: "Tablet Pro", price: 45000, image: "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/thumbnail.png" },
    { id: 8, name: "Bluetooth Speaker", price: 1999, image: "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/thumbnail.png" },
    { id: 9, name: "4K Monitor", price: 32000, image: "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/thumbnail.png" }, // Monitor fallback
    { id: 10, name: "Laser Printer", price: 12500, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR16V8wVRw0uT5euo9d_o0uGmp6YONe5db9e2kxuDMn82VKeCvCaMpINrAHd2WtNIFAxK4N3WCLphuGb_yjkPHkh1qmVPtJ6QCXvcHeuLCDbNxQmbofA8d7tuU" },
    { id: 11, name: "DSLR Camera", price: 55000, image: "https://png.pngtree.com/png-vector/20240905/ourmid/pngtree-black-dslr-camera-with-large-lens-clipart-illustration-stock-photo-png-image_13758787.png" },
    { id: 12, name: "Power Bank 20000mAh", price: 1599, image: "https://media.istockphoto.com/id/1126642401/photo/power-bank-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=FMMhXxZql2guHigJvPDsi6S5Bp_QT6OsfZnD6kqcc3U=" },
    { id: 13, name: "Pen Drive 64GB", price: 699, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTPsx_QV6A_h-uqyhFC6WibO_X2Bg86K_WQbVGhAbvodV6lVywkUXA6FD_PzWlXmrV_aHLjwwPAp17umv0_nejCvmXgNQ2O7LIi4krI01EmstEU8jhdrqFTiSc" },
    { id: 14, name: "1TB External HDD", price: 4200, image: "https://5.imimg.com/data5/PX/FO/FF/SELLER-11200165/desktop-computer.jpg" },
    { id: 15, name: "WiFi Router", price: 2800, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiWvm1P2oFCdEK6ZDZh8NwpYmwzFQWq27G8w&s" },
    { id: 16, name: "Webcam HD", price: 3500, image: "https://www.jiomart.com/images/product/original/rv8jgyohwp/beebird-webcam-full-hd-web-camera-usb-pc-computer-webcam-with-microphone-laptop-desktop-full-hd-camera-video-webcam-110-degree-widescreen-pro-streaming-webcam-for-recording-calling-conferencing-gaming-product-images-orv8jgyohwp-p601985097-0-202305301117.jpg?im=Resize=(1000,1000)" },
    { id: 17, name: "USB Microphone", price: 5499, image: "https://m.media-amazon.com/images/I/51frr1QHyZL._AC_UF1000,1000_QL80_.jpg" },
    { id: 18, name: "Fast Charger", price: 999, image: "https://m.media-amazon.com/images/I/41xf3hBlxGL._AC_UF1000,1000_QL80_.jpg" },
    { id: 19, name: "VR Headset", price: 29999, image: "https://cdn.mos.cms.futurecdn.net/u5cggJUjzeNhRQnAo2bdtm.jpg" }, // Fallback
    { id: 20, name: "Game Controller", price: 3499, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT9Uv5pVfz-b3ornIW1GQgYcTCyRNWdnto4-12YNGOpbDaMEQtTJJIYTWND0gesRlGdpzccT4V5G75ZkN0bYcc8-qByebFS9TqEnavVDvi19hbm6ZV4jtel" }, // Fallback
];

// State
let cart = [];

// DOM Elements
const productList = document.getElementById("product-list");
const cartSidebar = document.getElementById("cart-sidebar");
const cartOverlay = document.getElementById("cart-overlay");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");
const cartCountElement = document.getElementById("cart-count");
const checkoutBtn = document.getElementById("checkout-btn");

const paymentModal = document.getElementById("payment-modal");
const paymentOverlay = document.getElementById("payment-overlay");
const modalTotalElement = document.getElementById("modal-total");
const paymentQrImg = document.getElementById("payment-qr");

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
});

// Render Products
function renderProducts() {
    productList.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">₹${product.price.toLocaleString()}</p>
            <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join("");
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartUI();

    // Open cart to show user item was added
    if (!cartSidebar.classList.contains('active')) {
        toggleCart();
    }
}

// Remove from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// Update Cart UI
function updateCartUI() {
    // Update count
    cartCountElement.textContent = cart.length;

    // Update list
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Your cart is empty.</p>';
        checkoutBtn.disabled = true;
    } else {
        cartItemsContainer.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index})">🗑️</button>
            </div>
        `).join("");
        checkoutBtn.disabled = false;
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotalElement.textContent = total.toLocaleString();
    modalTotalElement.textContent = total.toLocaleString();

    // Update QR Code Amount
    // Using a dynamic QR code API to encode the UPI string with the specific amount
    const upiString = `upi://pay?pa=shop@upi&pn=TechHaven&am=${total}&cu=INR`;
    paymentQrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(upiString)}`;
}

// Toggle Cart Sidebar
function toggleCart() {
    cartSidebar.classList.toggle("active");
    cartOverlay.classList.toggle("active");
}

// Payment Modal
function openPaymentModal() {
    toggleCart(); // Close sidebar
    paymentModal.classList.add("active");
    paymentOverlay.classList.add("active");
}

function closePaymentModal() {
    paymentModal.classList.remove("active");
    paymentOverlay.classList.remove("active");
}

function processPayment() {
    // Simulate processing
    const btn = document.querySelector("#payment-modal .btn-primary");
    const originalText = btn.textContent;
    btn.textContent = "Processing...";
    btn.disabled = true;

    setTimeout(() => {
        alert("Payment Successful! Thank you for your order.");
        cart = [];
        updateCartUI();
        closePaymentModal();
        btn.textContent = originalText;
        btn.disabled = false;
    }, 2000);
}
