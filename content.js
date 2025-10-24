console.log("Autosave n8n extension loaded");

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (!msg.autosaveEnabled) {
        sendResponse({ status: "autosave off" });
        return;
    }

    const interval = setInterval(() => {
        const saveBtn = document.querySelector(
            "#header > div > div > div._top-menu_gg3to_138 > div._container_14b3x_123 > span.actions > div:nth-child(3) > span > button"
        );

        if (saveBtn) {
            saveBtn.click();
            saveBtn.dispatchEvent(
                new MouseEvent("click", {bubbles: true, cancelable: true, view: window})
            );
        }
    }, 1_000);

    sendResponse({ status: "autosave started" });
});
