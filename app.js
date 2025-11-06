// Product Data with Real Images
const products = [
  {
    id: 1,
    name: "iPhone 17 Air",
    brand: "Apple",
    price: 79990,
    category: "Mobile Phones",
    rating: 4.5,
    reviews: 2340,
    specs: {
      processor: "A19 Bionic",
      ram: "8GB",
      storage: "128GB",
      camera: "12MP + 12MP",
      battery: "3000 mAh",
      display: "6.1 inch OLED"
    },
    description: "The thinnest iPhone ever with advanced AI features",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=500&fit=crop"
  },
  {
    id: 2,
    name: "iPhone 16",
    brand: "Apple",
    price: 72400,
    category: "Mobile Phones",
    rating: 4.4,
    reviews: 3120,
    specs: {
      processor: "A18 Bionic",
      ram: "8GB",
      storage: "128GB",
      camera: "48MP + 12MP",
      battery: "3561 mAh",
      display: "6.1 inch OLED"
    },
    description: "Powerful performance with advanced camera system",
    image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&h=500&fit=crop"
  },
  {
  id: 3,
  name: "iPhone 16 Pro",
  brand: "Apple",
  price: 110900,
  category: "Mobile Phones",
  rating: 4.7,
  reviews: 2890,
  specs: { /* ... */ },
  description: "Professional-grade features for creators and professionals",
  image: "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/v/2/w/-original-imahggesubmyd2ht.jpeg?q=90"
},
  {
    id: 4,
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    price: 133900,
    category: "Mobile Phones",
    rating: 4.8,
    reviews: 2110,
    specs: {
      processor: "A18 Pro Bionic",
      ram: "8GB",
      storage: "256GB",
      camera: "48MP + 48MP + 12MP",
      battery: "4685 mAh",
      display: "6.9 inch ProMotion OLED"
    },
    description: "Ultimate flagship with the largest display",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZVTcHa4jezwfnSDZNrcPUzeALWP4WyYZV4g&s"
  },
  {
    id: 5,
    name: "Galaxy F36 5G",
    brand: "Samsung",
    price: 17499,
    category: "Mobile Phones",
    rating: 4.2,
    reviews: 1850,
    specs: {
      processor: "Exynos 1380",
      ram: "6GB",
      storage: "128GB",
      camera: "50MP + 8MP + 2MP",
      battery: "5000 mAh",
      display: "6.7 inch AMOLED"
    },
    description: "Affordable 5G smartphone with great performance",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=500&fit=crop"
  },
  {
    id: 6,
    name: "Galaxy M35 5G",
    brand: "Samsung",
    price: 14460,
    category: "Mobile Phones",
    rating: 4.1,
    reviews: 1620,
    specs: {
      processor: "Exynos 1380",
      ram: "6GB",
      storage: "128GB",
      camera: "50MP + 8MP + 2MP",
      battery: "6000 mAh",
      display: "6.6 inch AMOLED"
    },
    description: "Long battery life and powerful performance",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=500&fit=crop"
  },
  {
    id: 7,
    name: "Galaxy S24 FE 5G",
    brand: "Samsung",
    price: 36790,
    category: "Mobile Phones",
    rating: 4.3,
    reviews: 2340,
    specs: {
      processor: "Exynos 2400e",
      ram: "8GB",
      storage: "128GB",
      camera: "50MP + 12MP + 8MP",
      battery: "4700 mAh",
      display: "6.7 inch AMOLED"
    },
    description: "Mid-range flagship with premium features",
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=500&fit=crop"
  },
  {
    id: 8,
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    price: 82829,
    category: "Mobile Phones",
    rating: 4.6,
    reviews: 3100,
    specs: {
      processor: "Snapdragon 8 Gen3",
      ram: "12GB",
      storage: "256GB",
      camera: "200MP + Quad Rear",
      battery: "5000 mAh",
      display: "6.8 inch AMOLED"
    },
    description: "Ultra-premium smartphone for power users",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=500&fit=crop"
  },
  {
    id: 9,
    name: "Galaxy S25 Ultra",
    brand: "Samsung",
    price: 109990,
    category: "Mobile Phones",
    rating: 4.7,
    reviews: 1450,
    specs: {
      processor: "Snapdragon 8 Elite",
      ram: "12GB",
      storage: "256GB",
      camera: "200MP + Quad Rear",
      battery: "5000 mAh",
      display: "6.9 inch AMOLED"
    },
    description: "Latest flagship with next-gen performance",
    image: "https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?w=400&h=500&fit=crop"
  },
  {
    id: 10,
    name: "iPad 11th Gen",
    brand: "Apple",
    price: 31990,
    category: "Tablets",
    rating: 4.5,
    reviews: 1920,
    specs: {
      processor: "A16 Bionic",
      ram: "6GB",
      storage: "128GB",
      camera: "12MP Rear",
      battery: "7819 mAh",
      display: "11 inch Liquid Retina"
    },
    description: "Versatile tablet for work and entertainment",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=500&fit=crop"
  },
  {
    id: 11,
    name: "Galaxy Tab S9 FE",
    brand: "Samsung",
    price: 34999,
    category: "Tablets",
    rating: 4.4,
    reviews: 1680,
    specs: {
      processor: "Exynos 1380",
      ram: "6GB",
      storage: "128GB",
      camera: "8MP Rear",
      battery: "8000 mAh",
      display: "10.9 inch AMOLED"
    },
    description: "Budget-friendly tablet with great display",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=500&fit=crop"
  },
  {
  id: 12,
  name: "Redmi Pad Pro 5G",
  brand: "Xiaomi",
  price: 25399,
  category: "Tablets",
  rating: 4.3,
  reviews: 1450,
  specs: { /* ... */ },
  description: "Affordable flagship tablet with 5G connectivity",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLuNAQswwhY0rcjf1UzIyH-R8tNKqqEkjvWQ&s"
},
  {
    id: 13,
    name: "OnePlus Pad",
    brand: "OnePlus",
    price: 45990,
    category: "Tablets",
    rating: 4.6,
    reviews: 1240,
    specs: {
      processor: "Snapdragon 8 Elite",
      ram: "12GB",
      storage: "256GB",
      camera: "13MP Rear",
      battery: "12140 mAh",
      display: "13.2 inch 144Hz"
    },
    description: "High-performance tablet with 144Hz display",
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=500&fit=crop"
  }
];


