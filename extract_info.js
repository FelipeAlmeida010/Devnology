// Função para extrair e retornar o Nutri-Score issooooo
function extractNutriScore() {
    const nutriScoreElement = document.querySelector('.grade_d .attr_text');
    if (nutriScoreElement) {
        const nutriScoreTitle = nutriScoreElement.querySelector('.attr_title').textContent.trim();
        const nutriScoreDescription = nutriScoreElement.querySelector('span').textContent.trim();
        return `${nutriScoreTitle}: ${nutriScoreDescription}`;
    } else {
        return 'Informação não disponível';
    }
}

// Função para extrair e retornar o NOVA
function extractNOVA() {
    const novaElement = document.querySelector('.grade_e .attr_text');
    if (novaElement) {
        const novaTitle = novaElement.querySelector('.attr_title').textContent.trim();
        const novaDescription = novaElement.querySelector('span').textContent.trim();
        return `${novaTitle}: ${novaDescription}`;
    } else {
        return 'Informação não disponível';
    }
}

// Função para extrair e retornar o Eco-Score
function extractEcoScore() {
    const ecoScoreElement = document.querySelector('.grade_unknown .attr_text');
    if (ecoScoreElement) {
        const ecoScoreTitle = ecoScoreElement.querySelector('.attr_title').textContent.trim();
        const ecoScoreDescription = ecoScoreElement.querySelector('span').textContent.trim();
        return `${ecoScoreTitle}: ${ecoScoreDescription}`;
    } else {
        return 'Informação não disponível';
    }
}

// Função principal para extrair todas as informações e exibi-las no console
function extractAndLogInformation() {
    const nutriScore = extractNutriScore();
    const nova = extractNOVA();
    const ecoScore = extractEcoScore();

    const foodInformation = {
        "Nutri-Score": nutriScore,
        "NOVA": nova,
        "Eco-Score": ecoScore
    };

    console.log(foodInformation);
}

// Chamar a função principal
extractAndLogInformation();
