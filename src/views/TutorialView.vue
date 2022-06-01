<template>
    <div>
        <div class="group-card">
            <div class="tuto-card">
                <img src="@/assets/image-tuto-video.png" alt="tuto-video" class="tuto-img">
                <p>tuto video</p>
            </div>
            <div class="tuto-card">
                <img src="@/assets/image-tuto-image.png" alt="tuto image" class="tuto-img">
                <p>tuto en images</p>
            </div>
            <div class="tuto-card">
                <p>Bibliothèque de points</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.group-card{
    display: flex;
    flex-direction: row;
    padding:1em;
}
.tuto-card{
    display: flex;
    flex-direction: column;
    background-color:#F4E6E2;
    border-radius:10px;
}
.tuto-img{
    display: flex;
    flex-direction: row;
    padding:1em;
    margin:1em;
}
</style>