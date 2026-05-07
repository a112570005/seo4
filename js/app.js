// DOM Elements
const productGrid = document.getElementById('product-grid');
const productDetailContainer = document.getElementById('product-detail-content');

// Function to render a single product card
function createProductCard(product) {
    return `
        <a href="product.html?id=${product.id}" class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">NT$ ${product.price}</div>
                <div class="product-btn">查看詳情</div>
            </div>
        </a>
    `;
}

// Render products in the grid
function renderProducts(productsToRender) {
    if (!productGrid) return;
    
    if (productsToRender.length === 0) {
        productGrid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">暫無商品</p>';
        return;
    }

    productGrid.innerHTML = productsToRender.map(createProductCard).join('');
}

// Render product detail page
function renderProductDetail() {
    if (!productDetailContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (!productId) {
        productDetailContainer.innerHTML = '<div class="content-box"><h2 style="text-align: center;">找不到該商品。</h2></div>';
        return;
    }

    const product = getProductById(productId);
    
    if (!product) {
        productDetailContainer.innerHTML = '<div class="content-box"><h2 style="text-align: center;">商品不存在或已下架。</h2></div>';
        return;
    }

    productDetailContainer.innerHTML = `
        <div class="product-detail-container">
            <div class="product-detail-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-detail-info">
                <h1 class="product-detail-title">${product.name}</h1>
                <div class="product-detail-price">NT$ ${product.price}</div>
                <p class="product-detail-desc">${product.description}</p>
                <button class="btn" onclick="alert('已加入購物車！ (僅為展示)')">加入購物車</button>
            </div>
        </div>
    `;
    
    // Update document title
    document.title = `${product.name} | Cute Sea Otter Merch`;
}

// Initialize page based on its type
document.addEventListener('DOMContentLoaded', () => {
    // Determine which page we are on
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';

    if (page === 'index.html' || page === '') {
        renderProducts(getFeaturedProducts());
    } else if (page === 'casual.html') {
        renderProducts(getProductsByCategory('casual'));
    } else if (page === 'formal.html') {
        renderProducts(getProductsByCategory('formal'));
    } else if (page === 'jewelry.html') {
        renderProducts(getProductsByCategory('jewelry'));
    } else if (page === 'accessories.html') {
        renderProducts(getProductsByCategory('accessories'));
    } else if (page === 'others.html') {
        renderProducts(getProductsByCategory('others'));
    } else if (page === 'product.html') {
        renderProductDetail();
    }
});
