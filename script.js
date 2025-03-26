document.addEventListener('DOMContentLoaded', () => {
  // DOM element references
  const form = document.getElementById('reticulocyteForm');
  const patientTypeSelect = document.getElementById('patientType');
  const totalRBCInput = document.getElementById('totalRBC');
  const reticulocytes1000Input = document.getElementById('reticulocytes1000');
  const reticulocytePercentInput = document.getElementById('reticulocytePercent');
  const calcButton = document.getElementById('calcButton');
  const resultsDiv = document.getElementById('results');
  const resultsContent = document.getElementById('resultsContent');

  // Reference ranges for each patient type
  const referenceRanges = {
    newborn: {
      absolute: { min: 100000, max: 300000 },
      percent: { min: 2.0, max: 6.0 }
    },
    adultMale: {
      absolute: { min: 18800, max: 100860 },
      percent: { min: 0.42, max: 2.23 }
    },
    adultFemale: {
      absolute: { min: 23000, max: 93500 },
      percent: { min: 0.51, max: 2.17 }
    }
  };

  // Add event listeners for automatic calculations
  patientTypeSelect.addEventListener('change', updateResults);
  reticulocytes1000Input.addEventListener('input', () => {
    calculateReticulocytePercent();
    updateResults();
  });

  reticulocytePercentInput.addEventListener('input', updateResults);
  totalRBCInput.addEventListener('input', updateResults);
  calcButton.addEventListener('click', () => {
    if (validateForm()) {
      updateResults();
    }
  });

  function validateForm() {
    // Check if required fields are filled
    if (!totalRBCInput.value || !reticulocytePercentInput.value) {
      alert('Please fill in all required fields.');
      return false;
    }
    return true;
  }

  function calculateReticulocytePercent() {
    let reticulocytes1000 = parseFloat(reticulocytes1000Input.value);
    
    // Validation
    if (isNaN(reticulocytes1000) || reticulocytes1000 < 0) {
      reticulocytes1000 = 0;
      reticulocytes1000Input.value = 0;
    }

    const reticulocytePercent = reticulocytes1000 / 10;
    reticulocytePercentInput.value = reticulocytePercent.toFixed(2);
  }

  function updateResults() {
    // Get values
    let totalRBC = parseFloat(totalRBCInput.value);
    let reticulocytePercent = parseFloat(reticulocytePercentInput.value);
    let patientType = patientTypeSelect.value;
    
    // Check for valid values
    if (isNaN(totalRBC) || isNaN(reticulocytePercent)) {
      return; // Don't display results if values are invalid
    }

    // Get appropriate reference range
    const reference = referenceRanges[patientType];

    // Calculations
    const absoluteReticulocytes = reticulocytePercent * (totalRBC * 10000);
    
    // Display results
    resultsDiv.classList.remove('hidden');
    
    // Interpret results
    let interpretation = '';
    if (reticulocytePercent < reference.percent.min) {
      interpretation = `<p class="text-red-600 font-medium">Low reticulocyte production. Below reference range for ${getPatientTypeText(patientType)}.</p>`;
    } else if (reticulocytePercent > reference.percent.max) {
      interpretation = `<p class="text-yellow-600 font-medium">High reticulocyte production. Above reference range for ${getPatientTypeText(patientType)}.</p>`;
    } else {
      interpretation = `<p class="text-green-600 font-medium">Normal reticulocyte production. Within reference range for ${getPatientTypeText(patientType)}.</p>`;
    }

    resultsContent.innerHTML = 
      `<div class="flex justify-between items-center py-2 border-b border-gray-200">
         <span class="font-medium">Absolute Reticulocytes:</span>
         <span class="text-blue-600 font-bold">${absoluteReticulocytes.toLocaleString('en-US', {maximumFractionDigits: 0})}/μL</span>
       </div>
       <div class="flex justify-between items-center py-2 border-b border-gray-200">
         <span class="font-medium">Relative Reticulocytes:</span>
         <span class="text-blue-600 font-bold">${reticulocytePercent.toFixed(2)}%</span>
       </div>
       <div class="flex justify-between items-center py-2 border-b border-gray-200">
         <span class="font-medium">Reference Range (Absolute):</span>
         <span class="font-medium">${reference.absolute.min.toLocaleString()} - ${reference.absolute.max.toLocaleString()}/μL</span>
       </div>
       <div class="flex justify-between items-center py-2 border-b border-gray-200">
         <span class="font-medium">Reference Range (%):</span>
         <span class="font-medium">${reference.percent.min.toFixed(2)} - ${reference.percent.max.toFixed(2)}%</span>
       </div>
       <div class="mt-2 pt-2">
         <span class="font-medium block mb-1">Interpretation:</span>
         ${interpretation}
       </div>`;
  }
  
  function getPatientTypeText(type) {
    switch(type) {
      case 'newborn': return 'Newborn';
      case 'adultMale': return 'Adult Male';
      case 'adultFemale': return 'Adult Female';
      default: return 'Patient';
    }
  }
});