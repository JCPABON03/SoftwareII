
function descargarExcel() {
  alert("Aquí se generará el Excel con las notas (pendiente implementación con SheetJS).");
}

document.addEventListener('DOMContentLoaded', function () {
  const fileInput = document.querySelector('input[type="file"]');
  if (fileInput) {
    fileInput.addEventListener('change', function (e) {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function (event) {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
        console.log("Datos del Excel:", jsonData);

        // Aquí puedes mostrar o guardar los datos
        alert("Archivo Excel cargado con éxito. Revisa la consola.");
      };
      reader.readAsArrayBuffer(file);
    });
  }
});
