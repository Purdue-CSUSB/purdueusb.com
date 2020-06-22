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
    let default_image = '/assets/images/members/None.webp';
    document.querySelectorAll(".member-color img").forEach(img => {
        img.onerror = function() {
            img.onerror = null;
            img.src = default_image;
            colorImage(img);
        }
        if (img.src == window.location.origin + default_image) {
            colorImage(img);
        }
    });
}

function colorImage(img) {
    let colors = ['none', 'red', 'blue', 'primary'];
    var parent = img.parentNode;
    if (!parent.className.includes("member-color"))
        parent = parent.parentNode;
    parent.classList.add(`bg-${colors[colors.length * Math.random() | 0]}-light`);
    img.style = "mix-blend-mode: multiply;"
}

function closeFab() {
    let fab = document.querySelector('#menu-open');
    if (fab.checked) {
        fab.checked = false;
    }
}

function highlightCode() {
    document.querySelectorAll("*:not(pre) > code").forEach(element => {
        hljs.highlightBlock(element);
    });
}