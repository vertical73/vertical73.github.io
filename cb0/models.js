function Model(name, priority, scoring, pvt) {
	this.name = name;
	this.priority = priority; // number, sort ascending (lower is better)
	this.scoring = scoring; // optional
	this.pvt = pvt; // optional
}

function Scoring(beauty, levels, downToFuck, exhibition, shape, tits, ass, legs, anal, broadcast, availability) {
	// number, sort descending (higher is better)
	this.beauty = beauty; // {10..1}
	this.downToFuck; // {5..0}
	this.levels = levels; // {5..0}
	this.exhibition = exhibition; // {5..0}
	this.shape = shape; // {5..0}
	this.tits = tits; // {5..0}
	this.ass = ass; // {5..0}
	this.legs = legs; // {5..0}
	this.anal = anal; // {5..0}
	this.broadcast = broadcast; // {5..0}
	this.availability = availability; // {5..0}
}

function Pvt(allows, rate, recording) {
	this.pvt = pvt; // boolean
	this.rate = rate; // number
	this.recording = recording; // "yes", "no", "sometimes"
}

var $$__Models = new Map();

var $evasasha = Model("evasasha", 1, Scoring(9, 5, 3, 5, 5, 5, 4, 6, 4, 3, 0), Pvt(true, 90, "yes"));
$$__Models.set($evasasha.name, $evasasha);

var $july_koss = Model("july_koss", 21, Scoring(8, 3, 3, 5, 5, 5, 5, 5, 2, 3, 2), Pvt(false, 0, "no")); $$__Models.set($$july_koss.name, $july_koss)
var $mango_shake = Model("mango_shake", 21); $$__Models.set($mango_shake.name, $mango_shake);
var $annie_sweetyxx = Model("annie_sweetyxx", 21); $$__Models.set($annie_sweetyxx.name, $annie_sweetyxx);
var $cogitademe = Model("cogitademe", 21); $$__Models.set($cogitademe.name, $cogitademe);

var $alice_kosmos = Model("alice_kosmos", 22); $$__Models.set($alice_kosmos.name, $alice_kosmos);
var $little_vee = Model("little_vee", 22); $$__Models.set($little_vee.name, $little_vee);
var $lola_bunny94 = Model("lola_bunny94", 22); $$__Models.set($lola_bunny94.name, $lola_bunny94);
var $marylanex = Model("marylanex", 22); $$__Models.set($marylanex.name, $marylanex);

