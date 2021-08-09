class Model {
	constructor(name, priority, scoring, pvt) {
		this.name = name;
		this.priority = priority; // number, sort ascending (lower is better)
		this.scoring = scoring; // optional
		this.pvt = pvt; // optional
	}
}

class Scoring {
	constructor(beauty, levels, dtf, exhibition, shape, mangos, peach, bird, greek, broadcast, availability) {
		// number, sort descending (higher is better)
		this.beauty = beauty; // {10..1}
		this.dtf = dtf; // {5..0}
		this.levels = levels; // {5..0}
		this.exhibition = exhibition; // {5..0}
		this.shape = shape; // {5..0}
		this.mangos = mangos; // {5..0}
		this.peach = peach; // {5..0}
		this.bird = bird; // {5..0}
		this.greek = greek; // {5..0}
		this.broadcast = broadcast; // {5..0}
		this.availability = availability; // {5..0}
	}
}

class Pvt { 
	constructor(allows, rate, recording) {
		this.allows = allows; // boolean
		this.rate = rate; // number
		this.recording = recording; // "yes", "no", "sometimes"
	}
}

var $$__Models = new Map();

function addModel(modelName, priority) {
	if (! $$__Models.has(modelName)) {
		let newModel = new Model(modelName, priority); 
		$$__Models.set(modelName, newModel);
	}
}

var $evasasha = new Model("evasasha", 1, new Scoring(9, 5, 3, 5, 5, 5, 4, 6, 4, 3, 0), new Pvt(true, 90, "yes"));
$$__Models.set($evasasha.name, $evasasha);

var $july_koss = new Model("july_koss", 21, new Scoring(8, 3, 3, 5, 5, 5, 5, 5, 2, 3, 2), new Pvt(false, 0, "no")); $$__Models.set($july_koss.name, $july_koss)
var $mango_shake = new Model("mango_shake", 21); $$__Models.set($mango_shake.name, $mango_shake);
var $annie_sweetyxx = new Model("annie_sweetyxx", 21); $$__Models.set($annie_sweetyxx.name, $annie_sweetyxx);
var $cogitademe = new Model("cogitademe", 21); $$__Models.set($cogitademe.name, $cogitademe);
var $yournaughtymiss = new Model("yournaughtymiss", 21); $$__Models.set($yournaughtymiss.name, $yournaughtymiss);

var $alice_kosmos = new Model("alice_kosmos", 22); $$__Models.set($alice_kosmos.name, $alice_kosmos);
var $little_vee = new Model("little_vee", 22); $$__Models.set($little_vee.name, $little_vee);
var $lola_bunny94 = new Model("lola_bunny94", 22); $$__Models.set($lola_bunny94.name, $lola_bunny94);
var $marylanex = new Model("marylanex", 22); $$__Models.set($marylanex.name, $marylanex);
var $tiffanyhouston_ = new Model("tiffanyhouston_", 22); $$__Models.set($tiffanyhouston_.name, $tiffanyhouston_);

let modelsArray = ["evasasha","july_koss","_milkyway","mango_shake","lilly_vanilla","candysfox","yournaughtymiss","annie_sweetyxx","cogitademe","lovely_aria","alice_kosmos","lola_bunny94","juicekatee","anna_sabotage","thepleasureofsex","sweet__sugar","wild_schoolgirl","lolla_molla","hell_lo","hayle_green","_woweva__","catanddickxxx","jessica_jonses","vivian_clark","kinkyali","feelmemore","_virtual_lady_","little_vee","xllodaz","blackmango_mary","tiffanyhouston_","marylanex","liisppb","sweet_tinker_bell","agatha137","evelissa","kleasure","bettybonhill","alicewood_","amazon_girl","melisasweety","funnysimka","qeensgambit","angelinamoore","rennatha21","tonibrock","selfish_ashley","_love_daddys","amazing_roxana","ms_seductive","miley_k18"];

modelsArray.forEach(m => addModel(m, 23));
