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

}