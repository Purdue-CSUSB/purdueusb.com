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

function lightcaseifyArticle() {
    document.querySelectorAll("article#post section#content img:not(.no-lightcase):not(.emoji)").forEach(img => {
        img.classList.add("lightcase-img");
        let link = document.createElement("a");
        link.setAttribute("href", img.src);
        link.setAttribute("data-rel", "lightcase");
        let album = img.getAttribute("data-lightcase") || window.performance.now();
        link.setAttribute("data-lightcase", album);

        img.parentNode.replaceChild(link, img);
        link.appendChild(img);
    });

    jQuery(document).ready(function($) {
		$('a[data-rel^=lightcase]').lightcase();
	});

    document.querySelectorAll('article#post section#content > p').forEach(p => {
        let imgs = p.querySelectorAll("img");
        if (imgs.length > 1) {
            p.classList.add("row", "justify-around");
            imgs.forEach(img => {
                img.style.display = "inline";
            });
        }
    })
}

function scrollToPost() {
    let post = document.querySelector("#active");
    // janky hack to tell if we're on a screen worth scrolling
    let verticalSeparator = document.querySelector("#postVerticalSeparator");
    if (post && verticalSeparator) {
        let style = window.getComputedStyle(verticalSeparator);
        if (style && style.display != 'none') {
            post.scrollIntoView(true);
        } else {
            scrollTop();
        }
    }
}

function fixTitleCase() {
    let titles = document.querySelectorAll(".post-title");
    titles.forEach(t => {
        t.innerHTML = titleCase(t.innerHTML);
    });
}

/*
 * Source (not right for us as a local module): https://github.com/rvagg/titlecase/blob/master/to-title-case.js
 *
 * To Title Case 2.1 – http://individed.com/code/to-title-case/
 * Copyright © 2008–2013 David Gouch. Licensed under the MIT License.
 *
 * modifications by @rvagg Apr-2014
 */
var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
function titleCase (str) {
    if (!str) return str
    return str.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(match, index, title){
        if (index > 0 && index + match.length !== title.length &&
            match.search(smallWords) > -1 && title.charAt(index - 2) !== ':' &&
            (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') &&
            title.charAt(index - 1).search(/[^\s-]/) < 0) {
            return match.toLowerCase();
        }

        if (match.substr(1).search(/[A-Z]|\../) > -1) {
            return match;
        }

        return match.charAt(0).toUpperCase() + match.substr(1);
    });
}

function setLinkTargetBlank() {
    document.querySelectorAll("a:not(.page-link)").forEach(a => {
        if (!a.getAttribute("target")) {
            a.setAttribute("target", "_blank");
        }
    })
}

function setupGrid(options) {
    let magicGrid = new MagicGrid(options);
    magicGrid.listen();
}

function setupInitiativeGrid() {
    let initiativeContainerID = "#initiative-container";
    if (document.querySelector(initiativeContainerID)) {
        setupGrid({
            container: initiativeContainerID,
            static: true,
            //items: parseInt("{{site.data.initiatives | size}}"), // Required for dynamic content. Initial number of items in the container.
            maxColumns: 3, // Optional. Maximum number of columns. Default: Infinite.
            useMin: true, // Optional. Prioritize shorter columns when positioning items? Default: false.
            animate: true, // Optional. Animate item positioning? Default: false.
            center: true, //Optional. Center the grid items? Default: true. 
        });
    }   
}

function setupAnchors() {
    anchors.options = {
        visible: "always",
        truncate: "20"
    };
    anchors.add('#post h1, #post h2, #post h3, #post h4, #post h5')
            .add('.anchored')
            .remove('.no-anchor');
}

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}