document.getElementById('reportForm').addEventListener('input', calculateFields);

function calculateFields() {
    const heightFeet = parseFloat(document.getElementById('heightFeet').value) || 0;
    const heightInches = parseFloat(document.getElementById('heightInches').value) || 0;
    const currentWeight = parseFloat(document.getElementById('currentWeight').value) || 0;
    const bodyFatPercent = parseFloat(document.getElementById('bodyFat').value) || 0;
    const desiredBodyFatPercent = parseFloat(document.getElementById('desiredBodyFat').value) || 0;
    const desiredWeight = parseFloat(document.getElementById('desiredWeight').value) || 0;

    const heightInInches = (heightFeet * 12) + heightInches;
    const heightInCm = heightInInches * 2.54;
    const weightInKg = currentWeight * 0.453592;
    const currentFatWeight = (currentWeight * bodyFatPercent) / 100;
    const leanBodyMass = currentWeight - currentFatWeight;
    const desiredFatWeight = (desiredWeight * desiredBodyFatPercent) / 100;
    const leanMassAtGoal = desiredWeight - desiredFatWeight;
    const poundsToLose = currentWeight - desiredWeight;
    const fatPoundsToLose = currentFatWeight - desiredFatWeight;
    const leanTissueLost = leanBodyMass - leanMassAtGoal;
    const caloriesNeeded = poundsToLose * 3500; // Approximation

    document.getElementById('calculatedHeightInches').value = heightInInches.toFixed(2);
    document.getElementById('calculatedHeightCm').value = heightInCm.toFixed(2);
    document.getElementById('calculatedWeightKg').value = weightInKg.toFixed(2);
    document.getElementById('currentFatWeight').value = currentFatWeight.toFixed(2);
    document.getElementById('leanBodyMass').value = leanBodyMass.toFixed(2);
    document.getElementById('desiredFatWeight').value = desiredFatWeight.toFixed(2);
    document.getElementById('leanMassAtGoal').value = leanMassAtGoal.toFixed(2);
    document.getElementById('poundsToLose').value = poundsToLose.toFixed(2);
    document.getElementById('fatPoundsToLose').value = fatPoundsToLose.toFixed(2);
    document.getElementById('leanTissueLost').value = leanTissueLost.toFixed(2);
    document.getElementById('totalCalories').value = caloriesNeeded.toFixed(0);
}
