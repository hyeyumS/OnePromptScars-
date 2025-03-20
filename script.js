function calculateImpact() {
  const prompts = document.getElementById('prompts').value;
  const carbon = (prompts * 0.5).toFixed(2);
  const water = (prompts * 2.5).toFixed(2);
  const electricity = (prompts * 1.2).toFixed(2);
  
  document.getElementById('result').innerHTML = `
    ${carbon}g of carbon, ${water}L of cooling water, and ${electricity}Wh of electricity were consumed.
  `;
}
