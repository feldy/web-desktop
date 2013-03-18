Ext.define("app.feldy.Form", {
	config: {
		Author: "feldy yusuf",
		Model : "rr"
	},
	constructor: function(config){
		this.initConfig(config);
	},
	getAuthor: function(){
		return this.Author;
	},
	setAuthor: function(value){
		this.Author = value;
	},
	applyAuthor: function(author){
		Ext.get("author").update(author);
	},
	getModel: function(){
		return this.Model;
	},
	setModel: function(value){
		this.Model = value;
	},
	applyModel: function(model){
		Ext.get("model").update(model);
	},
	getDetail: function(){
		console.log("Author -> "+this.getAuthor +" Model -> "+this.getModel);
	}
}, function(){
	console.log("berhasil load");
});
