document.querySelector('.download').addEventListener('click', function () {
  var element = document.getElementById('receipt');
  element.style.display = "block";

  var opt = {
    margin: 0.1,
    // html2canvas: { scale: 2 },
    filename: 'receipt.pdf',
    image: { type: 'jpeg', quality: 1 },
    pagebreak: { avoid: '.prices', mode: ['avoid-all', 'css'] },
    jsPDF: { unit: 'in', format: 'a5', orientation: 'portrait' }
  };

  // Call html2pdf() and save the Promise object that it returns
  var pdfPromise = html2pdf().set(opt).from(element).save();

  // Wait for the PDF generation to complete before hiding the element
  pdfPromise.then(function () {
    element.style.display = "none";
  });
});
