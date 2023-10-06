function calculateBMI() {
    const weight = parseFloat(document.querySelector('#weight').value);
    const height = parseFloat(document.querySelector('#height').value) / 100;
  
    if (!isNaN(weight) && !isNaN(height) && height > 0) {
      const bmi = weight / (height * height);
      displayBMIResult(bmi);

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid input',
        text: 'Please enter valid weight and height.',
      });
    }    
  }

  function showFormula() {
    const formulaContainer = document.getElementById('formulaContainer');
    formulaContainer.classList.toggle('show');
}
  
function displayBMIResult(bmi) {
    const colorSegments = document.querySelectorAll('.colorSegment .arrow');
    colorSegments.forEach(arrow => arrow.style.display = 'none');
    
    let result = '';
    let category = '';

    if (bmi < 18.5) {
      category = 'Underweight';
      document.getElementById('underweight').querySelector('.arrow').style.display = 'inline-block';
    } else if (bmi < 24.9) {
      category = 'Normal';
      document.getElementById('normal').querySelector('.arrow').style.display = 'inline-block';
    } else if (bmi < 29.9) {
      category = 'Overweight';
      document.getElementById('overweight').querySelector('.arrow').style.display = 'inline-block';
    } else {
      category = 'Obese';
      document.getElementById('obese').querySelector('.arrow').style.display = 'inline-block';
    }

    result = `Your BMI is <strong>${bmi.toFixed(1)}</strong>, which means you are <strong>${category}</strong>`;
    const resultElement = document.querySelector('#result');
    resultElement.innerHTML = result;
    resultElement.style.marginTop = '40px';
    resultElement.style.marginBottom = '20px';
}