// Cart state (in-memory only, no localStorage)
let cart = [];
let currentPage = 'home';
let previousPage = 'home';
let selectedProduct = null;
let orderDetails = null;


// Initialize app
function init() {
  loadFeaturedProducts();
  loadMobilePhones();
  loadTablets();
  updateCartCount();
  setupEventListeners();
}


// Event Listeners
function setupEventListeners() {
  // Navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = e.currentTarget.dataset.page;
      navigateToPage(page);
    });
  });


  // Mobile menu
  document.getElementById('mobileMenuBtn').addEventListener('click', () => {
    document.getElementById('mainNav').classList.toggle('active');
  });


  // Filters
  document.getElementById('brandFilter').addEventListener('change', () => {
    loadMobilePhones();
  });


  document.getElementById('sortFilter').addEventListener('change', () => {
    loadMobilePhones();
  });


  document.getElementById('tabletBrandFilter').addEventListener('change', () => {
    loadTablets();
  });


  document.getElementById('tabletSortFilter').addEventListener('change', () => {
    loadTablets();
  });


  // Checkout form
  document.getElementById('shippingMethod').addEventListener('change', () => {
    updateCheckoutSummary();
  });
}


// Navigation
function navigateToPage(page) {
  previousPage = currentPage;
  currentPage = page;


  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));


  // Show selected page
  const pageElement = document.getElementById(page + 'Page');
  if (pageElement) {
    pageElement.classList.add('active');
  }


  // Update nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.page === page) {
      link.classList.add('active');
    }
  });


  // Close mobile menu
  document.getElementById('mainNav').classList.remove('active');


  // Load page content
  if (page === 'cart') {
    loadCart();
  } else if (page === 'checkout') {
    loadCheckout();
  }


  // Scroll to top
  window.scrollTo(0, 0);
}


function goBack() {
  navigateToPage(previousPage);
}


// Product Display
function createProductCard(product) {
  const stars = '⭐'.repeat(Math.floor(product.rating));
  return `
    <div class="product-card" onclick="showProductDetail(${product.id})">
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-info">
        <div class="product-brand">${product.brand}</div>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price">₹${product.price.toLocaleString()}</div>
        <div class="product-rating">
          <span>${stars}</span>
          <span>(${product.reviews} reviews)</span>
        </div>
      </div>
    </div>
  `;
}


function loadFeaturedProducts() {
  const featured = products.slice(0, 6);
  const container = document.getElementById('featuredProducts');
  container.innerHTML = featured.map(p => createProductCard(p)).join('');
}


function loadMobilePhones() {
  const brandFilter = document.getElementById('brandFilter').value;
  const sortFilter = document.getElementById('sortFilter').value;


  let filtered = products.filter(p => p.category === 'Mobile Phones');


  if (brandFilter !== 'all') {
    filtered = filtered.filter(p => p.brand === brandFilter);
  }


  filtered = sortProducts(filtered, sortFilter);


  const container = document.getElementById('mobileProductsGrid');
  if (filtered.length === 0) {
    container.innerHTML = '<p>No products found.</p>';
  } else {
    container.innerHTML = filtered.map(p => createProductCard(p)).join('');
  }
}


