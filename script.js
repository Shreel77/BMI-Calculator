function toggleUnits() {
  const unit = document.getElementById("unit").value;
  document.getElementById("metric-inputs").style.display = unit === "metric" ? "block" : "none";
  document.getElementById("imperial-inputs").style.display = unit === "imperial" ? "block" : "none";
}

function calculateBMI() {
  const unit = document.getElementById("unit").value;
  let bmi;

  if (unit === "metric") {
    const height_cm = parseFloat(document.getElementById("height_cm").value);
    const weight_kg = parseFloat(document.getElementById("weight_kg").value);

    if (!height_cm || !weight_kg || height_cm <= 0 || weight_kg <= 0) {
      document.getElementById("result").innerText = "Please enter valid metric values.";
      return;
    }

    const height_m = height_cm / 100;
    bmi = weight_kg / (height_m ** 2);
  } else {
    const feet = parseFloat(document.getElementById("height_ft").value);
    const inches = parseFloat(document.getElementById("height_in").value);
    const weight_lb = parseFloat(document.getElementById("weight_lb").value);

    if ((!feet && feet !== 0) || (!inches && inches !== 0) || !weight_lb || feet < 0 || inches < 0 || weight_lb <= 0) {
      document.getElementById("result").innerText = "Please enter valid imperial values.";
      return;
    }

    const totalInches = (feet * 12) + inches;
    bmi = (weight_lb / (totalInches ** 2)) * 703;
  }

  let status = "";
  if (bmi < 18.5) status = "Underweight";
  else if (bmi < 25) status = "Normal";
  else if (bmi < 30) status = "Overweight";
  else status = "Obese";

  document.getElementById("result").innerText = `Your BMI is ${bmi.toFixed(2)} (${status})`;
}
