
function populateColorSectionFields() {
	// The color names and hex value arrays correspond to each other. The color names are ordered alphabetically and the hex values follow that alphabetical order (were the hex value the color name instead) and correlate positively with one another, so that index 0, 1, 2, ... of each array relate to one another all the way to the end.
	var css_color_names = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple", "RebeccaPurple", "Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];


	var css_color_hex_values = ['#F0F8FF','#FAEBD7','#00FFFF','#7FFFD4','#F0FFFF','#F5F5DC','#FFE4C4','#000000','#FFEBCD','#0000FF','#8A2BE2','#A52A2A','#DEB887','#5F9EA0','#7FFF00','#D2691E','#FF7F50','#6495ED','#FFF8DC','#DC143C','#00FFFF','#00008B','#008B8B','#B8860B','#A9A9A9','#A9A9A9','#006400','#BDB76B','#8B008B','#556B2F','#FF8C00','#9932CC','#8B0000','#E9967A','#8FBC8F','#483D8B','#2F4F4F','#2F4F4F','#00CED1','#9400D3','#FF1493','#00BFFF','#696969','#696969','#1E90FF','#B22222','#FFFAF0','#228B22','#FF00FF','#DCDCDC','#F8F8FF','#FFD700','#DAA520','#808080','#808080','#008000','#ADFF2F','#F0FFF0','#FF69B4','#CD5C5C','#4B0082','#FFFFF0','#F0E68C','#E6E6FA','#FFF0F5','#7CFC00','#FFFACD','#ADD8E6','#F08080','#E0FFFF','#FAFAD2','#D3D3D3','#D3D3D3','#90EE90','#FFB6C1','#FFA07A','#20B2AA','#87CEFA','#778899','#778899','#B0C4DE','#FFFFE0','#00FF00','#32CD32','#FAF0E6','#FF00FF','#800000','#66CDAA','#0000CD','#BA55D3','#9370DB','#3CB371','#7B68EE','#00FA9A','#48D1CC','#C71585','#191970','#F5FFFA','#FFE4E1','#FFE4B5','#FFDEAD','#000080','#FDF5E6','#808000','#6B8E23','#FFA500','#FF4500','#DA70D6','#EEE8AA','#98FB98','#AFEEEE','#DB7093','#FFEFD5','#FFDAB9','#CD853F','#FFCOCB','#DDA0DD','#B0E0E6','#800080','#663399','#FF0000','#BC8F8F','#4169E1','#8B4513','#FA8072','#F4A460','#2E8B57','#FFF5EE','#A0522D','#C0C0C0','#87CEEB','#6A5ACD','#708090','#708090','#FFFAFA','#00FF7F','#4682B4','#D2B48C','#008080','#D8BFD8','#FF6347','#40E0D0','#EE82EE','#F5DEB3','#FFFFFF','#F5F5F5','#FFFF00','#9ACD32'];

	var css_color_rgb_values = ['240,248,255','250,235,215','0,255,255','127,255,212','240,255,255 ','245,245,220','255,228,196','0,0,0','255,235,205','0,0,255','138,43,226','165,42,42','222,184,135','95,158,160','127,255,0','210,105,30','255,127,80','100,149,237','255,248,220','220,20,60','0,255,255','0,0,139','0,139,139','184,134,11','169,169,169','169,169,169','0,100,0','189,183,107','139,0,139','85,107,47','255,140,0','153,50,204','139,0,0','233,150,122','143,188,143','72,61,139','47,79,79','47,79,79','0,206,209','148,0,211','255,20,147','0,191,255','105,105,105','105,105,105','30,144,255','178,34,34','255,250,240','34,139,34','255,0,255','220,220,220','248,248,255','255,215,0','218,165,32','128,128,128','128,128,128','0,128,0','173,255,47','240,255,240','255,105,180','205,92,92','75,0,130','255,255,240','240,230,140','230,230,250','255,240,245','124,252,0','255,250,205','173,216,230','240,128,128','224,255,255','250,250,210','211,211,211','211,211,211','144,238,144','255,182,193','255,160,122','32,178,170','135,206,250','119,136,153','119,136,153','176,196,222','255,255,224','0,255,0','50,205,50','250,240,230','255,0,255','128,0,0','102,205,170','0,0,205','186,85,211','147,112,219','60,179,113','123,104,238','0,250,154','72,209,204','199,21,133','25,25,112','245,255,250','255,228,225','255,228,181','255,222,173','0,0,128','253,245,230','128,128,0','107,142,35','255,165,0','255,69,0','218,112,214','238,232,170','152,251,152','175,238,238','219,112,147','255,239,213','255,218,185','205,133,63','255,192,203','221,160,221','176,224,230','128,0,128','102,51,153','255,0,0','188,143,143','65,105,225','139,69,19','250,128,114','244,164,96','46,139,87','255,245,238','160,82,45','192,192,192','135,206,235','106,90,205','112,128,144','112,128,144','255,250,250','0,255,127','70,130,180','210,180,140','0,128,128','216,191,216','255,99,71','64,224,208','238,130,238','245,222,179','255,255,255','245,245,245','255,255,0','154,205,50'];

	

	for(var i = 0; i < css_color_names.length; i++) {

		// Get the color sections.
		var color_sections = document.getElementsByClassName('color-section')[i];

		// Variables to keep track of and easily utilize the loops current
	    // color index values. Every iteration of the loop will move on 
	    // to the next color in the 'css_color_names' array and its
	    // corresponding values in the 'css_color_hex_values' and the
	    // 'css_color_rgb_values' arrays.
		var current_color_name = css_color_names[i];
		var current_color_hex_value = css_color_hex_values[i];
	    var current_color_rgb_value = css_color_rgb_values[i];

	    // Used to display the color index to the user in a more 
		// familiar format. ie. instead of using 0 as the first index
		// number to display to the user we use the non zero based
		// index value which starts at 1.
		non_zero_based_color_index = (i + 1);

		// Populate text element fields.

		var color_name_headers = document.getElementsByClassName('color-name')[i];
		color_name_headers.innerHTML = current_color_name;

		var color_hex_value_paras = document.getElementsByClassName('color-hex-value');
		color_hex_value_paras[i].innerHTML = current_color_hex_value;

		var color_rgb_value_paras = document.getElementsByClassName('color-rgb-value');
		color_rgb_value_paras[i].innerHTML = '(' + current_color_rgb_value + ')';


		// Event Handlers

	    // Triggered when one of the color grid item sections are hovered over.
	    // color_sections.onmouseover = function() {
	    //     this.style.backgroundColor = css_color_names[i];
	    //     this.style.color = '#F7F7F7';
	    // }
	    
	    // Triggered when the mouse leaves one of the color grid items.
	    // color_sections.onmouseleave = function() {
	    //     this.style.backgroundColor = '#F7F7F7' + '!important';
	    // 	this.style.color = '#3A3A3A';
	    // }

	}

}