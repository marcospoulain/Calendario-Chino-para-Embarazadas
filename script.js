document.addEventListener('DOMContentLoaded', function() {
    // Datos del calendario chino (simplificado para este ejemplo)
    // 'M' representa niño (masculino) y 'F' representa niña (femenino)
    const chineseCalendarData = {
        18: ['M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F'],
        19: ['F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M'],
        20: ['M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F'],
        21: ['F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M'],
        22: ['M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F'],
        23: ['F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M'],
        24: ['M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F'],
        25: ['F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M'],
        26: ['M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F'],
        27: ['F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M'],
        28: ['M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F'],
        29: ['F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M'],
        30: ['M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F'],
        31: ['F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M'],
        32: ['M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F'],
        33: ['F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M'],
        34: ['M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F'],
        35: ['F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M'],
        36: ['M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F'],
        37: ['F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M'],
        38: ['M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F'],
        39: ['F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M'],
        40: ['M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F'],
        41: ['F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M'],
        42: ['M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F'],
        43: ['F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M'],
        44: ['M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F'],
        45: ['F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M']
    };

    // Manejar la visibilidad de la tabla
    const toggleTableBtn = document.getElementById('toggle-table');
    const tableContainer = document.querySelector('.table-container');

    toggleTableBtn.addEventListener('click', () => {
        const isVisible = tableContainer.style.display !== 'none';
        tableContainer.style.display = isVisible ? 'none' : 'block';
        toggleTableBtn.textContent = isVisible ? 'Mostrar tabla' : 'Ocultar tabla';
    });

    // Generar la tabla del calendario chino
    function generateCalendarTable() {
        const tableBody = document.querySelector('#chinese-calendar tbody');
        tableBody.innerHTML = '';
        
        for (let age = 18; age <= 45; age++) {
            const row = document.createElement('tr');
            
            // Añadir la celda de edad
            const ageCell = document.createElement('td');
            ageCell.textContent = age;
            ageCell.style.fontWeight = 'bold';
            row.appendChild(ageCell);
            
            // Añadir las celdas de meses
            for (let month = 0; month < 12; month++) {
                const cell = document.createElement('td');
                const gender = chineseCalendarData[age][month];
                
                cell.textContent = gender === 'M' ? 'Niño' : 'Niña';
                cell.className = gender === 'M' ? 'boy' : 'girl';
                
                row.appendChild(cell);
            }
            
            tableBody.appendChild(row);
        }
    }

    // Función para predecir el género según el calendario chino
    function predictGender() {
        const motherAge = parseInt(document.getElementById('mother-age').value);
        const conceptionMonth = parseInt(document.getElementById('conception-month').value) - 1; // Ajustar a índice base 0
        
        if (isNaN(motherAge) || isNaN(conceptionMonth)) {
            alert('Por favor, completa todos los campos correctamente.');
            return;
        }
        
        if (motherAge < 18 || motherAge > 45) {
            alert('La edad de la madre debe estar entre 18 y 45 años.');
            return;
        }
        
        const gender = chineseCalendarData[motherAge][conceptionMonth];
        const resultText = document.getElementById('prediction-text');
        const babyImage = document.getElementById('baby-image');
        const resultContainer = document.getElementById('result');
        
        if (gender === 'M') {
            resultText.textContent = '¡Según el calendario chino, tendrás un niño!';
            babyImage.src = 'img/boy.png';
        } else {
            resultText.textContent = '¡Según el calendario chino, tendrás una niña!';
            babyImage.src = 'img/girl.png';
        }
        
        resultContainer.classList.remove('hidden');
    }

    // Función para calcular las semanas de embarazo
    function calculatePregnancyWeeks() {
        const dueDateInput = document.getElementById('due-date').value;
        
        if (!dueDateInput) {
            alert('Por favor, ingresa la fecha estimada de parto.');
            return;
        }
        
        const dueDate = new Date(dueDateInput);
        const today = new Date();
        
        // Calcular la fecha aproximada de concepción (40 semanas antes de la fecha de parto)
        const conceptionDate = new Date(dueDate);
        conceptionDate.setDate(conceptionDate.getDate() - 280); // 40 semanas * 7 días
        
        // Si la fecha actual es anterior a la fecha de concepción, mostrar un mensaje de error
        if (today < conceptionDate) {
            alert('La fecha estimada de parto parece estar muy lejos en el futuro.');
            return;
        }
        
        // Calcular la diferencia en días entre hoy y la fecha de concepción
        const diffTime = Math.abs(today - conceptionDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        // Calcular las semanas de embarazo
        const weeks = Math.floor(diffDays / 7);
        const days = diffDays % 7;
        
        // Actualizar el texto de las semanas
        const weeksText = document.getElementById('weeks-text');
        weeksText.textContent = `Estás en la semana ${weeks} y ${days} día(s) de embarazo.`;
        
        // Actualizar la barra de progreso
        const progressBar = document.getElementById('progress');
        const progressPercentage = Math.min((weeks / 40) * 100, 100);
        progressBar.style.width = `${progressPercentage}%`;
        
        // Mostrar información del trimestre
        const trimesterInfo = document.getElementById('trimester-info');
        let trimesterText = '';
        
        if (weeks < 13) {
            trimesterText = `
                <h4>Primer Trimestre (Semanas 1-12)</h4>
                <p>En este trimestre, el embrión se desarrolla en un feto. Los órganos vitales y las extremidades comienzan a formarse.</p>
                <p>Es común experimentar náuseas matutinas, fatiga y cambios de humor.</p>
            `;
        } else if (weeks < 27) {
            trimesterText = `
                <h4>Segundo Trimestre (Semanas 13-26)</h4>
                <p>Este es a menudo el trimestre más cómodo. Las náuseas suelen disminuir y sentirás los primeros movimientos del bebé.</p>
                <p>El bebé está creciendo rápidamente y desarrollando características faciales.</p>
            `;
        } else {
            trimesterText = `
                <h4>Tercer Trimestre (Semanas 27-40)</h4>
                <p>El bebé continúa creciendo y preparándose para el nacimiento. Podrías experimentar dificultad para dormir y mayor presión en la pelvis.</p>
                <p>Es importante descansar y prepararse para la llegada del bebé.</p>
            `;
        }
        
        trimesterInfo.innerHTML = trimesterText;
        
        // Mostrar el contenedor de progreso
        document.getElementById('pregnancy-progress').classList.remove('hidden');
    }

    // Inicializar la tabla del calendario
    generateCalendarTable();
    
    // Añadir event listeners a los botones
    document.getElementById('predict-btn').addEventListener('click', predictGender);
    document.getElementById('calculate-weeks').addEventListener('click', calculatePregnancyWeeks);
});