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
	if (Math.floor(pos / 3) % 3 == 0) {
		title += "Förutsättningar<br>";
	} else if (Math.floor(pos / 3) % 3 == 1) {
		title += "Aktiviteter<br>";
	} else {
		title += "Mission<br>";
		if (pos % 3 == 2) {
			//section.articles.push(new_std_article());
			//section.articles.push(new_std_article2());
			//section.articles.push(new_std_article3());
		}
	}
	if (Math.floor(pos / 9) == 0) {
		title += "Individer<br>";
	} else if (Math.floor(pos / 9) == 1) {
		title += "Grupper<br>";
	} else {
		title += "Organisation<br>";
	}
	if (pos % 3 == 0) {
		title += "Fakta<br>";
	} else if (pos % 3 == 1) {
		title += "Historik<br>";
	} else {
		title += "Aktuella planer<br>";
	}
	section.title = title;
	switch (pos) {
		case 0:
			section.intro = 'Här finns forskning och fakta samlat om Förutsättningar för individer med vad som krävs för att klara av att genomföra aktiviteter som ska leda till att nå olika missions med visioner och mål.<br><br>Externa förutsättningar kan vara:<ul><li>Praktiska (Konjunktur, politik, konkurrens, organisationens resurser, etc)</li><li>Psykologiska (Kultur, trender i omvärlden och i organisationen, etc)</li></ul>Interna förutsättningar kan vara:<ul><li>Praktiska (Ekonomi, lokaler, datakapacitet, etc)</li><li>Psykologiska (Kompetens, motivation, kultur, personligheter, beteendemönster, etc)</li></ul>'
		break;
		case 1:
			section.intro = 'Här finns tidigare Förutsättningar för individen lagrade med vad man bedömde krävdes för att klara av att genomföra de aktiviteter som skulle leda till att nå missions med visioner och mål. Här finns även lagrat vilka förutsättningar som fanns i verkligheten samt vad det gav för resultat.<br><br>Externa förutsättningar kan vara:<ul><li>Praktiska (Konjunktur, politik, konkurrens, organisationens resurser, etc)</li><li>Psykologiska (Kultur, trender i omvärlden och i organisationen, etc)</li></ul>Interna förutsättningar kan vara:<ul><li>Praktiska (Ekonomi, lokaler, datakapacitet, etc)</li><li>Psykologiska (Kompetens, motivation, kultur, personligheter, beteendemönster, etc)</li></ul>'
		break;
		case 2:
			section.intro = 'Här arbetar man med de Förutsättningar som krävs av individen för att klara av genomförandet av de aktiviteter man definierat för att nå en specifik mission med visioner och mål.<br><br>Externa förutsättningar kan vara:<ul><li>Praktiska (Konjunktur, politik, konkurrens, organisationens resurser, etc)</li><li>Psykologiska (Kultur, trender i omvärlden och i organisationen, etc)</li></ul>Interna förutsättningar kan vara:<ul><li>Praktiska (Ekonomi, lokaler, datakapacitet, etc)</li><li>Psykologiska (Kompetens, motivation, kultur, personligheter, beteendemönster, etc)</li></ul>'
		break;
		case 3:
			section.intro = 'Här finns fakta och forskning samlat om hur man arbetar man med Aktiviteter för individer med syftet att genomföra olika missions och uppnå visioner och mål. Det kan vara ett för större eller mindre uppdrag, på kortare eller längre sikt.<br><br>Exempelvis:<ul><li>Hur arbetar man med effektiva strategier för olika områden?</li><li>Hur skapar man samverkan med andra personer, grupper och hela organisationen?</li><li>Hur arbetar man med effektiva taktiska planer?</li><li>Hur planerar man för kontinuerlig uppföljning av aktiviteter och resultat?</li><li>Hur undviker man vanliga misstag i olika typer av verksamheter?</li></ul>'
		break;
		case 4:
			section.intro = 'Här finns tidigare Aktiviteter för individer lagrade med vad det gav för resultat. Vilka aktiviteter satsades på för att genomföra Missions och uppnå Visioner och Övergripande Mål? Syftet är att dra lärdomar inför nya aktiviteter.<br><br>Exempelvis:<ul><li>Strategier för olika områden</li><li>Samverkan med andra personer, grupper och hela organisationen</li><li>Taktiska planer</li><li>Detaljerade planer för uppföljning</li><li>Vilka resultat uppnåddes?</li></ul>'
		break;
		case 5:
			section.intro = 'Här arbetar man med Aktiviteter för en individ för att kunna genomföra en specifik Mission och uppnå dess Visioner och Mål.<br><br>Det kan handla om:<ul><li>Strategier för olika områden</li><li>Samverkan med andra personer, grupper och hela organisationen</li><li>Taktiska planer</li><li>Detaljerade planer för uppföljning</li></ul>'
		break;
		case 6:
			section.intro = 'Här finns fakta och forskning samlat om hur man arbetar man med en individs Mission. Det kan vara större eller mindre uppdrag, på kortare eller längre sikt.<ul><li>Hur formulerar man ett uppdrag med syfte och mål?</li><li>Hur arbetar man med en verksamhetsidé för en individ?</li><li>Hur sätter man effektiva mål?</li><li>Hur formulerar man kraftfulla visioner?</li><li>Hur följer man upp ett uppdrag?</li></ul>'
		break;
		case 7:
			section.intro = 'Här finns tidigare Missions för individer lagrade med vad det gav för resultat. Syftet är att dra lärdomar inför nya uppdrag.<ul><li>Hur såg uppdragen ut?</li><li>Vad skulle uppnås?</li><li>Vilka resultat nåddes?</li><li>Hur skedde uppföljningen?</li></ul>'
		break;
		case 8:
			section.intro = 'Här arbetar man med Mission för en individ. Det kan vara ett större eller mindre uppdrag, på kortare eller längre sikt.<ul><li>Hur ser uppdraget ut?</li><li>Vad skall uppnås?</li><li>Hur ser uppföljningen ut?</li></ul>Exempel: Verksamhetsidé, projektidé, visioner och mål.'
		break;
		case 9:
			section.intro = 'Här finns forskning och fakta samlat om Förutsättningar för grupper med vad som krävs för att klara av att genomföra aktiviteter som ska leda till att nå olika missions med visioner och mål.<br><br>Externa förutsättningar kan vara:<ul><li>Praktiska (Konjunktur, politik, konkurrens, organisationens resurser, etc)</li><li>Psykologiska (Kultur, trender i omvärlden och i organisationen, etc)</li></ul>Interna förutsättningar kan vara:<ul><li>Praktiska (Ekonomi, lokaler, datakapacitet, etc)</li><li>Psykologiska (Kompetens, motivation, kultur, personligheter, beteendemönster, etc)</li></ul>'
		break;
		case 10:
			section.intro = 'Här finns tidigare Förutsättningar för grupper lagrade med vad man bedömde krävdes för att klara av att genomföra de aktiviteter som skulle leda till att nå missions med visioner och mål. Här finns även lagrat vilka förutsättningar som fanns i verkligheten samt vad det gav för resultat.<br><br>Det handlar om Externa förutsättningar som:<ul><li>Praktiska (Konjunktur, politik, konkurrens, etc)</li><li>Psykologiska (Kultur, trender, etc)</li></ul>Samt Interna förutsättningar som:<ul><li>Praktiska (Ekonomi, lokaler, datakapacitet, etc)</li><li>Psykologiska (Kompetens, motivation, kultur, personligheter, beteendemönster, etc)</li></ul>'
		break;
		case 11:
			section.intro = 'Här arbetar man med de Förutsättningar som krävs av gruppen för att klara av genomförandet av de aktiviteter man definierat för att nå en specifik mission med visioner och mål.<br><br>Externa förutsättningar kan vara:<ul><li>Praktiska (Konjunktur, politik, konkurrens, organisationens resurser, etc)</li><li>Psykologiska (Kultur, trender i omvärlden och i organisationen, etc)</li></ul>Interna förutsättningar kan vara:<ul><li>Praktiska (Ekonomi, lokaler, datakapacitet, etc)</li><li>Psykologiska (Kompetens, motivation, kultur, personligheter, beteendemönster, etc)</li></ul>'
		break;
		case 12:
			section.intro = 'Här finns fakta och forskning samlat om hur man arbetar man med Aktiviteter för grupper med syftet att genomföra olika Missions och uppnå Visioner och Övergripande Mål Det kan vara ett för större eller mindre uppdrag, på kortare eller längre sikt.<br><br>Exempelvis:<ul><li>Hur arbetar man med effektiva strategier för olika områden?</li><li>Hur skapar man samverkan mellan olika enheter?</li><li>Hur arbetar man med effektiva taktiska planer?</li><li>Hur planerar man för kontinuerlig uppföljning av aktiviteter och resultat?</li><li>Hur undviker man vanliga misstag i olika typer av verksamheter?</li></ul>'
		break;
		case 13:
			section.intro = 'Här finns tidigare Aktiviteter för grupper lagrade med vad det gav för resultat. Vilka aktiviteter satsades på för att genomföra Missions och uppnå Visioner och Övergripande Mål? Syftet är att dra lärdomar inför nya aktiviteter.<br><br>Exempelvis:<ul><li>Strategier för olika områden</li><li>Samverkan mellan olika enheter</li><li>Taktiska planer</li><li>Detaljerade planer för uppföljning</li><li>Vilka resultat uppnåddes?</li></ul>'
		break;
		case 14:
			section.intro = 'Här arbetar man med Aktiviteter för en grupp för att kunna genomföra en specifik Mission och uppnå dess Visioner och Mål.<br><br>Det kan handla om:<ul><li>Strategier för olika områden</li><li>Samverkan mellan olika grupper och hela organisationen</li><li>Taktiska planer</li><li>Detaljerade planer för uppföljning</li></ul>'
		break;
		case 15:
			section.intro = 'Här finns fakta och forskning samlat om hur man arbetar man med en grupps Mission. Det kan vara större eller mindre uppdrag, på kortare eller längre sikt.<ul><li>Hur formulerar man ett uppdrag med syfte och mål?</li><li>Hur arbetar man med en verksamhetsidé för en grupp?</li><li>Hur sätter man effektiva mål?</li><li>Hur formulerar man kraftfulla visioner?</li><li>Hur följer man upp ett uppdrag?</li></ul>'
		break;
		case 16:
			section.intro = 'Här finns tidigare Missions för grupper lagrade med vad det gav för resultat. Syftet är att dra lärdomar inför nya uppdrag.<ul><li>Hur såg uppdragen ut?</li><li>Vad skulle uppnås?</li><li>Vilka resultat nåddes?</li><li>Hur skedde uppföljningen?</li></ul>'
		break;
		case 17:
			section.intro = 'Här arbetar man med Mission för en grupp. Det kan vara ett större eller mindre uppdrag, på kortare eller längre sikt.<ul><li>Hur ser uppdraget ut?</li><li>Vad skall uppnås?</li><li>Hur ser uppföljningen ut?</li></ul>Exempel: Verksamhetsidé, projektidé, visioner och mål.'
		break;
		case 18:
			section.intro = 'Här finns forskning och fakta samlat om Förutsättningar för organisationer med vad som krävs för att klara av att genomföra aktiviteter som ska leda till att nå olika missions med visioner och mål.<br><br>Det handlar bland annat om Externa förutsättningar som:<ul><li>Praktiska (Konjunktur, politik, konkurrens, etc)</li><li>Psykologiska (Kultur, trender, etc)</li></ul>Samt interna förutsättningar som:<ul><li>Praktiska (Ekonomi, lokaler, datakapacitet, etc)</li><li>Psykologiska (Kompetens, motivation, kultur, personligheter, beteendemönster, etc)</li></ul>'
		break;
		case 19:
			section.intro = 'Här finns tidigare Förutsättningar för organisationen lagrade med vad man bedömde krävdes för att klara av att genomföra de aktiviteter som skulle leda till att nå missions med visioner och mål. Här finns även lagrat vilka förutsättningar som fanns i verkligheten samt vad det gav för resultat.<br><br>Det handlar om Externa förutsättningar som kan vara:<ul><li>Praktiska (Konjunktur, politik, konkurrens, etc)</li><li>Psykologiska (Kultur, trender, etc)</li></ul>Samt Interna förutsättningar som:<ul><li>Praktiska (Ekonomi, lokaler, datakapacitet, etc)</li><li>Psykologiska (Kompetens, motivation, kultur, personligheter, beteendemönster, etc)</li></ul>'
		break;
		case 20:
			section.intro = 'Här arbetar man med de Förutsättningar som krävs av organisationen för att skall klara av genomförandet av de aktiviteter man definierat för att nå en specifik mission med visioner och mål.<br><br>Externa förutsättningar kan vara:<ul><li>Praktiska (Konjunktur, politik, konkurrens, etc)</li><li>Psykologiska (Kultur, trender, etc)</li></ul>Interna förutsättningar kan vara:<ul><li>Praktiska (Ekonomi, lokaler, datakapacitet, etc)</li><li>Psykologiska (Kompetens, motivation, kultur, personligheter, beteendemönster, etc)</li></ul>'
		break;
		case 21:
			section.intro = 'Här finns fakta och forskning samlat om hur man tar fram Aktiviteter för en organisation med syftet att genomföra olika Missions och uppnå Visioner och Övergripande Mål. Det kan vara ett för större eller mindre uppdrag, på kortare eller längre sikt.<br><br>Exempelvis:<ul><li>Hur arbetar man med effektiva strategier för olika områden?</li><li>Hur skapar man samverkan mellan olika enheter?</li><li>Hur arbetar man med effektiva taktiska planer?</li><li>Hur planerar man för kontinuerlig uppföljning av aktiviteter och resultat?</li><li>Hur undviker man vanliga misstag i olika typer av verksamheter?</li></ul>'
		break;
		case 22:
			section.intro = 'Här finns tidigare Aktiviteter för organisationen lagrade med vad det gav för resultat. Vilka aktiviteter satsades på för att genomföra Missions och uppnå Visioner och Övergripande Mål? Syftet är att dra lärdomar inför nya aktiviteter.<br><br>Exampelvis:<ul><li>Strategier för olika områden</li><li>Samverkan mellan olika enheter</li><li>Taktiska planer</li><li>Detaljerade planer för uppföljning</li><li>Vilka resultat uppnåddes?</li></ul>'
		break;
		case 23:
			section.intro = 'Här arbetar man med Aktiviteter för en organisations för att kunna genomföra en specifik Mission och uppnå dess Visioner och Mål.<br><br>Det kan handla om:<ul><li>Strategier för olika områden</li><li>Samverkan mellan olika enheter</li><li>Taktiska planer</li><li>Detaljerade planer för uppföljning</li></ul>'
		break;
		case 24:
			section.intro = 'Här finns fakta och forskning samlat om hur man arbetar med Mission för en organisation. Det kan vara ett större eller mindre uppdrag, på kortare eller längre sikt.<ul><li>Hur arbetar man med en affärs- eller verksamhetsidé?</li><li>Hur formulerar man ett uppdrag med syfte och mål?</li><li>Hur sätter man effektiva mål?</li><li>Hur formulerar man kraftfulla visioner?</li><li>Hur följer man upp ett uppdrag?</li></ul>'
		break;
		case 25:
			section.intro = 'Här finns tidigare Missions lagrade med vad det gav för resultat. Syftet är att dra lärdomar inför nya uppdrag.<ul><li>Hur såg uppdraget ut?</li><li>Vad skulle uppnås?</li><li>Vilka resultat nåddes?</li><li>Hur skedde uppföljningen?</li></ul>'
		break;
		case 26:
			section.intro = 'Här arbetar man med Mission för en organisation. Det kan vara ett större eller mindre uppdrag, på kortare eller längre sikt.<ul><li>Hur ser uppdraget ut?</li><li>Vad skall uppnås?</li><li>Hur ser uppföljningen ut?</li></ul>Exempel: Affärsidé, verksamhetsidé, projektidé, visioner och mål.'
		break;
	}
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
	tab.text = '<b>Den här texten blir fet</b>';
	article.tabs.push(tab);
	tab = new_std_tab();
	tab.title = "Kursiv text";
	tab.text = '<i>Den här texten blir kursiv</i>';
	article.tabs.push(tab);
	tab = new_std_tab();
	tab.title = "Radbrytning";
	tab.text = 'Såhär görs<br>ny rad.<br><br>Och nytt stycke.';
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
	article.title = "Exempel lista och länk";
	let tab = new_std_tab();
	tab.title = "Punktlista";
	tab.text = '<ul><li>Såhär</li><li>Görs</li><li>Punktlistor</li></ul>';
	article.tabs.push(tab);
	tab = new_std_tab();
	tab.title = "Numrerad lista";
	tab.text = '<ol><li>Såhär</li><li>Görs</li><li>Numrerade listor</li></ol>';
	article.tabs.push(tab);
	tab = new_std_tab();
	tab.title = "Länk";
	tab.text = "Det här är en länk: <a href='https://www.zebrain.se/'>Zebrain</a>";
	article.tabs.push(tab);
	
	return article;
}

