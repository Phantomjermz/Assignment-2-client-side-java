document.getElementById('smoothie-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const flavor = document.getElementById('flavor').value;
    const selectedIngredients = Array.from(document.getElementById('ingredients').selectedOptions);
    const size = document.getElementById('size').value;
    const sizeMultiplier = parseFloat(document.getElementById('size').selectedOptions[0].getAttribute('data-multiplier'));

    // Calculate total cost
    let totalCost = 0;
    selectedIngredients.forEach(option => {
        totalCost += parseFloat(option.getAttribute('data-price'));
    });
    totalCost *= sizeMultiplier;

    // Create smoothie object
    const smoothie = {
        flavor: flavor,
        ingredients: selectedIngredients.map(option => option.textContent),
        size: size,
        totalCost: totalCost.toFixed(2) // Rounded to 2 decimal places for consistency
    };

    // Display bill
    document.getElementById('bill').innerHTML = `
        <h2>Smoothie Bill:</h2>
        <p><strong>Side Flavor:</strong> ${smoothie.flavor}</p>
        <p><strong>Smoothie Type:</strong> ${smoothie.ingredients.join(', ')}</p>
        <p><strong>Size:</strong> ${smoothie.size}</p>
        <p><strong>Total Cost:</strong> $${smoothie.totalCost}</p>
    `;
});
