function initializeTable() {
  const urlParams = new URLSearchParams(window.location.search);
  const selectedPackage = urlParams.get("package");
  document.getElementById("packageTitle").textContent = selectedPackage;

  fetchCSV("journals.csv").then((data) => {
    const tableBody = document.getElementById("resultTable");
    tableBody.innerHTML = ""; // Clear existing rows

    const headers = data[0];
    const rows = data.slice(1);

    console.log("CSV Data:", data); // Debug output

    rows.forEach((row) => {
      if (row.length === headers.length) {
        const [packageName, subjectName, journalName] = row;

        if (packageName === selectedPackage) {
          const rowHTML = `
              <tr>
                  <td><input type="checkbox" class="select-row" data-journal="${journalName}"></td>
                  <td>${journalName}</td>
              </tr>
          `;
          tableBody.innerHTML += rowHTML;
        }
      }
    });
  });
}

function filterJournals() {
  const selectedSubject = document.getElementById("subject").value;
  const tableBody = document.getElementById("resultTable");

  tableBody.innerHTML = ""; // Clear existing rows

  fetchCSV("journals.csv").then((data) => {
    const headers = data[0];
    const rows = data.slice(1);
    const urlParams = new URLSearchParams(window.location.search);
    const selectedPackage = urlParams.get("package");

    console.log("Selected Subject:", selectedSubject); // Debug output
    console.log("CSV Data:", data); // Debug output

    rows.forEach((row) => {
      if (row.length === headers.length) {
        const [packageName, subjectName, journalName] = row;

        if (
          packageName === selectedPackage &&
          (selectedSubject === "" || subjectName === selectedSubject)
        ) {
          const rowHTML = `
              <tr>
                  <td><input type="checkbox" class="select-row" data-journal="${journalName}"></td>
                  <td>${journalName}</td>
              </tr>
          `;
          tableBody.innerHTML += rowHTML;
        }
      }
    });
  });
}
