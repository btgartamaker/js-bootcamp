const products = []
const product = products[0]

// Truthy - values that resolve to true in bool context
// Falsy - Values that resolve to false in bool context
// Falsy Values - false, 0, empty string, null, undefined, NaN


if (product !== undefined) {
    console.log('Product Found')
} else {
    console.log('Product not found')
}