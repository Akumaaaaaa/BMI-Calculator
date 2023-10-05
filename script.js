function calculateBMI() {
    const weight = parseFloat(document.querySelector('#weight').value);
    const height = parseFloat(document.querySelector('#height').value) / 100;
  
    if (!isNaN(weight) && !isNaN(height) && height > 0) {
      const bmi = weight / (height * height);
      displayBMIResult(bmi);
    } else {
      alert('Please enter valid weight and height.');
    }
  }
  
function displayBMIResult(bmi) {
    let result = '';
    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    result = `BMI: ${bmi.toFixed(1)} - ${category}`;
    const resultElement = document.querySelector('#result');
    resultElement.innerText = result;
    resultElement.style.marginTop = '20px';
}
  
  