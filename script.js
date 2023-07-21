document.getElementById("calculate-btn").addEventListener("click", calculateArbitrage);

function calculateArbitrage() {
    const odds1 = parseFloat(document.getElementById("odds-1").value);
    const odds2 = parseFloat(document.getElementById("odds-2").value);
    const stake = parseFloat(document.getElementById("stake").value);

    if (isNaN(odds1) || isNaN(odds2) || isNaN(stake)) {
        document.getElementById("result").style.fontFamily = "Noto Sans, Arial, sans-serif";
        document.getElementById("result").innerText = "Тавих дүнгээ оруулна уу.";
        return;
    }

    const totalProbability = 1 / odds1 + 1 / odds2;
    const stake1 = (stake / totalProbability) / odds1;
    const stake2 = (stake / totalProbability) / odds2;
    const profit = (stake / totalProbability) - stake;

    document.getElementById("result").style.fontFamily = "Noto Sans, Arial, sans-serif";
    
    const resultText = `
        <p class="${profit >= 0 ? 'green-text' : 'red-text'}">Хүртэх Ашиг: ${profit.toFixed(2)}</p>
        <p>Odds 1 дээр тавих дүн (${odds1}): ${stake1.toFixed(2)}</p>
        <p>Odds 2 дээр тавих дүн (${odds2}): ${stake2.toFixed(2)}</p>
    `;

    document.getElementById("result").innerHTML = resultText;
}
