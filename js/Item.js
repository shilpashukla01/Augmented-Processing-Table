function Item ( parent, width, height, imageURL, id ) {

	// Mandatory arguments
	this.parent = parent;
	this.width = width;
	this.height = height;

	this.imageURL = imageURL;

	// Default arguments
	this.id = typeof(id) != 'undefined' ? this.id : 1;
}

Item.prototype.getId = function () {

	return this.id;
}

Item.prototype.getHTML = function () {
	var itemHTML = "<div class='item' id='"+this.id+"' style='display:none;width:"+this.width+"px;height:"+this.height+"px;'><img src='"+this.imageURL+"'/></div>";

	return itemHTML;
}

Item.prototype.setPos = function ( x, y ) {
	// jQuery move
}

Item.prototype.rotate = function ( event ) {

}

Item.prototype.displayMetadataWindow = function () {

}

Item.prototype.updateMetadata = function () {
	// save metadata to object
}
