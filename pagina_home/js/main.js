document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const backToTopButton = document.getElementById('btn-back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const searchButton = document.querySelector('.search-box button');
    let searchInput = null;
    
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            if (!searchInput) {
                searchInput = document.createElement('input');
                searchInput.type = 'text';
                searchInput.placeholder = 'Títulos, pessoas, gêneros';
                searchInput.className = 'search-input';
                searchButton.parentNode.insertBefore(searchInput, searchButton);
                searchInput.focus();
            } else {
                if (searchInput.style.width === '0px' || searchInput.style.width === '') {
                    searchInput.style.width = '200px';
                    searchInput.style.padding = '0.5rem 1rem';
                    searchInput.style.opacity = '1';
                    setTimeout(() => searchInput.focus(), 300);
                } else {
                    searchInput.style.width = '0px';
                    searchInput.style.padding = '0.5rem 0';
                    searchInput.style.opacity = '0';
                }
            }
        });
    }

    if (typeof bootstrap !== 'undefined') {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }

    const sliders = document.querySelectorAll('.content-slider');
    
    sliders.forEach(slider => {
        const container = slider.querySelector('.slider-container');
        const leftArrow = slider.querySelector('.slider-arrow-left');
        const rightArrow = slider.querySelector('.slider-arrow-right');
        
        const itemWidth = slider.querySelector('.content-item')?.offsetWidth || 0;
        
        if (leftArrow && container) {
            leftArrow.addEventListener('click', function() {
                container.scrollBy({
                    left: -itemWidth * 3,
                    behavior: 'smooth'
                });
            });
        }
        
        if (rightArrow && container) {
            rightArrow.addEventListener('click', function() {
                container.scrollBy({
                    left: itemWidth * 3,
                    behavior: 'smooth'
                });
            });
        }
    });

    const volumeControls = document.querySelectorAll('.volume-slider');
    volumeControls.forEach(control => {
        control.addEventListener('input', function() {
            console.log('Volume set to: ' + this.value + '%');
        });
    });
    
    const categoryPills = document.querySelectorAll('.category-pill');
    categoryPills.forEach(pill => {
        pill.addEventListener('click', function() {
            categoryPills.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.textContent.trim();
            loadMoreContent(category);
        });
    });
    
    const glowElements = document.querySelectorAll('.badge-premium, .neoflix-logo');
    glowElements.forEach(element => {
        element.classList.add('animate-glow');
    });
});

function loadMoreContent(category) {
    console.log('Carregando mais conteúdo para: ' + category);
}