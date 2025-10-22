const onOffSwitch = document.getElementById("input-switch");
const customTimeWrapper = document.querySelector(".custom-time-wrapper");
const inputCustom = document.getElementById("input-custom");
const applyBtn = document.getElementById("apply-button")

onOffSwitch.addEventListener("change", (e) => {
    if (e.target.checked) {
        customTimeWrapper.style.display = "none";
    } else {
        customTimeWrapper.style.display = "flex";
    }
})

inputCustom.addEventListener("change", (e) => {
    if (e.target.value !== '') {

    }
})

applyBtn.addEventListener("click", () => {

})