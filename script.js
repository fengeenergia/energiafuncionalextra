// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('button.md\\:hidden');
    const navLinks = document.querySelector('.hidden.md\\:flex');
    
    mobileMenuButton.addEventListener('click', function() {
        navLinks.classList.toggle('hidden');
        navLinks.classList.toggle('flex');
        navLinks.classList.toggle('flex-col');
        navLinks.classList.toggle('absolute');
        navLinks.classList.toggle('top-16');
        navLinks.classList.toggle('left-0');
        navLinks.classList.toggle('right-0');
        navLinks.classList.toggle('bg-white');
        navLinks.classList.toggle('p-4');
        navLinks.classList.toggle('shadow-md');
        navLinks.classList.toggle('space-y-4');
        navLinks.classList.toggle('space-x-0');
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (!navLinks.classList.contains('hidden')) {
                    mobileMenuButton.click();
                }
            }
        });
    });
});

// Simple form validation for when the diagnostic is implemented
function validateForm() {
    // This would be expanded when the actual form is implemented
    return true;
}
