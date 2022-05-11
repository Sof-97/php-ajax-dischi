var app = new Vue ({
    el: '#app',
    data:{
        genre: [],
        albums: [],
        searchGenre: "",
    },
    created(){
        axios.get(`http://localhost/php-ajax-dischi/Milestone_2/api/database.php`)
            .then( res=> {
                this.albums = res.data.response;
                res.data.response.forEach(element => {
                    if (!this.genre.includes(element.genre)){
                        this.genre.push(element.genre)
                    } 
                });
            })
    },
    methods: {
        select(){
            console.log("gigi");
            axios.get(`http://localhost/php-ajax-dischi/Milestone_2/api/database.php?search=${this.searchGenre}`)
                .then(
                    res => {
                        this.albums = res.data.response
                    }
                )
        }
    }
})