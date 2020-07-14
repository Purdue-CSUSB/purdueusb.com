function rate(good) {
    let thumb_up = document.querySelector("#rate-good");
    let thumb_down = document.querySelector("#rate-bad");
    //uncheck is broken
    /*if ((good && thumb_up.checked) || (!good && thumb_down.checked)) {
        console.log("unchecking");
        console.log("thumbup: " + thumb_up.checked);
        console.log("thumbdown: " + thumb_down.checked);
        thumb_up.checked = false;
        thumb_down.checked = false;
        showThanks(false);
        showFeedbackForm(false);
    } else {
        console.log("checking");*/
        thumb_up.checked = good;
        thumb_down.checked = !good;
        showThanks(good);
        showFeedbackForm(!good);
    //}
}

function showFeedbackForm(show) {
    let feedback = document.querySelector("#feedback-bad-container");
    if (show) {
        feedback.classList.remove("none");
    }
    else {
        feedback.classList.add("none");
    }
}

function showThanks(show) {
    let thanks = document.querySelector("#feedback-thanks-container");
    if (show) thanks.classList.remove("none");
    else thanks.classList.add("none");
}