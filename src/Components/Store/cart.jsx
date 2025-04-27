const Cart = () => {
    function cart() {
        return {
          cartItems: [
            {
              name: "Laptop",
              model: "XPS 13",
              hsCode: "847130",
              quantity: 1,
              weight: 2.5,
              perPieceRate: 999.99,
              totalPrice: 999.99,
              color: "Silver",
              deliveryMethod: "Air",
              description: "A powerful and lightweight laptop with excellent performance.",
              isEditingDescription: false,
              originalDescription: "",
              showDescription: false,
              image: "https://via.placeholder.com/150"
            },
            {
              name: "Smartphone",
              model: "iPhone 14",
              hsCode: "851712",
              quantity: 2,
              weight: 0.5,
              perPieceRate: 799.99,
              totalPrice: 1599.98,
              color: "Black",
              deliveryMethod: "Ship",
              description: "The latest iPhone with advanced camera and processing power.",
              isEditingDescription: false,
              originalDescription: "",
              showDescription: false,
              image: "https://via.placeholder.com/150"
            }
          ],
          shippingMethod: "standard",
          promoCode: "",
          promoMessage: "",
          promoValid: false,
          discount: 0,
          
          removeItem(index) {
            if (alert('Are you sure you want to remove this item?')==true) {
              this.cartItems.splice(index, 1);
            }
          },
          
          clearCart() {
            if (alert('Are you sure you want to clear your cart?')==true) {
              this.cartItems = [];
            }
          },
          
          incrementQuantity(index) {
            this.cartItems[index].quantity++;
            this.updateTotalPrice(index);
          },
          
          decrementQuantity(index) {
            if (this.cartItems[index].quantity > 1) {
              this.cartItems[index].quantity--;
              this.updateTotalPrice(index);
            }
          },
          
          updateTotalPrice(index) {
            const item = this.cartItems[index];
            item.totalPrice = item.perPieceRate * item.quantity;
          },
          
          toggleDescription(index) {
            this.cartItems[index].showDescription = !this.cartItems[index].showDescription;
          },
          
          startEditingDescription(index) {
            this.cartItems[index].originalDescription = this.cartItems[index].description;
            this.cartItems[index].isEditingDescription = true;
          },
          
          saveDescription(index) {
            this.cartItems[index].isEditingDescription = false;
            // Here you could add code to save to backend if needed
            console.log(`Description updated for ${this.cartItems[index].name}`);
          },
          
          cancelEditingDescription(index) {
            this.cartItems[index].description = this.cartItems[index].originalDescription;
            this.cartItems[index].isEditingDescription = false;
          },
          
          getColorHex(color) {
            const colorMap = {
              'Black': '#000000',
              'Silver': '#C0C0C0',
              'Blue': '#0047AB',
              'Red': '#FF0000',
              'White': '#FFFFFF'
            };
            return colorMap[color] || '#000000';
          },
          
          applyPromoCode() {
            // Example promo codes
            const promoCodes = {
              'SAVE10': { discount: 0.1, message: '10% discount applied!' },
              'FREESHIP': { discount: 0, message: 'Free shipping applied!', freeShipping: true },
              'WELCOME20': { discount: 0.2, message: '20% discount applied!' }
            };
            
            if (this.promoCode.trim() === '') {
              this.promoMessage = 'Please enter a promo code';
              this.promoValid = false;
              return;
            }
            
            const promo = promoCodes[this.promoCode.toUpperCase()];
            if (promo) {
              this.promoValid = true;
              this.promoMessage = promo.message;
              
              if (promo.discount) {
                this.discount = this.subtotal * promo.discount;
              }
              
              if (promo.freeShipping) {
                this.shippingMethod = 'standard';
                this.shipping = 0;
              }
            } else {
              this.promoValid = false;
              this.promoMessage = 'Invalid promo code';
              this.discount = 0;
            }
          },
          
          calculateTax() {
            // Example tax calculation (7.5%)
            return (this.subtotal - this.discount) * 0.075;
          },
          
          get subtotal() {
            return this.cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
          },
          
          get shippingCost() {
            const shippingRates = {
              'standard': 5,
              'express': 15,
              'overnight': 25
            };
            return shippingRates[this.shippingMethod] || 5;
          },
          
          get total() {
            return this.subtotal + this.shippingCost + this.calculateTax() - this.discount;
          }
        };
      }

    return(
        <>
        <body className="bg-gray-100 font-sans min-h-screen">
  <div className="container mx-auto p-4 max-w-6xl">
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">Shopping Cart</h1>
      <div x-data="cart()" className="bg-blue-600 text-white px-3 py-1 rounded-full flex items-center">
        <i className="fas fa-shopping-cart mr-2"></i>
        <span x-text="cartItems.length"></span> <span className="hidden sm:inline ml-1">items</span>
      </div>
    </div>
    
    <div x-data="cart()" className="space-y-6">
      <div x-show="cartItems.length === 0" className="bg-white rounded-lg shadow-md p-6 text-center">
        <i className="fas fa-shopping-cart text-gray-300 text-5xl mb-4"></i>
        <p className="text-xl text-gray-500">Your cart is empty</p>
        <a href="#" className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Continue Shopping
        </a>
      </div>

      <div className="sm:hidden">
        <template x-for="(item, index) in cartItems" key="index"/>
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex justify-between items-start">
              <div className="flex items-start space-x-3">
                <img src="item.image 'https://via.placeholder.com/80'" alt="Product" className="w-20 h-20 object-cover rounded"/>
                <div>
                  <h2 className="font-semibold text-lg" x-text="item.name"></h2>
                  <p className="text-sm text-gray-600" x-text="item.model"></p>
                </div>
              </div>
              <button onclick="removeItem(index)" className="text-red-500 hover:text-red-700">
                <i className="fas fa-trash"></i>
              </button>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">HS Code:</span>
                <span x-text="item.hsCode"></span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Color:</span>
                <div className="flex items-center">
                  <select x-model="item.color" className="text-sm border rounded p-1">
                    <option value="Black">Black</option>
                    <option value="Silver">Silver</option>
                    <option value="Blue">Blue</option>
                    <option value="Red">Red</option>
                    <option value="White">White</option>
                  </select>
                  <div className="w-4 h-4 ml-2 rounded-full" ></div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Quantity:</span>
                <div className="flex items-center border rounded">
                  <button onclick="decrementQuantity(index)" className="px-2 py-1 text-gray-500">
                    <i className="fas fa-minus text-xs"></i>
                  </button>
                  <input
                    type="number"
                    min="1"
                    className="w-12 text-center border-x"
                  />
                  <button onclick="incrementQuantity(index)" className="px-2 py-1 text-gray-500">
                    <i className="fas fa-plus text-xs"></i>
                  </button>
                </div>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Weight:</span>
                <span x-text="item.weight + ' kg'"></span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery:</span>
                <select x-model="item.deliveryMethod" className="text-sm border rounded p-1">
                  <option value="Air">Air</option>
                  <option value="Ship">Ship</option>
                  <option value="Express">Express</option>
                </select>
              </div>
              
              <div className="flex justify-between font-medium">
                <span>Price:</span>
                <span x-text="'$' + item.perPieceRate.toFixed(2)"></span>
              </div>
              
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span x-text="'$' + item.totalPrice.toFixed(2)"></span>
              </div>
              
              <div className="pt-2 border-t mt-2">
                <button
                  onclick="item.showDescription = !item.showDescription"
                  className="text-blue-600 text-sm flex items-center"
                >
                  <span x-text="item.showDescription ? 'Hide Description' : 'Show Description'"></span>
                  <i className="fas ml-1 item.showDescription ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                </button>
                
                <div x-show="item.showDescription" className="mt-2">
                  <div x-show="!item.isEditingDescription">
                    <p className="text-sm text-gray-600" x-text="item.description"></p>
                    <button
                      onclick="startEditingDescription(index)"
                      className="text-xs text-blue-600 mt-1"
                    >
                      <i className="fas fa-edit mr-1"></i> Edit
                    </button>
                  </div>
                  
                  <div x-show="item.isEditingDescription">
                    <textarea
                      x-model="item.description"
                      className="w-full text-sm border rounded p-2 mt-1"
                      rows="3"
                    ></textarea>
                    <div className="flex justify-end space-x-2 mt-2">
                      <button
                        onclick="cancelEditingDescription(index)"
                        className="text-xs px-2 py-1 border rounded"
                      >
                        Cancel
                      </button>
                      <button
                        onclick="saveDescription(index)"
                        className="text-xs px-2 py-1 bg-blue-600 text-white rounded"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
      

      <div className="hidden sm:block">
        <div className="responsive-table">
          <table className="w-full bg-white rounded-lg shadow-md overflow-hidden" x-show="cartItems.length > 0"/>
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="py-3 px-4 text-left">Product</th>
                <th className="py-3 px-4 text-left">Details</th>
                <th className="py-3 px-4 text-center">Quantity</th>
                <th className="py-3 px-4 text-right">Price</th>
                <th className="py-3 px-4 text-right">Total</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <template x-for="(item, index) in cartItems" key="index">
                <tr className="border-t border-gray-200 hover:bg-gray-50 transition">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <img src="item.image  'https://via.placeholder.com/80'" alt="Product" className="w-16 h-16 object-cover rounded"/>
                      <div>
                        <h3 className="font-medium" x-text="item.name"></h3>
                        <p className="text-sm text-gray-600" x-text="item.model"></p>
                        <p className="text-xs text-gray-500" x-text="'HS: ' + item.hsCode"></p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600 mr-2">Color:</span>
                        <select x-model="item.color" className="text-sm border rounded p-1">
                          <option value="Black">Black</option>
                          <option value="Silver">Silver</option>
                          <option value="Blue">Blue</option>
                          <option value="Red">Red</option>
                          <option value="White">White</option>
                        </select>
                        <div className="w-4 h-4 ml-2 rounded-full" ></div>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600 mr-2">Delivery:</span>
                        <select
                          x-model="item.deliveryMethod"
                          className="text-sm border rounded p-1 {'bg-blue-50 text-blue-800': item.deliveryMethod === 'Air',
                                  'bg-green-50 text-green-800': item.deliveryMethod === 'Ship',
                                  'bg-purple-50 text-purple-800': item.deliveryMethod === 'Express'}"
                        >
                          <option value="Air">Air</option>
                          <option value="Ship">Ship</option>
                          <option value="Express">Express</option>
                        </select>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600 mr-2">Weight:</span>
                        <span className="text-sm" x-text="item.weight + ' kg'"></span>
                      </div>
                      <button
                        onclick="toggleDescription(index)"
                        className="text-xs text-blue-600 flex items-center mt-1"
                      >
                        <span x-text="item.showDescription ? 'Hide Description' : 'Show Description'"></span>
                        <i className="fas ml-1"></i>
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center">
                      <button onclick="decrementQuantity(index)" className="px-2 py-1 text-gray-500 border rounded-l">
                        <i className="fas fa-minus text-xs"></i>
                      </button>
                      <input
                        type="number"
                        min="1"
                        className="w-12 text-center border-y"
                      />
                      <button onclick="incrementQuantity(index)" className="px-2 py-1 text-gray-500 border rounded-r">
                        <i className="fas fa-plus text-xs"></i>
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <span className="font-medium" x-text="'$' + item.perPieceRate.toFixed(2)"></span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <span className="font-bold" x-text="'$' + item.totalPrice.toFixed(2)"></span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button onclick="removeItem(index)" className="text-red-500 hover:text-red-700 p-1">
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr x-show="item.showDescription" className="bg-gray-50">
                  <td colspan="6" className="py-3 px-6">
                    <div x-show="!item.isEditingDescription">
                      <p className="text-sm text-gray-700" x-text="item.description"></p>
                      <button
                        onclick="startEditingDescription(index)"
                        className="text-xs text-blue-600 mt-1"
                      >
                        <i className="fas fa-edit mr-1"></i> Edit Description
                      </button>
                    </div>
                    <div x-show="item.isEditingDescription">
                      <textarea
                        x-model="item.description"
                        className="w-full text-sm border rounded p-2"
                        rows="2"
                      ></textarea>
                      <div className="flex justify-end space-x-2 mt-2">
                        <button
                          onclick="cancelEditingDescription(index)"
                          className="text-xs px-3 py-1 border rounded hover:bg-gray-100"
                        >
                          Cancel
                        </button>
                        <button
                          onclick="saveDescription(index)"
                          className="text-xs px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          {/* </table> */}
        </div>
      </div>


      <div x-show="cartItems.length > 0" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">

          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Shipping Options</h2>
            <div className="space-y-3">
              <label className="flex items-center p-3 border rounded cursor-pointer hover:bg-gray-50">
                <input type="radio" name="shippingMethod" value="standard" x-model="shippingMethod" className="mr-3"/>
                <div>
                  <div className="font-medium">Standard Shipping</div>
                  <div className="text-sm text-gray-600">Delivery in 5-7 business days</div>
                </div>
                <div className="ml-auto font-medium">$5.00</div>
              </label>
              
              <label className="flex items-center p-3 border rounded cursor-pointer hover:bg-gray-50">
                <input type="radio" name="shippingMethod" value="express" x-model="shippingMethod" className="mr-3"/>
                <div>
                  <div className="font-medium">Express Shipping</div>
                  <div className="text-sm text-gray-600">Delivery in 1-3 business days</div>
                </div>
                <div className="ml-auto font-medium">$15.00</div>
              </label>
              
              <label className="flex items-center p-3 border rounded cursor-pointer hover:bg-gray-50">
                <input type="radio" name="shippingMethod" value="overnight" x-model="shippingMethod" className="mr-3"/>
                <div>
                  <div className="font-medium">Overnight Shipping</div>
                  <div className="text-sm text-gray-600">Next day delivery</div>
                </div>
                <div className="ml-auto font-medium">$25.00</div>
              </label>
            </div>
          </div>
          

          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h2 className="text-lg font-semibold mb-4">Promo Code</h2>
            <div className="flex">
              <input
                type="text"
                x-model="promoCode"
                placeholder="Enter promo code"
                className="flex-grow border rounded-l p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                onclick="applyPromoCode"
                className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition"
              >
                Apply
              </button>
            </div>
            <div x-show="promoMessage" className="mt-2 text-sm promoValid ? 'text-green-600' : 'text-red-600'">
              <span x-text="promoMessage"></span>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 sticky top-4">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium" x-text="'$' + subtotal.toFixed(2)"></span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium" x-text="'$' + shippingCost.toFixed(2)"></span>
              </div>
              <div x-show="discount > 0" className="flex justify-between text-green-600">
                <span>Discount</span>
                <span className="font-medium" x-text="'-$' + discount.toFixed(2)"></span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span className="font-medium" x-text="'$' + calculateTax().toFixed(2)"></span>
              </div>
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span x-text="'$' + total.toFixed(2)"></span>
                </div>
              </div>
            </div>
            <button
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center {'opacity-50 cursor-not-allowed': cartItems.length === 0}"
              disabled="cartItems.length === 0"
            >
              <i className="fas fa-lock mr-2"></i> Proceed to Checkout
            </button>
            <div className="flex items-center justify-center mt-4 text-sm text-gray-600">
              <i className="fas fa-shield-alt mr-2"></i> Secure Checkout
            </div>
            <div className="flex justify-center space-x-2 mt-4">
              <i className="fab fa-cc-visa text-2xl text-blue-900"></i>
              <i className="fab fa-cc-mastercard text-2xl text-red-600"></i>
              <i className="fab fa-cc-amex text-2xl text-blue-500"></i>
              <i className="fab fa-cc-paypal text-2xl text-blue-700"></i>
            </div>
          </div>
        </div>
      </div>
      
      <div x-show="cartItems.length > 0" className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
          <i className="fas fa-arrow-left mr-2"></i>
          Continue Shopping
        </a>
        <button onclick="clearCart" className="text-red-600 hover:text-red-800">
          <i className="fas fa-trash mr-1"></i> Clear Cart
        </button>
      </div>
    </div>
</body>
        </>
    )
}

export default Cart