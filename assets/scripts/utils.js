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
    document.querySelectorAll(".member img").forEach(img => {
        img.onerror = function() {
            img.onerror = null;
            img.src = '/assets/images/members/None';
        }
    });
}

function closeFab() {
    let fab = document.querySelector('#menu-open');
    if (fab.checked) {
        fab.checked = false;
    }
}