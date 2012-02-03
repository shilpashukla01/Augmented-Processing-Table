/* This is the main program body that gets executed once the browser 
is finished rendering the page. */
$(document).ready(function() {

	var workspace = new Workspace( window.innerWidth, window.innerHeight );
	workspace.render();

	var item1 = new Item( this, 300, 300, 'http://everest.ischool.utexas.edu/~jeff/apt/uclamss_2010_b79_f3_3-4.jpg' );

	workspace.addItem(item1);
});
