function searchGallery() {
    const input = document.getElementById("searchBox").value.toLowerCase().trim();
    const rows = document.querySelectorAll(".Flowers");

    for (let i = 0; i < rows.length; i += 2) {
        const imageRow = rows[i];
        const labelRow = rows[i + 1];

        if (!imageRow || !labelRow) continue;

        const imageCells = imageRow.querySelectorAll("td");
        const labelCells = labelRow.querySelectorAll("td");

        for (let j = 0; j < labelCells.length; j++) {
            const label = labelCells[j].textContent.toLowerCase().trim();
            const match = label.includes(input);

            // Show/hide individual flower and its label
            imageCells[j].style.display = match ? "" : "none";
            labelCells[j].style.display = match ? "" : "none";
        }
    }
}