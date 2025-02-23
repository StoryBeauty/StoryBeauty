document.addEventListener('DOMContentLoaded', () => {
    // Attach event listeners to filter buttons
    document.querySelectorAll('.gradient-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const category = button.textContent.trim().toLowerCase();
            showCategory(category.includes("products") ? "products" : (category === 'show all' ? 'all' : category));
        });
    });

    // Set default to "all" on load
    showCategory('all');
});

function showCategory(category) {
    console.log(`Selected category: ${category}`);
    const categoryContainers = document.querySelectorAll('.category-container');

    if (category === 'all') {
        categoryContainers.forEach(container => {
            container.style.display = 'block';
            console.log(`Displayed: ${container.dataset.category}`);
        });
        return;
    }

    categoryContainers.forEach(container => {
        if (container.dataset.category === category) {
            container.style.display = 'block';
            console.log(`Displayed: ${container.dataset.category}`);
        } else {
            container.style.display = 'none';
            console.log(`Hidden: ${container.dataset.category}`);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Attach event listeners to filter buttons
    document.querySelectorAll('.gradient-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const categoryMap = {
                'massage services': 'massages',
                'waxing services': 'waxing',
                'flawless lashes menu': 'lashes',
                'luxury skincare treatments': 'products',
                'show all': 'all'
            };
            
            const category = button.textContent.trim().toLowerCase();
            showCategory(categoryMap[category] || category);
        });
    });

    // Set default to "all" on load
    showCategory('all');
});

function showCategory(category) {
    console.log(`Selected category: ${category}`);
    const categoryContainers = document.querySelectorAll('.category-container');

    if (category === 'all') {
        categoryContainers.forEach(container => {
            container.style.display = 'block';
            console.log(`Displayed: ${container.dataset.category}`);
        });
        return;
    }

    categoryContainers.forEach(container => {
        if (container.dataset.category === category) {
            container.style.display = 'block';
            console.log(`Displayed: ${container.dataset.category}`);
        } else {
            container.style.display = 'none';
            console.log(`Hidden: ${container.dataset.category}`);
        }
    });
}
window.onload = function() {
    window.scrollTo(0, 0);
};