function loadTablets() {
  const brandFilter = document.getElementById('tabletBrandFilter').value;
  const sortFilter = document.getElementById('tabletSortFilter').value;


  let filtered = products.filter(p => p.category === 'Tablets');


  if (brandFilter !== 'all') {
    filtered = filtered.filter(p => p.brand === brandFilter);
  }


  filtered = sortProducts(filtered, sortFilter);


  const container = document.getElementById('tabletProductsGrid');
  if (filtered.length === 0) {
    container.innerHTML = '<p>No products found.</p>';
  } else {
    container.innerHTML = filtered.map(p => createProductCard(p)).join('');
  }
}


function sortProducts(products, sortType) {
  const sorted = [...products];


  switch(sortType) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    default:
      return sorted;
  }
}


// Product Detail
function showProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;


  selectedProduct = product;
  const stars = '⭐'.repeat(Math.floor(product.rating));


  const content = `
    <div class="product-detail">
      <div>
        <img src="${product.image}" alt="${product.name}" class="product-detail-image">
      </div>
      <div class="product-detail-info">
        <div class="product-brand">${product.brand}</div>
        <h1>${product.name}</h1>
        <div class="product-rating">
          <span>${stars}</span>
          <span>${product.rating} (${product.reviews} reviews)</span>
        </div>
        <div class="product-price" style="margin: 20px 0;">₹${product.price.toLocaleString()}</div>
        <p>${product.description}</p>
        
        <h3 style="margin-top: 24px;">Specifications</h3>
        <div class="specs-table">
          ${Object.entries(product.specs).map(([key, value]) => `
            <div class="spec-row">
              <div class="spec-label">${key.charAt(0).toUpperCase() + key.slice(1)}</div>
              <div class="spec-value">${value}</div>
            </div>
          `).join('')}
        </div>


        <div class="quantity-selector">
          <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
          <span class="quantity-display" id="quantityDisplay">1</span>
          <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
        </div>


        <button class="btn btn--primary btn--lg btn--full-width" onclick="addToCart()">
          Add to Cart
        </button>
      </div>
    </div>
  `;


  document.getElementById('productDetailContent').innerHTML = content;
  navigateToPage('productDetail');
}


let quantity = 1;


function changeQuantity(delta) {
  quantity = Math.max(1, quantity + delta);
  document.getElementById('quantityDisplay').textContent = quantity;
}


function addToCart() {
  if (!selectedProduct) return;


  const existingItem = cart.find(item => item.product.id === selectedProduct.id);


  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      product: selectedProduct,
      quantity: quantity
    });
  }


  updateCartCount();
  quantity = 1;
  alert('Product added to cart!');
}


function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelector('.cart-count').textContent = count;
}


