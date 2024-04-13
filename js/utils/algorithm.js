function ajustarRecetas(calculatedCalories, i) {
    // Variables para almacenar los totales de macronutrientes ajustados

    // Obtener la tabla y las filas de la tabla
    let table = document.getElementById("planificacion").getElementsByTagName("tbody")[0];
    let rows = table.getElementsByTagName("tr");

    for (let j = 0; j < rows.length - 1; j++) {
        // Obtener el nombre de la receta del ID de la celda
        let recipeName = rows[j].cells[i].id;

        // Verificar si la celda contiene una receta
        if (recipeName !== "") {
            // Buscar la receta en la lista de recetas
            let recipe = recipes.find(recipe => recipe.name === recipeName);

            // Si se encuentra la receta
            if (recipe) {
                // Iterar sobre los ingredientes de la receta
                recipe.ingredients.forEach(ingredient => {
                    // Calcular las calorías, carbohidratos, proteínas y grasas de cada ingrediente
                    let food = foods.find(food => food.name === ingredient.name);
                    if (food) {
                        let adjustFactor = parseFloat(ingredient.portion) / parseFloat(food.portion);
                        totalCalories += (parseFloat(food.energy) * adjustFactor);
                        totalCarbohydrates += ((parseFloat(food.carbohydrates) * adjustFactor) / 4); // Convertir calorías a gramos de carbohidratos (1g de carbohidratos = 4 kcal)
                        totalProteins += ((parseFloat(food.proteins) * adjustFactor) / 4); // Convertir calorías a gramos de proteínas (1g de proteína = 4 kcal)
                        totalFats += ((parseFloat(food.fats) * adjustFactor) / 9); // Convertir calorías a gramos de grasas (1g de grasa = 9 kcal)
                    }
                });
            }
        }
    }

    return [];
}
