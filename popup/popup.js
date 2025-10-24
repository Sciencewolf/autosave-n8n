document.addEventListener("DOMContentLoaded", async () => {
    const onOffSwitch = document.getElementById("input-switch");

    onOffSwitch.addEventListener("change", async () => {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        chrome.tabs.sendMessage(
            tab.id,
            { autosaveEnabled: onOffSwitch.checked },
            (response) => {}
        );
    });
});
