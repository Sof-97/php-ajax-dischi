<?php
include __DIR__ . '/partials/header.php';

?>
<main>
    <div id="app">
        <div id="search">
                <select @change="select" name="genre" id="genreSel" v-model="searchGenre">
                    <option value="" disabled selected>Seleziona</option>
                    <option v-for="item in genre" :value="item">{{item}}</option>
                </select>
        </div>
        <div id="album">
            <div v-for="item in albums">
                <img :src="item.poster" alt="image">
                <h4>{{item.title}}</h4>
                <p>{{item.author}}</p>
                <p>{{item.year}}</p>
            </div>
        </div>
    </div>
</main>


<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.27.2/axios.min.js" integrity="sha512-odNmoc1XJy5x1TMVMdC7EMs3IVdItLPlCeL5vSUPN2llYKMJ2eByTTAIiiuqLg+GdNr9hF6z81p27DArRFKT7A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="./js/main.js"></script>
</body>

</html>