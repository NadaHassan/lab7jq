var home = $('#home'); //,'#about','#contact','#order'
home.css('width','280px');
home.css('height','50px');

home.on('mouseover', function(){
home.fadeTo(300,0.25);
});

home.on('mouseleave', function(){
home.fadeTo(300,1);
});

var about = $('#about');
about.css('width','280px');
about.css('height','50px');

about.on('mouseover', function(){
about.fadeTo(300,0.25);
});

about.on('mouseleave', function(){
about.fadeTo(300,1);
});


var contact = $('#contact');
contact.css('width','280px');
contact.css('height','50px');

contact.on('mouseover', function(){
contact.fadeTo(300,0.25);
});

contact.on('mouseleave', function(){
contact.fadeTo(300,1);
});


var order = $('#order');
order.css('width','280px');
order.css('height','50px');

order.on('mouseover', function(){
order.fadeTo(300,0.25);
});

order.on('mouseleave', function(){
order.fadeTo(300,1);
});
