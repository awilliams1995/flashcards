exports.cloze = function(text,cloze){
	if(!text.includes(cloze)){console.log("error"); return}
return{
	fullText:text,
	cloze,
	partialText: text.replace(cloze,"...")
};
};
