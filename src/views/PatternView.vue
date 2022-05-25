<template>
    <div>
        <p>Tous les patrons</p>
        <div v-for="(pattern, index) in patterns" :key="index">
           <p>{{ patterns.category }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            patterns:[],
        }
    },
    async mounted() {
        await this.getTotalPatterns();
    },
    methods:{
        async getTotalPatterns(){
            const response = await fetch(`https://127.0.0.1:8000/api/patrons`, {
                headers:{
                    accept: 'application/json'
                }
            });
            const patterns = await response.json();
            console.log(patterns)
            return patterns;
        }
    }
}
</script>

<style scoped>

</style>