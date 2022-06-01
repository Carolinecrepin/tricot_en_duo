export default {
    //methode pour recupérer tous les modèles de tricot
    async getTotalPatterns() {
        const response = await fetch(`https://127.0.0.1:8000/api/patterns`, {
            headers: {
                accept: 'application/json'
            }
        });
        const patterns = await response.json();
        this.patterns = patterns;
    },
}