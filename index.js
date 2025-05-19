document.getElementById('gradeForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const FCS = parseFloat(document.getElementById('fcs').value);
    const MG = parseFloat(document.getElementById('mg').value);
    const targetFinalGrade = 50.0;
  
    // Step 1: Compute 1/3 of Midterm Grade
    const mgPart = MG / 3.0;
  
    // Step 2: Subtract mgPart from target final grade
    const remaining = targetFinalGrade - mgPart;
  
    // Step 3: Compute FE
    const FE = (3.0 * remaining) - FCS;
  
    const resultDiv = document.getElementById('result');
  
    if (FE > 100) {
      resultDiv.textContent = "It is not possible to reach a final grade of 50.00 with the given grades.";
    } else if (FE < 0) {
      resultDiv.textContent = "You already passed with your current grades!";
    } else {
      resultDiv.textContent = `You need at least a Final Exam score of ${FE.toFixed(2)} to pass with a grade of 50.00.`;
    }
  });
  