document.addEventListener("DOMContentLoaded", function () {
const passwordInput = document.getElementById("password");

const criteria = {
    letter: {
    test: function (value) {
        return /[a-zA-Z]/.test(value);
    },
    },
    characters: {
    test: function (value) {
        return value.length >= 10;
    },
    },
    special: {
    test: function (value) {
        return /[\d\W_]/.test(value);
    },
    },
};

passwordInput.addEventListener("input", function () {
    const value = passwordInput.value;

    Object.entries(criteria).forEach(function ([id, criterion]) {
    const li = document.getElementById(id);
    const ball = li.querySelector(".ball");
    const text = li.querySelector(".color-text");

    if (criterion.test(value)) {
        ball.classList.add("ok");
        text.classList.add("ok");
    } else {
        ball.classList.remove("ok");
        text.classList.remove("ok");
    }
    });
});
});