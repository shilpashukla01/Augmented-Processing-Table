/* Workspace class
   This is the highest level class. All items and groups exist inside it. */
function Workspace ( width, height, id, backgroundColor ) {

	// Required values
	this.width = width;
	this.height = height;

	// Default values if not passed
	this.id = typeof(id) != 'undefined' ? this.id : 1;
	this.backgroundColor = typeof(this.backgroundColor) != 'undefined' ? this.backgroundColor : 'FFFFFF';

}

Workspace.prototype.render = function() {

	var workspaceHTML = "<div class='workspace' id='"+this.id+"' style='display:none;'></div>";
	$("div#main").append(workspaceHTML);
	var workspaceDOMElement = $("div#main > div.workspace");

	$(workspaceDOMElement).css('width', this.width+'px');
	$(workspaceDOMElement).css('height', this.height+'px');
	$(workspaceDOMElement).fadeIn('fast');
}

Workspace.prototype.addItem = function ( item ) {

	$("div.workspace#"+this.id).append( item.getHTML() );
	var itemDOMElement = $("div.item[id=1]");
	this.resizeItemsToFit();

	$(itemDOMElement).fadeIn('fast');
}

Workspace.prototype.resizeItemsToFit = function () {

	var items = $("div.workspace#"+this.id+" > div.item");

	var totalWidthPerItem = this.width/$(items).size();
	var padding = totalWidthPerItem*.05;
	var itemWidth = totalWidthPerItem - (padding*2);

	var maxWidth = window.innerWidth - (padding*2);
	var maxHeight = window.innerHeight - (padding*2);

	if( itemWidth > maxWidth ) {
		itemWidth = maxWidth;
	}

	$(items).each( function () {

		var currentWidth = $(this).width();
		var currentHeight = $(this).height();
		console.log("curr: "+currentHeight);
		var widthPercentage = currentWidth/itemWidth;
		var newHeight = currentHeight*widthPercentage;

		if( newHeight > maxHeight ) {
			newHeight = maxHeight;
		}

		console.log("width: "+itemWidth+" height: "+newHeight);
		$(this).width(itemWidth);
		$(this).height(newHeight);
		$(this).css('padding', padding+'px');
	});
}

Workspace.prototype.addGroup = function ( group ) {

}