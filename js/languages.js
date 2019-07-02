

function changeLanguage(language){

	var espaniol = ["Inicio","Sobre mí","Educación","Proyectos","Lecturas","Contacto","Idioma","Inicio","Sobre mí","Educación","Proyectos","Lecturas","Contacto","Idioma","Guillermo Bueno Vargas","Estudiante de Ingeniería Informática","Sobre mí","				Soy una persona entusiasta que busca nuevas oportunidades de crecer y evolucionar. Me gusta ser parte de un grupo multidisciplinario que trabaja en estimulantes y desafiantes proyectos software. Disfruto analizando, desarrollando e implementando soluciones como programador individual, además de contribuir en proyectos grandes que benefician a la comunidad.			","Educación","Universidad","Presente","								Posición 33 en el ranking <a href=\"http://www.shanghairanking.com/Shanghairanking-Subject-Rankings-2017/computer-science-engineering.html\" target=\"_blank\">ARWU</a>								Actualmente cursando 4º (198 ECTS)							","								El Grado de Ingeniería Informática ofrece un total de 618 ECTS, de los cuales el estudiante debe elegir 240. Asignaturas obligatorias (90 créditos), Asignaturas básicas (60 créditos), asignaturas opcionales para obtener una especialidad (48 créditos).							","<img src=\"./img/ugr.png\" alt=\"Logotipo de la Universidad de Granada\">","Centro de Lenguas Modernas","2014","								Curso de Inglés								Nivel 6-II [Vantage] Lengua Inglesa (6 ECTS)							","								El CLM es el centro oficial de lenguas de la Universidad de Granada, reconocido por sus eneseñanzas prestigiosas sobre el castellano y otras lenguas.							","<img src=\"./img/clm.png\" alt=\"Logotipo del Centro de Lenguas Modernas de Granada\">","Bachillerato","2010-2012","<img src=\"./img/ies.png\" alt=\"Logotipo del IES Sevilla La Nueva\">","Proyectos","<a href=\"https://gnaestudios.github.io/\" target=\"_blank\"><img src=\"./img/gnaestudios.png\" alt=\"Logotipo de GnaEstudios\"></a>","GnaEstudios","Desarrollador de aplicaciones móviles","<img src=\"./img/cpe.png\" alt=\"Logo de la aplicación sobre Código Penal Español\">","Código Penal Español","<img src=\"./img/cce.png\" alt=\"Logo de la aplicación sobre Código Civil Español\">","Código Civil Español","<img src=\"./img/ce.png\" alt=\"Logo de la aplicación sobre Constitución Española\">","Constitución Española","<img src=\"./img/lecrim.png\" alt=\"Logo de la aplicación sobre Ley de Enjuiciamiento Criminal\">","Ley de Enjuiciamiento Criminal","<img src=\"./img/lopj.png\" alt=\"Logo de la aplicación sobre Ley Orgánica del Poder Judicial\">","Ley Orgánica del Poder Judicial","Proyectos de Universidad","<img src=\"./img/flappy.png\" alt=\"Logotipo del proyecto de Universidad Flappy Bird\">","FlappyBird","2019","Nota: 10/10","<img src=\"./img/GranaRoutes.png\" alt=\"Logotipo del proyecto de Universidad GranaRoutes\">","GranaRoutes","2019","Nota: 9.5/10","Lecturas","<img src=\"./img/rc.jpg\" alt=\"Libro Desarrolla una Mente Prodigiosa\">","Desarrolla una Mente Prodigiosa","Ramón Campayo, 11ª edición, febrero 2015. Editorial EDAF.","<img src=\"./img/cc.jpg\" alt=\"Libro Clean Code\">","Clean Code","Robert C. Martin, 9ª edición, mayo 2011. Prentice Hall.","Contáctame"];

	var english = ["Home","About me","Education","Projects","Lectures","Contact me","Language","Home","About me","Education","Projects","Lectures","Contact me","Language","Guillermo Bueno Vargas","Computer Sciences Student","About me","				I am an enthusiastic person who is always seeking new opportunities to grow and evolve. What I really love is to be part of a multidisciplinary team that works in exciting and challenging software projects. I enjoy analising, developing and implementing solutions as individual programmer but also contributing to bigger shared projects in benefit of the wider community.			","Education","University","Present","								33rd position in <a href=\"http://www.shanghairanking.com/Shanghairanking-Subject-Rankings-2017/computer-science-engineering.html\" target=\"_blank\">ARWU</a> ranking								Studing 4th (198 ECTS)							","								The Computer Engineering Degree offers a total of 618 ECTS, of which the studentmust take 240. Basic courses (60 credits), compulsory courses (90 credits),optional courses for obtaining a specialty (48 credits).							","<img src=\"./img/ugr.png\" alt=\"University of Granada Logo\">","Modern Language Centre","2014","								English Course								Level 6-II [Vantage] (6 ECTS)							","								The CLM is the official language school of the University of Granada, recognisedfor its prestigious teaching of Spanish and other languages.							","<img src=\"./img/clm.png\" alt=\"The University of Granada Modern Language Centre logo\">","High School","2010-2012","<img src=\"./img/ies.png\" alt=\"IES Sevilla La Nueva Logo\">","Projects","<a href=\"https://gnaestudios.github.io/\" target=\"_blank\"><img src=\"./img/gnaestudios.png\" alt=\"GnaEstudios Logo\"></a>","GnaEstudios","Mobile apps developer","<img src=\"./img/cpe.png\" alt=\"Spanish Penal Code Logo\">","Spanish Penal Code","<img src=\"./img/cce.png\" alt=\"Spanish Civil Code app Logo\">","Spanish Civil Code","<img src=\"./img/ce.png\" alt=\"Spanish Constitution app Logo\">","Spanish Constitution","<img src=\"./img/lecrim.png\" alt=\"Spanish Prosecution criminal law app Logo\">","Prosecuton Criminal Law","<img src=\"./img/lopj.png\" alt=\"Spanish Judiciary Law app Logo\">","Spanish Judiciary Law","College Projects","<img src=\"./img/flappy.png\" alt=\"Flappy Bird Logo (University Project)\">","FlappyBird","2019","Score: 10/10","<img src=\"./img/GranaRoutes.png\" alt=\"GranaRoutes Logo\">","GranaRoutes","2019","Score: 9.5/10","Lectures","<img src=\"./img/rc.jpg\" alt=\"Desarrolla una Mente Prodigiosa book image\">","Desarrolla una Mente Prodigiosa","Ramón Campayo, 11th edition, February 2015. Editorial EDAF.","<img src=\"./img/cc.jpg\" alt=\"Clean Code book image\">","Clean Code","Robert C. Martin, 9th edition, may 2011. Prentice Hall.","Contact me"];




	switch(language){
		case "spanish":
			changeValues(espaniol);
			break;
		case "english":
			changeValues(english);
			break;

	}

}

function changeValues(value){
	var matches = document.querySelectorAll('[data-translatable]');
	var cv = document.querySelectorAll('[download]');
	for (var i = 0; i < matches.length; ++i) {
		if(matches[i].innerHTML.includes("<")){
			matches[i].innerHTML = value[i];
		}
		else{
			matches[i].innerText = value[i];
		}
		
	}

	var file = cv[0].href;
	var pos;

	var continua = true;
	
	for (var i = file.length - 1; i > 0 && continua; --i){
		if(file[i] == '/'){
			pos = i;
			continua = false;
		}
	}

	
	
	var path = file.substr(0, pos+1);
	var name = file.substr(pos+1, file.length - pos);;
	var result = "";

	if(name == "CV_GBV.pdf"){
		name = "CV_GBV_English.pdf";
	}
	else{
		name = "CV_GBV.pdf";
	}

	result=path+name;

	cv[0].href = result;

}


