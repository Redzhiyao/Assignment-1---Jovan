//Credit to ChatGpt for assistance
document.addEventListener('DOMContentLoaded', function() {
    const itemsContainer = document.querySelector('.items-container');
    const sortSelect = document.querySelector('.sort-select');
    const itemDetails = document.querySelectorAll('.item-details');
    const prices = document.querySelectorAll('.price');

    prices.forEach((price, index) => {
    price.id = `price-${index}`;
    });

    // Stores the original order of items to be used for default
    const originalOrder = Array.from(itemDetails);

    // High to low price
    function sortByHighToLow() {
    const sortedItems = Array.from(itemDetails).sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.price').textContent.slice(1));
        const priceB = parseFloat(b.querySelector('.price').textContent.slice(1));
        return priceB - priceA;
    });

    updateItemsContainer(sortedItems);
    }

    // Low to high price
    function sortByLowToHigh() {
    const sortedItems = Array.from(itemDetails).sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.price').textContent.slice(1));
        const priceB = parseFloat(b.querySelector('.price').textContent.slice(1));
        return priceA - priceB;
    });

    updateItemsContainer(sortedItems);
    }

    // Function to update items in the container
    function updateItemsContainer(sortedItems) {
    itemsContainer.innerHTML = '';
    sortedItems.forEach(item => {
        itemsContainer.appendChild(item);
    });
    }

    // Event listener for select change
    sortSelect.addEventListener('change', function() {
    if (sortSelect.value === 'Sort by Price (high to low)') {
        sortByHighToLow();
    } else if (sortSelect.value === 'Sort by Price (low to high)') {
        sortByLowToHigh();
    } else if (sortSelect.value === 'Default') {
        // Revert to the original order
        updateItemsContainer(originalOrder);
    }
    });
});
