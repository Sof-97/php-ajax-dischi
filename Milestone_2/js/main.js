var app = new Vue ({
    el: '#app',
    data:{
        albums: [],
    },
    created(){
        axios.get('http://localhost/php-ajax-dischi/Milestone_2/api/database.php')
            .then( res=> {
                this.albums = res.data.response;
            })
    }
})