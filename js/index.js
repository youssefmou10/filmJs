//les function qui nt a l interieur doivent executer quand 
//page est chargé 
window.onload=function()
{
	/*le fonction qui prned on parmétre un nombre et affiche dans le catlogue
		le film associé a ce nombre 
		respectez la syntaxe 
		<div class="film">
		<img src="images/Parasite.jpg" alt="Parasite">
		<h3>Test Titre</h3>
						
		</div>
		filmData le tabaleau qui donne le dossier Data
						
	*/

	//creation une boucle pour afficher tous les films
	for (var i = 0; i < filmData.length; i++) {
		createFilm(i);
	}

	function createFilm(number)
	{	//creation d'un film
		//recuprer some film qui la position number
		var somefilm=filmData[number];
		//create un element dans le document
		var film=document.createElement("div");
		//creer une className
		film.className="film";
		//crrer un id unique pour les films
		film.id=number+'-film';


		//creation de l'image 
		var image=document.createElement('img');
		image.src=somefilm.image;
		image.alt=somefilm.title;
		//creation du titre du film h3
		var titre=document.createElement("h3");
		titre.innerHTML=somefilm.title;
		//ajouter titre image dans le div

		film.appendChild(image);
		film.appendChild(titre);

		//recpurer la syntax film qui ont dans html
		document.getElementById("films").appendChild(film);

}
	//partie filtrage 
	//getElementBytagName pour recuprer tous les elements qui ont dans le tableau
	var input = document.getElementsByTagName("input");
	//pour récuprer la list des films 
	var films = document.getElementById("films");
	//premier Element faire un evenement
	input[0].addEventListener("keyup",recherche);
	input[1].addEventListener("mouseup",checkbox);
	films.addEventListener("mouseover",survolfilm);
	films.addEventListener("mouseout",surfinfilm);
	films.addEventListener("click",selctionFilm);

	function recherche(event)
	{	//recuprer la valeur qui a dans input
		var inputValue=event.target.value;
		inputValue=inputValue.toLowerCase();
		console.log(inputValue);
		//check input 
		
		
			//input  n'est pas vide 
			//la boucle pour récuprer title de filmData
			for(var i=0;i<filmData.length;i++)
			{
					var titre=filmData[i].title;
					//convertir to lowercase
					titre=titre.toLowerCase();
					var film=document.getElementById(i+"-film");
					//pour filtrer le nom ou bien une letter est dans le text
					if(titre.includes(inputValue)==false)
					{
						//ne pas afficher
						film.style.display="none";
					}
					else
					{
						//afficher
						film.style.display="inline-block"
					}
			
		}
	}//fin de la fonction recherche

	function checkbox(event)
	{
		var details=document.getElementById("details");
		console.log(event.target.checked);
		if(event.target.checked)
		{
			details.style.display="none";
		}
		else{
			details.style.display="block";
		}
	}//fin de la function checkbox 

	function survolfilm(event)
	{
		//pour recuprer le tag parent
		var survole =event.target.parentNode;
		//pour recuprer id des parents
		var survoleid=survole.id;
		//variable pour les position du film
		var position
		
		if(survoleid=="catalog")
		{
			return;
		}
		else if(survoleid.length==6)
		{
			position=survoleid[0];
		}
		else if(survoleid.length==7)
		{
			position=survoleid[0]+survoleid[1];
		}
		else
		{
			return;
		}
		//declartion pour recuprer la description 
			var descprtionfilms=filmData[position].text;
			document.getElementById("details").innerHTML=descprtionfilms
	}
	//creation pour vider le quand en la lache le cursor
	
	function surfinfilm(){
		document.getElementById("details").innerHTML="";
	}
	//fin de fonction 
	//debut de fonction selcion du film sur menu top 2
	function selctionFilm(event){
		var film=event.target.parentNode;
		var selct1=document.getElementById("selction1");
		var selct2=document.getElementById("selction2");
		console.log(event.target.parentNode);
		//crerer de varaiable pour span fils 
		var selctChild1=selct1.childNodes;
		var selctChild2=selct2.childNodes;
		//console.log(selctChild1);
		if(selctChild1.length==1)
		{
		//partie selction 1 est vide
		selct1.insertBefore(film,selctChild1[0]);

		}
		else if(selctChild2.length==1)
		{
			//partie selection 2 est vide 
			selct2.insertBefore(film,selctChild2[0]);
		}
		else{
			alert("vous avez déja choisi deux films!");
		}
	}
}