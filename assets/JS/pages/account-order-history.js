document.querySelector('.download').addEventListener('click', function () {
    var element = document.getElementById('receipt');
    element.style.display = "block";

    // Call html2pdf() and save the Promise object that it returns
    var pdfPromise = html2pdf().from(element).save();

    // Wait for the PDF generation to complete before hiding the element
    pdfPromise.then(function () {
        element.style.display = "none";
    });
});
