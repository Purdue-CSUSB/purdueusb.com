let search = document.querySelector("#search");
[
    'input',
    'paste',
    'blur',
].forEach(e => {
    search.addEventListener(e, onSearchChange);
});
let query = getSearchQuery();
if (!!query) {
    search.value = query;
    search.dispatchEvent(new Event('input'));
}