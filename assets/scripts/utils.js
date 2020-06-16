function scrollTop() { window.scrollTo(0, 0); }

function finalizeButtons() {
    document.querySelectorAll("button[href]:not([href=''])").forEach(button => {
        button.onclick = () => {
            let url = button.getAttribute("href");
            let target = button.getAttribute("target") || '_blank';
            window.open(url, target);
        }
    });
}

function onMissingMemberPhoto() {
    let colors = ['none', 'red', 'blue', 'primary'];
    document.querySelectorAll(".member img").forEach(img => {
        img.onerror = function() {
            img.onerror = null;
            img.src = '/assets/images/members/None';
            var parent = img.parentNode;
            if (!parent.className.includes("member"))
                parent = parent.parentNode;
            parent.classList.add(`bg-${colors[colors.length * Math.random() | 0]}-light`);
            img.style = "mix-blend-mode: multiply;"
        }
    });
}

function closeFab() {
    let fab = document.querySelector('#menu-open');
    if (fab.checked) {
        fab.checked = false;
    }
}