let model;

// Cargar el modelo desde el archivo JSON
async function loadModel() {
    const response = await fetch('decision_tree_model.json');
    model = await response.json();
}

// Función para realizar la predicción
function predictSurvival(pclass, sex, age, sibsp, parch, fare, embarked) {
    // Aquí se implementa la lógica de predicción basada en el modelo
    // Para simplificar, usaremos un modelo de árbol de decisión básico
    const features = [pclass, sex, age, sibsp, parch, fare, embarked];
    
    // Simulación de predicción (esto debe ser reemplazado por la lógica real)
    // Aquí se puede implementar la lógica del árbol de decisión
    // Por simplicidad, asumimos que si la tarifa es mayor a 50, sobrevive
    return fare > 50 ? 1 : 0;  // Ejemplo simple
}

// Evento de envío del formulario
document.getElementById('prediction-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const pclass = parseInt(document.getElementById('pclass').value);
    const sex = parseInt(document.getElementById('sex').value);
    const age = parseFloat(document.getElementById('age').value);
    const sibsp = parseInt(document.getElementById('sibsp').value);
    const parch = parseInt(document.getElementById('parch').value);
    const fare = parseFloat(document.getElementById('fare').value);
    const embarked = parseInt(document.getElementById('embarked').value);

    // Realizar la predicción
    const prediction = predictSurvival(pclass, sex, age, sibsp, parch, fare, embarked);
    document.getElementById('result').innerText = `Predicción de supervivencia: ${prediction === 1 ? 'Sí' : 'No'}`;
});

// Cargar el modelo al iniciar
loadModel();
