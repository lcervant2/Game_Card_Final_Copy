	var memory_array = ["queen", "queen", "king", "king"];
	var memory_values = [];
	var memory_card_ids = [];
	var cards_flipped = 0;
	Array.prototype.memory_tile_shuffle = function(){
	    var i = this.length, j, temp;
	    while(--i > 0){
	        j = Math.floor(Math.random() * (i+1));
	        temp = this[j];
	        this[j] = this[i];
	        this[i] = temp;
	    }
	}
	function newBoard(){
		cards_flipped = 0;
		var output = '';
	    memory_array.memory_card_shuffle();
		for(var i = 0; i < memory_array.length; i++){
			output += '<div id="card_'+i+'" onclick="memoryFlipCard(this,\''+memory_array[i]+'\')"></div>';
		}
		
	}
	function memoryFlipCard(card,val){
		
			if(memory_values.length == 0){
				memory_values.push(val);
				memory_card_ids.push(card.id);
			} else if(memory_values.length == 1){
				memory_values.push(val);
				memory_card_ids.push(card.id);
				if(memory_values[0] == memory_values[1]){
					cards_flipped += 2;
					// Clear both arrays
					memory_values = [];
	            	memory_card_ids = [];
					// Check to see if the whole board is cleared
					if(cards_flipped == memory_array.length){
						alert("You Found a match!... Sorry, try again.");
						document.getElementById('memory_board').innerHTML = "";
						newBoard();
					}
				} else {
					function flip2Back(){
					    // Flip the 2 tiles back over
					    var card_1 = document.getElementById(memory_card_ids[0]);
					    var card_2 = document.getElementById(memory_card_ids[1]);
					    
	            	    
					    // Clear both arrays
					    memory_values = [];
	            	    memory_card_ids = [];
					}
					setTimeout(flip2Back, 700);
				}
			}
		}
	

