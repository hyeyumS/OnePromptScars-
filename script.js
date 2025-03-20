function calculateImpact() {
    const prompts = document.getElementById('prompts').value;

    // AI 사용량에 따른 자원 계산
    const power = (prompts * 0.005).toFixed(3); // 전력 소비량
    const carbon = (prompts * 2).toFixed(2); // 탄소 배출량
    const water = (prompts * 0.5).toFixed(2); // 물 사용량

    // 결과 표시
    const result = document.getElementById('result');
    result.innerHTML = `⚡ ${power} kWh of electricity<br>🌍 ${carbon}g CO₂ emissions<br>💧 ${water}L of water resources have vanished.`;

    // 결과 애니메이션 적용
    result.classList.add("show-result");

    // 5초 후에 사라지도록 설정
    setTimeout(() => {
        result.classList.remove("show-result");
    }, 5000);
}
