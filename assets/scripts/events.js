const events = {
    "DOMContentLoaded": [
        onMissingMemberPhoto,
        highlightCode,
        scrollToPost,
        fixTitleCase,
        setLinkTargetBlank,
    ],
    "load": [
        setupInitiativeGrid,
        lightcaseifyArticle,
        finalizeButtons,
        closeFab,
    ],
    "scroll": [
        //closeFab,
        //scrollTop,
    ]
};

for (let [key, value] of Object.entries(events)) {
    value.forEach(func => {
        window.addEventListener(key, func);
    });
}