//apis a serem consumidas
//coordenadas -> https://geocoding-api.open-meteo.com/v1/search?name=${cidade}&count=1&language=pt&format=json
//clima -> https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto

async function getClima() {
    const cidade = document.getElementById("city");
    const result = document.getElementById("resultado");

    try {
        result.innerText = "Carregando..."

        const city = cidade.value.trim();
        if (!city) { result.innerText = "Digite uma cidade!"; return}

        const geoRespose = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=pt&format=json`)

        // if (!geoRespose.ok) { throw new Error("Dados não encontrados!"); return }

        const geoData = await geoRespose.json()

        if (!geoData.results) { throw new Error("Dados não encontrados, confirme a cidade digitada!") }
        
        const { latitude, longitude, name, country, admin1 } = geoData.results[0];
        
        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`)

        const wheatherData = await weatherResponse.json();

        const clima = wheatherData.current_weather;
        
        result.innerHTML = `
            <h2>${name} / ${admin1} - ${country}</h2>
            <p>Temperatura: ${clima.temperature}°C</p>
            <p>Velocidade do Vento: ${clima.windspeed}Km/h</p>
            <p>Horário atual: ${clima.time.replace("T", " ")}</p>
            `;

    } catch (err) {
        result.innerText = `ERRO: ${err.message}`
    }

};  