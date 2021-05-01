chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		window.LDAUTOAPPROVE = false;
		clearInterval(readyStateCheckInterval);
		setInterval(function () {
			if(window.LDAUTOAPPROVE){
				var button = document.querySelector('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary')
				if(button !== null && button.querySelector('.MuiButton-label') !== null) {
					if(button.querySelector('.MuiButton-label').innerText == "APPROVE"){
						button.click();
					}
				}
			}
		},200);
		document.querySelector('body').insertAdjacentHTML( 'beforeend', '<div id="ld_autoapproval" style="position: fixed;bottom: 0;left: 0;background: #2196f3;display: flex;align-items: center;padding: 8px;font-size: 12px;border-radius: 0 5px 0 0;">AUTO-APPROVE<input type="checkbox"></div>' );
		document.querySelector('#ld_autoapproval').addEventListener('change', function (event) {
			window.LDAUTOAPPROVE = event.target.checked;
			document.querySelector('.MuiAppBar-colorPrimary').style.background = (event.target.checked) ? "linear-gradient(38deg,#c634f6,#10eeaa)" : "";
		});
	}
	}, 10);
});
