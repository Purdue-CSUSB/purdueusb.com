function getSearchQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('search') || urlParams.get('s');
}

function loadSearchIndex() {
    return lunr(function () {
        this.ref('index');
        this.field('title');
        this.field('description');
        this.field('content');
        this.field('author');
        this.field('category');
        this.field('date');
      
        searchData.forEach(function (doc) {
            doc['content'] = unescape(doc['content']);
            this.add(doc)
        }, this);
    });
}

function sanitizeQuery(query) {
    if (!query.match(/[\\^:~+-]/g)) {
        query = `${query}*`;
        console.log(query);
    }
    return query;
}

function onSearchChange() {
    let query = this.value.trim();
    window.history.pushState(null, null, `?s=${encodeURIComponent(query)}`);
    let queryChanged = lastQuery === undefined || lastQuery != query;
    if (queryChanged) 
        removeHighlight();
    if (query && query.length > 1 && queryChanged) {
        lastQuery = query;
        var results = searchIndex.search(query);
        if (results.length == 0)
            results = searchIndex.search(sanitizeQuery(query));
        showSearchResults(results);
    } 
    if (query.length == 0 || !(!!query)) {
        hideSearchResults();
    }
}

function getSearchResultIndices(results) {
    return results.map(r => parseInt(r['ref']));
}

function hideSearchResults() {
    let wikiList = document.querySelector("#wiki-list");
    let resultsContainer = document.querySelector("#search-results");
    let noResults = document.querySelector("#no-search-results");
    wikiList.classList.remove("none");
    resultsContainer.classList.add("none");
    noResults.classList.add("none");
}

function removeHighlight() {
    document.querySelectorAll('article .search-highlight, #search-results .search-highlight').forEach(e => {
        e.classList = [];
        let parent = e.parentNode;
        e.replaceWith(e.innerText);
        parent.normalize();
    });
}

function showSearchResults(results) {
    let wikiList = document.querySelector("#wiki-list");
    let resultsContainer = document.querySelector("#search-results");
    let noResults = document.querySelector("#no-search-results");
    if (!results || results.length == 0) {
        wikiList.classList.add("none");
        noResults.classList.remove("none");
        resultsContainer.classList.add("none");
        document.querySelector("#search-query-term").innerHTML = lastQuery
    } else {
        let indices = getSearchResultIndices(results);
        let posts = searchData.filter(item => indices.includes(item['index']));
        let elems = createPostElements(posts);
        resultsContainer.innerHTML = '';
        elems.forEach(e => resultsContainer.appendChild(e));
        wikiList.classList.add("none");
        noResults.classList.add("none");
        resultsContainer.classList.remove("none");
        highlightSearchResults(lastQuery);
    }
}

function createPostElements(posts) {
    let wikiList = document.querySelector("#wiki-list");
    let clonable = wikiList.firstElementChild;
    return posts.map(p => {
        let clone = clonable.cloneNode(true);
        let active = clone.querySelector("#active");
        if (active) {
            active.id = '';
        }
        clone.href = `${p.url}?s=${lastQuery}`;
        let title = clone.querySelector(".post-title");
        let description = clone.querySelector(".post-description");
        title.innerHTML = p.title;
        description.innerHTML = p.description;
        return clone;
    })
}

/* Source because I am lazy:
    https://stackoverflow.com/questions/7380226/find-word-in-html/7380697#7380697 
*/
function walkHTML(e, query) {
    var expr = new RegExp(`([^a-zA-Z]?)(${query})`, "i");
    var partMatchExpr = new RegExp(`([^a-zA-Z]?)(${query})`, "i");
    e.childNodes.forEach(node => {
        if (node.nodeType == Node.TEXT_NODE) {
            if (node.nodeValue) {
                var matches = node.nodeValue.match(expr);
                if (matches) {
                    var parts = node.nodeValue.split(expr);
                    for (var n = 0; n < parts.length; n++) {
                        let part = parts[n];
                        if (part.match(partMatchExpr)) {
                            var span = document.createElement("span")
                            span.classList.add("highlight", "font-bold", "pa-1", "search-highlight");
                            span.style.fontSize = "inherit";
                            span.appendChild(document.createTextNode(part));
                            e.insertBefore(span, node);
                        } else {
                            e.insertBefore(document.createTextNode(parts[n]), node);
                        }
                    }
                    e.removeChild(node);
                }
            }
        }
        else {
            walkHTML(node, query);
        }
    })
}

function highlightSearchResults(query) {
    document.querySelectorAll('#search-results, article > section:not(:last-child)').forEach(section => {
        walkHTML(section, query);
    })
}

var lastQuery = undefined;
var searchIndex = loadSearchIndex();

function onLoadWithSearch() {

    let search = document.querySelector("#search");
    [
        'input',
        'paste',
        'blur',
    ].forEach(e => {
        search.addEventListener(e, onSearchChange);
    });
    let startQuery = getSearchQuery();
    if (!!startQuery) {
        search.value = startQuery;
        search.dispatchEvent(new Event('input'));
    }
}

window.addEventListener("DOMContentLoaded", onLoadWithSearch);