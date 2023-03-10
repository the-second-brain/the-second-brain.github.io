const content = {
	"std_cube": {
		"id": "",
		"title": "",
		"sections": [],
		"connections": []
	},
	"std_section": {
		"id": "",
		"title": "",
		"intro": "",
		"position": -1,
		"active": "true",
		"articles": [],
		"connections": []
	},
	"std_article": {
		"id": "",
		"title": "",
		"archive_date": null,
		"tabs": []
	},
	"std_tab": {
		"id": "",
		"title": "",
		"text": ""
	},
	"std_connection": {
		"id": "",
		"section_ids": [],
		"strength": 0,
		"intro": ""
	}
};

class Cube {
	constructor(obj) {
		this.id = obj.id;
		this.title = obj.title;
		this.sections = [];
		for (let i = 0; i < obj.sections.length; i++) {
			this.sections.push(obj.sections[i]);
		}
		this.connections = [];
		for (let i = 0; i < obj.connections.length; i++) {
			this.connections.push(obj.connections[i]);
		}
	}
}

function new_std_cube(title) {
	let cube = new Cube(content.std_cube);
	cube.title = title;
	cube.id = get_uid();
	for (let i = 0; i < 27; i++) {
		section = new_std_section(i);
		cube.sections.push(section);
	}
	let connections = getConnections(cube.sections);
	cube.connections = connections;
	for (let i = 0; i < cube.sections.length; i++) {
		for (let j = 0; j < connections.length; j++) {
		  	if(connections[j].section_ids.includes(cube.sections[i].id)) {
		  		cube.sections[i].connections.push(connections[j].id);
		  	}
		}
	}

	return cube;
}

class Section {
	constructor(obj) {
		this.id = obj.id;
		this.title = obj.title;
		this.intro = obj.intro;
		this.pos = obj.pos;
		this.active = obj.active;
		this.articles = [];
		for (let i = 0; i < obj.articles.length; i++) {
			this.articles.push(obj.articles[i]);
		}
		this.connections = [];
		for (let i = 0; i < obj.connections.length; i++) {
			this.connections.push(obj.connections[i]);
		}
	}
}

function new_std_section(pos) {
	section = new Section(content.std_section);
	section.id = get_uid();
	section.pos = pos;
	section.active = 1;
	title = "";
	if (pos % 3 == 0) {
		title += "Fakta kring ";
	} else if (pos % 3 == 1) {
		title += "Tidigare ";
	}
	if (Math.floor(pos / 3) % 3 == 0) {
		title += "f??ruts??ttningar ";
		if (pos % 3 == 2) {
			title = "F??ruts??ttningar ";
		}
	} else if (Math.floor(pos / 3) % 3 == 1) {
		title += "handlingsplaner ";
		if (pos % 3 == 2) {
			title = "Handlingsplaner ";
		}
	} else {
		title += "m??ls??ttningar ";
		if (pos % 3 == 2) {
			title = "M??ls??ttningar ";
			//section.articles.push(new_std_article());
			//section.articles.push(new_std_article2());
			//section.articles.push(new_std_article3());
		}
	}
	if (Math.floor(pos / 9) == 0) {
		title += "p?? individniv??";
	} else if (Math.floor(pos / 9) == 1) {
		title += "p?? gruppniv??";
	} else {
		title += "p?? organisationsniv??";
	}
	section.title = title;
	section.intro = 'H??r finns en kort beskrivning av omr??det "' + title + '". Texten f??rklarar omr??det och beskriver arbetet som ska utf??ras h??r.';
	//section.articles.push(new_std_article());
	
	return section;
}

class Article {
	constructor(obj) {
		this.id = obj.id;
		this.title = obj.title;
		this.archive_date = obj.archive_date;
		this.tabs = [];
		for (let i = 0; i < obj.tabs.length; i++) {
			this.tabs.push(obj.tabs[i]);
		}
	}
}

function new_std_article() {
	article = new Article(content.std_article);
	article.id = get_uid();
	article.title = "Exempel textformattering";
	let tab = new_std_tab();
	tab.title = "Fet text";
	tab.text = '<b>Den h??r texten blir fet</b>';
	article.tabs.push(tab);
	tab = new_std_tab();
	tab.title = "Kursiv text";
	tab.text = '<i>Den h??r texten blir kursiv</i>';
	article.tabs.push(tab);
	tab = new_std_tab();
	tab.title = "Radbrytning";
	tab.text = 'S??h??r g??rs<br>ny rad.<br><br>Och nytt stycke.';
	article.tabs.push(tab);
	tab = new_std_tab();
	tab.title = "Storlek";
	tab.text = "<div style='font-size: 30px'>Stort stycke</div><div style='font-size: 20px'>Mindre stycke</div>";
	article.tabs.push(tab);
	
	return article;
}

