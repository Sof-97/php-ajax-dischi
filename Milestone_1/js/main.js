var app = new Vue ({
    el: '#app',
    data:{
        albums: [],
    },
    created(){
        axios.get('http://localhost/php-ajax-dischi/api/database.php')
            .then( res=> {
                this.albums = res.data.response;
            })
    }
})