// Cart
function loadCart() {
  const container = document.getElementById('cartContent');


  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <p>Your cart is empty</p>
        <button class="btn btn--primary" onclick="navigateToPage('home')">Continue Shopping</button>
      </div>
    `;
    return;
  }


  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const tax = subtotal * 0.18;
  const total = subtotal + tax;


  container.innerHTML = `
    <div class="cart-items">
      ${cart.map((item, index) => `
        <div class="cart-item">
          <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-image">
          <div class="cart-item-info">
            <h3>${item.product.name}</h3>
            <p>${item.product.brand}</p>
            <p class="product-price">₹${item.product.price.toLocaleString()}</p>
          </div>
          <div class="cart-item-actions">
            <div class="quantity-selector">
              <button class="quantity-btn" onclick="updateCartQuantity(${index}, -1)">-</button>
              <span class="quantity-display">${item.quantity}</span>
              <button class="quantity-btn" onclick="updateCartQuantity(${index}, 1)">+</button>
            </div>
            <button class="btn btn--secondary" onclick="removeFromCart(${index})">
              Remove
            </button>
          </div>
        </div>
      `).join('')}
    </div>


    <div class="cart-summary">
      <h3>Order Summary</h3>
      <div class="summary-row">
        <span>Subtotal</span>
        <span>₹${subtotal.toLocaleString()}</span>
      </div>
      <div class="summary-row">
        <span>Tax (18%)</span>
        <span>₹${tax.toLocaleString()}</span>
      </div>
      <div class="summary-row">
        <span>Total</span>
        <span>₹${total.toLocaleString()}</span>
      </div>
      <button class="btn btn--primary btn--full-width" onclick="navigateToPage('checkout')">
        Proceed to Checkout
      </button>
    </div>
  `;
}


function updateCartQuantity(index, delta) {
  cart[index].quantity = Math.max(1, cart[index].quantity + delta);
  updateCartCount();
  loadCart();
}


function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount();
  loadCart();
}


// Checkout
function loadCheckout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    navigateToPage('home');
    return;
  }


  updateCheckoutSummary();
}


function updateCheckoutSummary() {
  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const tax = subtotal * 0.18;
  
  const shippingMethod = document.getElementById('shippingMethod').value;
  let shippingCost = 0;
  if (shippingMethod === 'express') shippingCost = 200;
  if (shippingMethod === 'next-day') shippingCost = 500;
  
  const total = subtotal + tax + shippingCost;


  const container = document.getElementById('checkoutSummary');
  container.innerHTML = `
    ${cart.map(item => `
      <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
        <span>${item.product.name} (x${item.quantity})</span>
        <span>₹${(item.product.price * item.quantity).toLocaleString()}</span>
      </div>
    `).join('')}
    <hr style="margin: 16px 0; border: none; border-top: 1px solid var(--color-card-border);">
    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
      <span>Subtotal</span>
      <span>₹${subtotal.toLocaleString()}</span>
    </div>
    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
      <span>Tax (18%)</span>
      <span>₹${tax.toLocaleString()}</span>
    </div>
    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
      <span>Shipping</span>
      <span>₹${shippingCost.toLocaleString()}</span>
    </div>
    <hr style="margin: 16px 0; border: none; border-top: 1px solid var(--color-card-border);">
    <div style="display: flex; justify-content: space-between; font-size: 18px; font-weight: 600;">
      <span>Total</span>
      <span>₹${total.toLocaleString()}</span>
    </div>
  `;
}


function proceedToPayment() {
  const form = document.getElementById('checkoutForm');
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }


  const paymentMethod = document.getElementById('paymentMethod').value;
  showPaymentModal(paymentMethod);
}


function showPaymentModal(method) {
  const modal = document.getElementById('paymentModal');
  const title = document.getElementById('paymentModalTitle');
  const body = document.getElementById('paymentModalBody');


  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const tax = subtotal * 0.18;
  const shippingMethod = document.getElementById('shippingMethod').value;
  let shippingCost = 0;
  if (shippingMethod === 'express') shippingCost = 200;
  if (shippingMethod === 'next-day') shippingCost = 500;
  const total = subtotal + tax + shippingCost;


  if (method === 'stripe') {
    title.textContent = 'Stripe Test Mode';
    body.innerHTML = `
      <div class="payment-form">
        <p style="color: var(--color-warning); margin-bottom: 16px;">
          ⚠️ Test Mode - Use card: 4242 4242 4242 4242
        </p>
        <div class="form-group">
          <label class="form-label">Card Number</label>
          <input type="text" class="form-control" value="4242 4242 4242 4242" readonly>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div class="form-group">
            <label class="form-label">Expiry Date</label>
            <input type="text" class="form-control" placeholder="MM/YY" value="12/25">
          </div>
          <div class="form-group">
            <label class="form-label">CVV</label>
            <input type="text" class="form-control" placeholder="123" value="123">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Cardholder Name</label>
          <input type="text" class="form-control" placeholder="John Doe">
        </div>
        <p style="font-size: 18px; font-weight: 600; margin: 16px 0;">
          Total: ₹${total.toLocaleString()}
        </p>
        <button class="btn btn--primary btn--full-width" onclick="processPayment()">
          Pay Now
        </button>
      </div>
    `;
  } else if (method === 'paypal') {
    title.textContent = 'PayPal Sandbox';
    body.innerHTML = `
      <div class="payment-form">
        <p style="color: var(--color-warning); margin-bottom: 16px;">
          ⚠️ Sandbox Mode - Test Payment
        </p>
        <div style="text-align: center; padding: 40px 0;">
          <div style="font-size: 48px; margin-bottom: 16px;">💳</div>
          <p style="margin-bottom: 24px;">You will be redirected to PayPal Sandbox</p>
          <p style="font-size: 18px; font-weight: 600; margin-bottom: 24px;">
            Total: ₹${total.toLocaleString()}
          </p>
          <button class="btn btn--primary btn--lg" onclick="processPayment()">
            Continue to PayPal
          </button>
        </div>
      </div>
    `;
  } else if (method === 'razorpay') {
    title.textContent = 'Razorpay Test Mode';
    body.innerHTML = `
      <div class="payment-form">
        <p style="color: var(--color-warning); margin-bottom: 16px;">
          ⚠️ Test Mode - Razorpay Sandbox
        </p>
        <div style="text-align: center; padding: 20px 0;">
          <div style="font-size: 48px; margin-bottom: 16px;">🔒</div>
          <p style="font-size: 24px; font-weight: 600; margin-bottom: 8px;">
            ₹${total.toLocaleString()}
          </p>
          <p style="color: var(--color-text-secondary); margin-bottom: 24px;">
            Secure payment via Razorpay
          </p>
          <div class="form-group">
            <label class="form-label">UPI ID / Card / Netbanking</label>
            <input type="text" class="form-control" placeholder="test@razorpay">
          </div>
          <button class="btn btn--primary btn--full-width" onclick="processPayment()">
            Pay ₹${total.toLocaleString()}
          </button>
        </div>
      </div>
    `;
  }


  modal.classList.add('active');
}


function closePaymentModal() {
  document.getElementById('paymentModal').classList.remove('active');
}


function processPayment() {
  closePaymentModal();


  // Simulate payment processing
  setTimeout(() => {
    completeOrder();
  }, 1000);
}


function completeOrder() {
  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const tax = subtotal * 0.18;
  const shippingMethod = document.getElementById('shippingMethod').value;
  let shippingCost = 0;
  if (shippingMethod === 'express') shippingCost = 200;
  if (shippingMethod === 'next-day') shippingCost = 500;
  const total = subtotal + tax + shippingCost;


  const orderNumber = 'TC' + Math.floor(Math.random() * 1000000);
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + (shippingMethod === 'next-day' ? 1 : shippingMethod === 'express' ? 3 : 7));


  orderDetails = {
    orderNumber,
    date: new Date().toLocaleDateString(),
    items: [...cart],
    customer: {
      name: document.getElementById('customerName').value,
      email: document.getElementById('customerEmail').value,
      phone: document.getElementById('customerPhone').value,
      address: document.getElementById('customerAddress').value
    },
    subtotal,
    tax,
    shipping: shippingCost,
    total,
    deliveryDate: deliveryDate.toLocaleDateString()
  };


  // Clear cart
  cart = [];
  updateCartCount();


  // Show confirmation
  showOrderConfirmation();
}


function showOrderConfirmation() {
  const content = document.getElementById('confirmationContent');


  content.innerHTML = `
    <div class="success-icon">✓</div>
    <h1>Order Placed Successfully!</h1>
    <p style="font-size: 18px; color: var(--color-text-secondary); margin-bottom: 24px;">
      Thank you for your purchase
    </p>


    <div class="order-details">
      <h3>Order Details</h3>
      <p><strong>Order Number:</strong> ${orderDetails.orderNumber}</p>
      <p><strong>Order Date:</strong> ${orderDetails.date}</p>
      <p><strong>Expected Delivery:</strong> ${orderDetails.deliveryDate}</p>
      
      <h4 style="margin-top: 24px;">Items Ordered:</h4>
      ${orderDetails.items.map(item => `
        <div style="display: flex; justify-content: space-between; margin: 8px 0;">
          <span>${item.product.name} (x${item.quantity})</span>
          <span>₹${(item.product.price * item.quantity).toLocaleString()}</span>
        </div>
      `).join('')}
      
      <hr style="margin: 16px 0; border: none; border-top: 1px solid var(--color-card-border);">
      
      <div style="display: flex; justify-content: space-between; margin: 8px 0;">
        <span>Subtotal</span>
        <span>₹${orderDetails.subtotal.toLocaleString()}</span>
      </div>
      <div style="display: flex; justify-content: space-between; margin: 8px 0;">
        <span>Tax</span>
        <span>₹${orderDetails.tax.toLocaleString()}</span>
      </div>
      <div style="display: flex; justify-content: space-between; margin: 8px 0;">
        <span>Shipping</span>
        <span>₹${orderDetails.shipping.toLocaleString()}</span>
      </div>
      <div style="display: flex; justify-content: space-between; margin-top: 16px; font-size: 18px; font-weight: 600;">
        <span>Total Paid</span>
        <span>₹${orderDetails.total.toLocaleString()}</span>
      </div>


      <h4 style="margin-top: 24px;">Delivery Address:</h4>
      <p>${orderDetails.customer.name}</p>
      <p>${orderDetails.customer.address}</p>
      <p>${orderDetails.customer.phone}</p>
      <p>${orderDetails.customer.email}</p>
    </div>


    <button class="btn btn--primary btn--lg" onclick="navigateToPage('home')">
      Continue Shopping
    </button>
  `;


  navigateToPage('confirmation');
}


// Initialize app when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
