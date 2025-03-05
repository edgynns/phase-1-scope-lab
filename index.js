// 1. Declare customerName in global scope
var customerName = 'bob';

// 2. Function to uppercase customerName
function upperCaseCustomerName() {
    // Modify the global customerName variable directly
    customerName = customerName.toUpperCase();
    // Return the modified value
    return customerName;
}

// 3. Function to set bestCustomer in global scope
function setBestCustomer() {
    // Set bestCustomer to 'not bob' as originally specified
    window.bestCustomer = 'not bob';
}

// 4. Function to overwrite bestCustomer
function overwriteBestCustomer() {
    // Overwrite bestCustomer with 'maybe bob'
    window.bestCustomer = 'maybe bob';
}

// 5. Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = 'definitely not bob';

// 6. Function attempting to change leastFavoriteCustomer (will fail)
function changeLeastFavoriteCustomer() {
    // This will throw an error because leastFavoriteCustomer is a constant
    leastFavoriteCustomer = 'bob';
}