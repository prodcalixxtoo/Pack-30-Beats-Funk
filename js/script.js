let scWidgets = {};

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);

document.addEventListener("DOMContentLoaded", function() {
    reveal();

    const iframes = document.querySelectorAll('.sc-iframe');
    iframes.forEach(iframe => {
        const widget = SC.Widget(iframe.id);
        scWidgets[iframe.id] = widget;
        
        widget.bind(SC.Widget.Events.PLAY, function() {
            document.querySelector(`[data-target="${iframe.id}"]`).classList.add('playing');
        });
        widget.bind(SC.Widget.Events.PAUSE, function() {
            document.querySelector(`[data-target="${iframe.id}"]`).classList.remove('playing');
        });
        widget.bind(SC.Widget.Events.FINISH, function() {
            document.querySelector(`[data-target="${iframe.id}"]`).classList.remove('playing');
        });
    });
});

function toggleSCAudio(btn) {
    const iframeId = btn.getAttribute('data-target');
    const widget = scWidgets[iframeId];
    
    // Verificação imediata do estado
    const isPlaying = btn.classList.contains('playing');
    
    // Pausa os outros players e remove a classe de "tocando" imediatamente
    Object.keys(scWidgets).forEach(id => {
        if (id !== iframeId) {
            scWidgets[id].pause();
            const otherBtn = document.querySelector(`[data-target="${id}"]`);
            if (otherBtn) otherBtn.classList.remove('playing');
        }
    });

    if (isPlaying) {
        btn.classList.remove('playing'); // Feedback visual instantâneo
        widget.pause();
    } else {
        btn.classList.add('playing'); // Feedback visual instantâneo
        widget.play();
    }
}

// FAQ Accordion Interaction
function toggleFaq(headerElement) {
    const faqItem = headerElement.parentElement;
    const content = faqItem.querySelector('.faq-content');
    const isOpen = faqItem.classList.contains('faq-open');
    
    // Close other active FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem && item.classList.contains('faq-open')) {
            item.classList.remove('faq-open');
            item.querySelector('.faq-content').style.maxHeight = null;
        }
    });

    if (isOpen) {
        faqItem.classList.remove('faq-open');
        content.style.maxHeight = null;
    } else {
        faqItem.classList.add('faq-open');
        content.style.maxHeight = content.scrollHeight + 'px';
    }
}


