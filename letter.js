Display = function(word){
	this.wordArray = word.split(''),
	this.dash = [],
	this.updated,
	this.originalDisplay = function(){
		for(i=0;i<this.wordArray.length;i++){
			if(this.wordArray[i] === ' '){
				x = ' ';
				this.dash.push(x);
			}
			else{
				x = '-';
				this.dash.push(x);
			}
		}
		console.log(this.dash.join(''));
	},
	this.updatedDisplay = function(letter){
		for(i=0;i<this.wordArray.length;i++){
			if(letter == this.wordArray[i]){
				this.dash.splice(i, 1, letter);
			}
		}
		this.updated = this.dash.join('');
		console.log(this.updated);
	},
	this.checkForWin = function(){

		}
}