function new_std_article3() {
	article = new Article(content.std_article);
	article.id = get_uid();
	article.title = "Exempel bild och video";
	let tab = new_std_tab();
	tab.title = "Stor bild";
	tab.text = "Ge bilden rätt namn och skicka till mig så läggs den in i systemet. Den här bilden heter brain.jpg och är redan inlagd, därför fungerar den):<img style='width: 100%; height: 100%; object-fit: cover; ' src='/images/brain.jpg'>";
	article.tabs.push(tab);
	tab = new_std_tab();
	tab.title = "Text och bild";
	tab.text = "Såhär kan du lägga text och bild bredvid varandra:<div style='display: grid; grid-auto-columns: 1fr; grid-auto-flow: column; margin: 10px;'><div style='margin-right: 10px;'>Här ska texten stå.</div><div><img style='width: 100%; height: 100%; object-fit: cover;' src='/images/brain.jpg'></div></div>";
	article.tabs.push(tab);
	tab = new_std_tab();
	tab.title = "Youtube-video";
	tab.text = "Såhär görs en inbäddad Youtube-video (ändra K7QBnuF6dHg i länken till koden för videon (finns sist i url:en)):<div style= 'text-align: center; background: #000';><iframe style= 'display: inline-block' width='500' height='300' src='https://www.youtube.com/embed/K7QBnuF6dHg' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe></div>";
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

	connections.push(getConnection(sections, 0, 2, "Har förutsättningarna utformats utifrån forskning och fakta?"));
	connections.push(getConnection(sections, 1, 2, "Har förutsättningarna anpassats utifrån utvärdering och erfarenheter av tidigare förutsättningar?"));
	connections.push(getConnection(sections, 1, 5, "Har handlingsplanerna anpassats utifrån utvärdering och erfarenheter av tidigare förutsättningar?"));
	connections.push(getConnection(sections, 2, 5, "Finns det förutsättningar för att handlingsplanerna ska kunna genomföras?"));
	connections.push(getConnection(sections, 2, 8, "Finns det förutsättningar för att målsättningarna ska kunna uppnås?"));
	connections.push(getConnection(sections, 2, 11, "Stämmer förutsättningarna på grupp- och individnivå väl överens?"));
	connections.push(getConnection(sections, 2, 14, "Finns det förutsättningar på individnivå för att handlingsplanerna på grupnivå ska kunna genomföras?"));
	connections.push(getConnection(sections, 3, 5, "Har handlingsplanerna utformats utifrån forskning och fakta?"));
	connections.push(getConnection(sections, 4, 5, "Har handlingsplanerna anpassats utifrån utvärdering och erfarenheter av tidigare handlingsplaner?"));
	connections.push(getConnection(sections, 5, 8, "Leder handlingsplanerna till att målsättningarna uppnås?"));
	connections.push(getConnection(sections, 5, 14, "Stämmer handlingsplanerna på grupp- och individnivå väl överens?"));
	connections.push(getConnection(sections, 5, 17, "Leder handlingsplanerna på individnivå till att målsättningarna på gruppnivå uppnås?"));
	connections.push(getConnection(sections, 5, 26, "Leder handlingsplanerna på individnivå till att målsättningarna på organisationsnivå uppnås?"));
	connections.push(getConnection(sections, 6, 8, "Har målsättningar och visioner utformats utifrån forskning och fakta?"));
	connections.push(getConnection(sections, 7, 8, "Har målsättningarna anpassats utifrån utvärdering och erfarenheter av tidigare målsättningar?"));
	connections.push(getConnection(sections, 8, 17, "Stämmer målsättningarna på grupp- och individnivå väl överens?"));
	
	connections.push(getConnection(sections, 9, 11, "Har förutsättningarna utformats utifrån forskning och fakta?"));
	connections.push(getConnection(sections, 10, 11, "Har förutsättningarna anpassats utifrån utvärdering och erfarenheter av tidigare förutsättningar?"));
	connections.push(getConnection(sections, 10, 14, "Har handlingsplanerna anpassats utifrån utvärdering och erfarenheter av tidigare förutsättningar?"));
	connections.push(getConnection(sections, 11, 14, "Finns det förutsättningar för att handlingsplanerna ska kunna genomföras?"));
	connections.push(getConnection(sections, 11, 17, "Finns det förutsättningar för att målsättningarna ska kunna uppnås?"));
	connections.push(getConnection(sections, 11, 20, "Stämmer förutsättningarna på grupp- och organisationsnivå väl överens?"));
	connections.push(getConnection(sections, 11, 26, "Finns det förutsättningar på gruppnivå för att handlingsplanerna på organisationsnivå ska kunna genomföras?"));
	connections.push(getConnection(sections, 12, 14, "Har handlingsplanerna utformats utifrån forskning och fakta?"));
	connections.push(getConnection(sections, 13, 14, "Har handlingsplanerna anpassats utifrån utvärdering och erfarenheter av tidigare handlingsplaner?"));
	connections.push(getConnection(sections, 14, 17, "Leder handlingsplanerna till att målsättningarna uppnås?"));
	connections.push(getConnection(sections, 14, 23, "Stämmer handlingsplanerna på grupp- och organisationsnivå väl överens?"));
	connections.push(getConnection(sections, 14, 26, "Leder handlingsplanerna på gruppnivå till att målsättningarna på organisationsnivå uppnås?"));
	connections.push(getConnection(sections, 15, 17, "Har målsättningar och visioner utformats utifrån forskning och fakta?"));
	connections.push(getConnection(sections, 16, 17, "Har målsättningarna anpassats utifrån utvärdering och erfarenheter av tidigare målsättningar?"));
	connections.push(getConnection(sections, 17, 26, "Stämmer målsättningarna på grupp- och organisationsnivå väl överens?"));
	
	connections.push(getConnection(sections, 18, 20, "Har förutsättningarna utformats utifrån forskning och fakta?"));
	connections.push(getConnection(sections, 19, 20, "Har förutsättningarna anpassats utifrån utvärdering och erfarenheter av tidigare förutsättningar?"));
	connections.push(getConnection(sections, 19, 23, "Har handlingsplanerna anpassats utifrån utvärdering och erfarenheter av tidigare förutsättningar?"));
	connections.push(getConnection(sections, 20, 23, "Finns det förutsättningar för att handlingsplanerna ska kunna genomföras?"));
	connections.push(getConnection(sections, 20, 26, "Finns det förutsättningar för att målsättningarna ska kunna uppnås?"));

	connections.push(getConnection(sections, 21, 23, "Har handlingsplanerna utformats utifrån forskning och fakta?"));
	connections.push(getConnection(sections, 22, 23, "Har handlingsplanerna anpassats utifrån utvärdering och erfarenheter av tidigare handlingsplaner?"));
	connections.push(getConnection(sections, 23, 26, "Leder handlingsplanerna till att målsättningarna uppnås?"));

	connections.push(getConnection(sections, 24, 26, "Har målsättningar och visioner utformats utifrån forskning och fakta?"));
	connections.push(getConnection(sections, 25, 26, "Har målsättningarna anpassats utifrån utvärdering och erfarenheter av tidigare målsättningar?"));
	
	return connections;
}

function getConnection(sections, pos1, pos2, intro) {
	let connection = new_std_connection();
	connection.section_ids = [sections[pos1].id, sections[pos2].id];
	connection.intro = intro;
	return connection;
}


			
