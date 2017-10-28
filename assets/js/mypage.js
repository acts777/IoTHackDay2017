new Vue({
  el: '#vueApp',
  data: {
    debug: true,
    users: []
  },
  methods: {
    loadUsers: function() {
    
      $.post('https://api.particle.io/v1/devices/240025000f51353338363333/solenoidOn?access_token=1e981bdd5c6de6981760b313c35efc2ef3853054', {}, function(data, status, request){
        if(status == 200)
        {
        	var myData = data;
        }
      });
    } 
  }
});