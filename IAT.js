define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'green flower', //Will appear in the data.
			title : {
				media : {word : 'Green flower'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		  	{image: 'flower-green.jpg'},
            		{image: 'flower-pink.jpg'},
            		{image: 'flower-yellow.jpg'}, 
    			{image: 'flower-green.jpg'},
            		{image: 'flower-pink.jpg'},
            		{image: 'flower-yellow.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'white flower', //Will appear in the data.
			title : {
				media : {word : 'White flower'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    			{image: 'flower-white.jpg'},
                	{image: 'flower-purple.jpg'},
                	{image: 'flower-red.jpg'},
			{image: 'flower-white.jpg'},
                	{image: 'flower-purple.jpg'},
                	{image: 'flower-red.jpg'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://toni2110.github.io/IAT-Simple/'
		} 
	});
});
