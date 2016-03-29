Tree = function(){
	
	var self = this;

	this.branches = ko.observableArray();
	this.leaves = ko.observableArray();

	this.addLeaf = function(){
		self.leaves.push('new leaf')
		return self;
	}

	this.addBranch = function (){
		var newBranch = new Tree();

		self.branches.push(newBranch);

		return newBranch;
	}
}