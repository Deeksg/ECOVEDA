function calculateFootprint() {
    const transport = document.getElementById('transport').value;
    const electricity = document.getElementById('electricity').value;
    const meat = document.getElementById('meat').value;

    if (transport && electricity && meat) {
        const transportEmissions = transport * 0.12;  // Avg CO2 per km
        const electricityEmissions = electricity * 0.5;  // Avg CO2 per kWh
        const meatEmissions = meat * 10;  // Avg CO2 per meat meal

        const totalEmissions = (transportEmissions + electricityEmissions + meatEmissions).toFixed(2);
        document.getElementById('result').textContent = `Your estimated carbon footprint is ${totalEmissions} kg CO2 per week.`;
    } else {
        document.getElementById('result').textContent = 'Please fill in all fields.';
    }
}