function new_std_article2() {
	article = new Article(content.std_article);
	article.id = get_uid();
	article.title = "Exempel lista och l??nk";
	let tab = new_std_tab();
	tab.title = "Punktlista";
	tab.text = '<ul><li>S??h??r</li><li>G??rs</li><li>Punktlistor</li></ul>';
	article.tabs.push(tab);
	tab = new_std_tab();
	tab.title = "Numrerad lista";
	tab.text = '<ol><li>S??h??r</li><li>G??rs</li><li>Numrerade listor</li></ol>';
	article.tabs.push(tab);
	tab = new_std_tab();
	tab.title = "L??nk";
	tab.text = "Det h??r ??r en l??nk: <a href='https://www.zebrain.se/'>Zebrain</a>";
	article.tabs.push(tab);
	
	return article;
}

function new_std_article3() {
	article = new Article(content.std_article);
	article.id = get_uid();
	article.title = "Exempel bild och video";
	let tab = new_std_tab();
	tab.title = "Stor bild";
	tab.text = "Ge bilden r??tt namn och skicka till mig s?? l??ggs den in i systemet. Den h??r bilden heter brain.jpg och ??r redan inlagd, d??rf??r fungerar den):<img style='width: 100%; height: 100%; object-fit: cover; ' src='/images/brain.jpg'>";
	article.tabs.push(tab);
	tab = new_std_tab();
	tab.title = "Text och bild";
	tab.text = "S??h??r kan du l??gga text och bild bredvid varandra:<div style='display: grid; grid-auto-columns: 1fr; grid-auto-flow: column; margin: 10px;'><div style='margin-right: 10px;'>H??r ska texten st??.</div><div><img style='width: 100%; height: 100%; object-fit: cover;' src='/images/brain.jpg'></div></div>";
	article.tabs.push(tab);
	tab = new_std_tab();
	tab.title = "Youtube-video";
	tab.text = "S??h??r g??rs en inb??ddad Youtube-video (??ndra K7QBnuF6dHg i l??nken till koden f??r videon (finns sist i url:en)):<div style= 'text-align: center; background: #000';><iframe style= 'display: inline-block' width='500' height='300' src='https://www.youtube.com/embed/K7QBnuF6dHg' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe></div>";
	article.tabs.push(tab);
	
	return article;
}

class Tab {
	constructor(obj) {
		this.id = obj.id;
		this.title = obj.title;
		this.text = obj.text;
	}
}

function new_std_tab() {
	tab = new Tab(content.std_tab);
	tab.id = get_uid();
	return tab;
}

class Connection {
	constructor(obj) {
		this.id = obj.id;
		this.section_ids = obj.section_ids;
		this.strength = obj.strength;
		this.intro = obj.intro;
	}
}

function new_std_connection() {
	let connection = new Connection(content.std_connection);
	connection.id = get_uid();
	return connection;
}

class Presentation {
	constructor(pos, title, text, active_list, strength_list) {
		this.pos = pos;
		this.title = title;
		this.text = text;
		this.active_list = active_list;
		this.strength_list = strength_list;
	}
}

function get_uid () {
	return Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36);
}

