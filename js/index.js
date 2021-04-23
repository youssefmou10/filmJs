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
	//premier Element faire un evenement
	input[0].addEventListener("keyup",recherche);
	input[1].addEventListener("mouseup",checkbox);

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
	}

}