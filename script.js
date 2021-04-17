const clipImg = document.querySelector('#clip-img');
const uploadBtn = document.querySelector('#upload');

async function submit() {
    // Get data from Base64-encoded URL
    const base64Data = clipImg.src.split("base64,")[1];
    const response = await fetch('/download.php', {
        method: 'POST',
        body: base64Data
    });

    const result = await response.text();
    console.log(result);
}

window.addEventListener("paste", function (e) {
    const items = e.clipboardData.items;

    for (const item of items) {
        if (item.kind === "file") {
            // Get image from clipboard
            const blob = item.getAsFile();
            const reader = new FileReader();

            reader.onload = function (event) {
                clipImg.src = event.target.result;
            };
            // Read data from image as Base64-encoded URL
            reader.readAsDataURL(blob);
        }
    }
});

uploadBtn.addEventListener('click', submit);