function getConnections(sections) {
	let connections = [];

	connections.push(getConnection(sections, 0, 2, "Har f??ruts??ttningarna utformats utifr??n forskning och fakta?"));
	connections.push(getConnection(sections, 1, 2, "Har f??ruts??ttningarna anpassats utifr??n utv??rdering och erfarenheter av tidigare f??ruts??ttningar?"));
	connections.push(getConnection(sections, 1, 5, "Har handlingsplanerna anpassats utifr??n utv??rdering och erfarenheter av tidigare f??ruts??ttningar?"));
	connections.push(getConnection(sections, 2, 5, "Finns det f??ruts??ttningar f??r att handlingsplanerna ska kunna genomf??ras?"));
	connections.push(getConnection(sections, 2, 8, "Finns det f??ruts??ttningar f??r att m??ls??ttningarna ska kunna uppn??s?"));
	connections.push(getConnection(sections, 2, 11, "St??mmer f??ruts??ttningarna p?? grupp- och individniv?? v??l ??verens?"));
	connections.push(getConnection(sections, 2, 14, "Finns det f??ruts??ttningar p?? individniv?? f??r att handlingsplanerna p?? grupniv?? ska kunna genomf??ras?"));
	connections.push(getConnection(sections, 3, 5, "Har handlingsplanerna utformats utifr??n forskning och fakta?"));
	connections.push(getConnection(sections, 4, 5, "Har handlingsplanerna anpassats utifr??n utv??rdering och erfarenheter av tidigare handlingsplaner?"));
	connections.push(getConnection(sections, 5, 8, "Leder handlingsplanerna till att m??ls??ttningarna uppn??s?"));
	connections.push(getConnection(sections, 5, 14, "St??mmer handlingsplanerna p?? grupp- och individniv?? v??l ??verens?"));
	connections.push(getConnection(sections, 5, 17, "Leder handlingsplanerna p?? individniv?? till att m??ls??ttningarna p?? gruppniv?? uppn??s?"));
	connections.push(getConnection(sections, 5, 26, "Leder handlingsplanerna p?? individniv?? till att m??ls??ttningarna p?? organisationsniv?? uppn??s?"));
	connections.push(getConnection(sections, 6, 8, "Har m??ls??ttningar och visioner utformats utifr??n forskning och fakta?"));
	connections.push(getConnection(sections, 7, 8, "Har m??ls??ttningarna anpassats utifr??n utv??rdering och erfarenheter av tidigare m??ls??ttningar?"));
	connections.push(getConnection(sections, 8, 17, "St??mmer m??ls??ttningarna p?? grupp- och individniv?? v??l ??verens?"));
	
	connections.push(getConnection(sections, 9, 11, "Har f??ruts??ttningarna utformats utifr??n forskning och fakta?"));
	connections.push(getConnection(sections, 10, 11, "Har f??ruts??ttningarna anpassats utifr??n utv??rdering och erfarenheter av tidigare f??ruts??ttningar?"));
	connections.push(getConnection(sections, 10, 14, "Har handlingsplanerna anpassats utifr??n utv??rdering och erfarenheter av tidigare f??ruts??ttningar?"));
	connections.push(getConnection(sections, 11, 14, "Finns det f??ruts??ttningar f??r att handlingsplanerna ska kunna genomf??ras?"));
	connections.push(getConnection(sections, 11, 17, "Finns det f??ruts??ttningar f??r att m??ls??ttningarna ska kunna uppn??s?"));
	connections.push(getConnection(sections, 11, 20, "St??mmer f??ruts??ttningarna p?? grupp- och organisationsniv?? v??l ??verens?"));
	connections.push(getConnection(sections, 11, 26, "Finns det f??ruts??ttningar p?? gruppniv?? f??r att handlingsplanerna p?? organisationsniv?? ska kunna genomf??ras?"));
	connections.push(getConnection(sections, 12, 14, "Har handlingsplanerna utformats utifr??n forskning och fakta?"));
	connections.push(getConnection(sections, 13, 14, "Har handlingsplanerna anpassats utifr??n utv??rdering och erfarenheter av tidigare handlingsplaner?"));
	connections.push(getConnection(sections, 14, 17, "Leder handlingsplanerna till att m??ls??ttningarna uppn??s?"));
	connections.push(getConnection(sections, 14, 23, "St??mmer handlingsplanerna p?? grupp- och organisationsniv?? v??l ??verens?"));
	connections.push(getConnection(sections, 14, 26, "Leder handlingsplanerna p?? gruppniv?? till att m??ls??ttningarna p?? organisationsniv?? uppn??s?"));
	connections.push(getConnection(sections, 15, 17, "Har m??ls??ttningar och visioner utformats utifr??n forskning och fakta?"));
	connections.push(getConnection(sections, 16, 17, "Har m??ls??ttningarna anpassats utifr??n utv??rdering och erfarenheter av tidigare m??ls??ttningar?"));
	connections.push(getConnection(sections, 17, 26, "St??mmer m??ls??ttningarna p?? grupp- och organisationsniv?? v??l ??verens?"));
	
	connections.push(getConnection(sections, 18, 20, "Har f??ruts??ttningarna utformats utifr??n forskning och fakta?"));
	connections.push(getConnection(sections, 19, 20, "Har f??ruts??ttningarna anpassats utifr??n utv??rdering och erfarenheter av tidigare f??ruts??ttningar?"));
	connections.push(getConnection(sections, 19, 23, "Har handlingsplanerna anpassats utifr??n utv??rdering och erfarenheter av tidigare f??ruts??ttningar?"));
	connections.push(getConnection(sections, 20, 23, "Finns det f??ruts??ttningar f??r att handlingsplanerna ska kunna genomf??ras?"));
	connections.push(getConnection(sections, 20, 26, "Finns det f??ruts??ttningar f??r att m??ls??ttningarna ska kunna uppn??s?"));

	connections.push(getConnection(sections, 21, 23, "Har handlingsplanerna utformats utifr??n forskning och fakta?"));
	connections.push(getConnection(sections, 22, 23, "Har handlingsplanerna anpassats utifr??n utv??rdering och erfarenheter av tidigare handlingsplaner?"));
	connections.push(getConnection(sections, 23, 26, "Leder handlingsplanerna till att m??ls??ttningarna uppn??s?"));

	connections.push(getConnection(sections, 24, 26, "Har m??ls??ttningar och visioner utformats utifr??n forskning och fakta?"));
	connections.push(getConnection(sections, 25, 26, "Har m??ls??ttningarna anpassats utifr??n utv??rdering och erfarenheter av tidigare m??ls??ttningar?"));
	
	return connections;
}

function getConnection(sections, pos1, pos2, intro) {
	let connection = new_std_connection();
	connection.section_ids = [sections[pos1].id, sections[pos2].id];
	connection.intro = intro;
	return connection;
}


			
