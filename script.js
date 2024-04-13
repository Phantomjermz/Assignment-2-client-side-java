document.getElementById('smoothie-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const flavor = document.getElementById('flavor').value;
    const ingredients = Array.from(document.getElementById('ingredients').selectedOptions).map(option => option.value);
    const size = document.getElementById('size').value;

    // Create smoothie object
    const smoothie = {
        flavor: flavor,
        ingredients: ingredients,
        size: size
    };

    // Display smoothie details
    document.getElementById('output').innerHTML = `
        <h2>Smoothie Details:</h2>
        <p><strong>Flavor:</strong> ${smoothie.flavor}</p>
        <p><strong>Ingredients:</strong> ${smoothie.ingredients.join(', ')}</p>
        <p><strong>Size:</strong> ${smoothie.size}</p>
    `;
});
