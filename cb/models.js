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

let fn__annie_sweetyxx = async () => { addModel("annie_sweetyxx", 21); }
fn__annie_sweetyxx();
let fn__cogitademe = async () => addModel("cogitademe", 21);
fn__cogitademe();
let fn__yournaughtymiss = async () => addModel("yournaughtymiss", 21);
fn__yournaughtymiss();

// var $candysfox = new Model("candysfox", 22); $$__Models.set($candysfox.name, $candysfox);
// var $lola_bunny94 = new Model("lola_bunny94", 22); $$__Models.set($lola_bunny94.name, $lola_bunny94);
// var $anna_sabotage = new Model("anna_sabotage", 22); $$__Models.set($anna_sabotage.name, $anna_sabotage);
// var $lovely_aria = new Model("lovely_aria", 22); $$__Models.set($lovely_aria.name, $lovely_aria);
// var $alice_kosmos = new Model("alice_kosmos", 22); $$__Models.set($alice_kosmos.name, $alice_kosmos);
// var $tiffanyhouston_ = new Model("tiffanyhouston_", 22); $$__Models.set($tiffanyhouston_.name, $tiffanyhouston_);
// var $juicekatee = new Model("juicekatee", 22); $$__Models.set($juicekatee.name, $juicekatee);
// var $little_vee = new Model("little_vee", 22); $$__Models.set($little_vee.name, $little_vee);
// var $marylanex = new Model("marylanex", 22); $$__Models.set($marylanex.name, $marylanex);

let tierA = ["evasasha","july_koss","_milkyway","mango_shake","lilly_vanilla","cogitademe","hayley__lee","candysfox","yournaughtymiss","annie_sweetyxx","lovely_aria","anna_sabotage","lolla_molla","hell_lo","lola_bunny94","thepleasureofsex","sweet__sugar","wild_schoolgirl","_woweva__","catanddickxxx"];
let fn__tierA = async () => { tierA.forEach(m => addModel(m, 23)); }
fn__tierA();

let tierB = ["jessica_jonses","little_vee","qeensgambit","vilanelle_1","miss_soniya","tiffanyhouston_","selfish_ashley","alice_kosmos","poliina","amelie_25","rennatha21","jia_roberts","sweet_tinker_bell","marylanex","eatmystrawberryx","blackmango_mary","kinkyali","feelmemore","_virtual_lady_","britney_charm","_ayya","hayle_green","evelissa","funnysimka","mynaughtynights","sweetsnejana","melisasweety","cunty_paradise","kattyababy","maryvi","daddystrouble","amazon_girl","vivian_clark","sophiesticate","kate_loves_you","lillpio","miley_k18","merrilyn","juicekatee","sallysarry","touch_me111","agatha137","joobeelee","dreamana","cutemoments","sasha_slim","meru_s","eva_nelson","lizzymoore","ritaorra_","ellaa91","alexandrasm1th","bunnyfunny_"];
let fn__tierB = async () => { tierB.forEach(m => addModel(m, 30)); }
fn__tierB();

const $$__Params = new URLSearchParams(window.location.search);

function makeAddendums() {
	let modelKeys = ['model','m'];
	for (k of modelKeys) {
		let moar = $$__Params.getAll(k);
		for (m of moar) {
			if (! $$__Models.has(m)) {
				addModel(m, 110);
			}
		}
	}
	for (h of $$__Params.getAll('h')) {
		if ($$__Models.has(h)) {
			$$__Models.delete(h);
		}
	}	
}
makeAddendums();

