chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: copyToClipboard
	});
});

function copyToClipboard () {
    var title = document.title;
    var url=location.href;
    var content = `\[${title}\]\(${url}\)`
    if (navigator.clipboard) {
        return navigator.clipboard.writeText(content).then(function () {
            console.log("bulkcp4md: copy " + content +" to clipboard ")
        })
    } else {
        content.select()
        document.execCommand('copy')
        console.log("bulkcp4md: copy " + content +" to clipboard ")
    }
}
