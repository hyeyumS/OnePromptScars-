function calculateImpact() {
  const prompts = document.getElementById('prompts').value;
  const carbonPerPrompt = 0.0005; // 예제 데이터: 프롬프트 당 0.0005kg CO2 배출
  const totalCarbon = (prompts * carbonPerPrompt).toFixed(4);

  document.getElementById('result').innerHTML = `Estimated Carbon Footprint: ${totalCarbon} kg CO2`;
}
