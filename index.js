dictionary = {
  fuck: "fak",
  the: "de",
  no: "yes"
}

function Japanizator(str){
	let words = str.split(" ");
	let comma = false;

	for(i=0;i<words.length;i++){
		lword = words[i].toLowerCase();

		if(lword.search(",") >= 0){
			lword = lword.replace(",", "");
			comma = true;
		}

		if(dictionary[lword]){
			if(comma)
				str = str.replace(words[i], dictionary[lword] + ",");
			else
				str = str.replace(words[i], dictionary[lword]);
		}
		comma = false;
	}
	return str;
}

var jianYang = Japanizator("no, Fuck the police");
console.log("\n\n- Jian Yang says: " + jianYang);
