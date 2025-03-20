function calculateImpact() {
    const prompts = document.getElementById('prompts').value;
    const carbon = (prompts * 0.02).toFixed(2);
    const electricity = (prompts * 0.05).toFixed(2);
    const water = (prompts * 0.1).toFixed(2);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `${carbon}g of carbon, ${electricity}kWh of electricity, and ${water}L of water have vanished.`;

    // Show result with animation
    resultDiv.classList.remove('fade-out');
    resultDiv.classList.add('show');

    setTimeout(() => {
        resultDiv.classList.add('fade-out');
        resultDiv.classList.remove('show');
    }, 5000);
}
