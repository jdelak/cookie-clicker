$button = document.getElementById("bouton");
$affichage = document.getElementById("affichage");
$multiplicateur = document.getElementById("multiplicateur");
$autoclicker = document.getElementById("autoclicker");
$birdyBonus = document.getElementById("birdy-bonus");
$bird = document.getElementById("oiseau");
$score = 0;
$compteur = 1;
$nbClick = 1;
$nbClickB = 1;
$nextBuy = (50 * $compteur);
$acNextbuy = 200 * $nbClick;
$img = document.getElementById("img");
$gamePartButton = document.getElementById("game-part-button");

$button.onclick = click;
$multiplicateur.onclick = incrementer;
$autoclicker.onclick = autoclicker;
$birdyBonus.onclick = birdyBonus;
$multiplicateur.innerHTML = "Multiplicateur x "+$compteur+" (prochain achat : "+$nextBuy+")";
$autoclicker.innerHTML = "DPS : "+$compteur+" (prochain achat : "+$acNextbuy+")";
$birdyBonus.innerHTML = "Birdy Bonus :"+(100 * $nbClickB);


/*if($score >= (50 * $compteur)){
	$multiplicateur.disabled = 'false';
}else{
	$multiplicateur.disabled = 'true';
}	*/

//action du click sur le bug
function click(event) { 
	 //explode(event.clientX, event.clientY);
	explode(250, 250);
	$score = $score + (1 * $compteur);
	$affichage.innerHTML = $score;
	
	console.log($score);
}

//incrémentation des click
function incrementer(event){

	if($score >= (50 * $compteur)){
		
		$score = $score - (50 * $compteur);
		$compteur++;
		$affichage.innerHTML = $score;
		$multiplicateur.innerHTML = "Multiplicateur x "+$compteur;
		$nextBuy = 50 * $compteur;
		$multiplicateur.innerHTML = "Multiplicateur x "+$compteur+" (prochain achat : "+$nextBuy+")";
		$autoclicker.innerHTML = "DPS : "+($compteur * $nbClick)+" (prochain achat : "+$acNextbuy+")";
	}
	
}

//function autoclick
function autoclicker(event){
	if($score >= (200 * $nbClick) ){
		$score = $score - (200 * $nbClick);
		$nbClick++;
		$affichage.innerHTML = $score;
		$acNextbuy = (200 * $nbClick);
		$autoclicker.innerHTML = "DPS : "+$compteur * $nbClick +" (prochain achat : "+$acNextbuy+")";
		setInterval(click, 1000);
	}
}

//bonus birdyBonus : pendant 5 sec execute la fonction birdy
function birdyBonus(event){
	if($score >= (100 * $nbClickB) ){
		$score = $score - (100 * $nbClickB);
		$nbClickB++;
		let timerBirdy = setInterval(birdy, 1000);
		setTimeout(() => { clearInterval(timerBirdy); }, 5000);
		if($bird.style.display === "block"){
			$bird.style.display="none";
		}
		
	}
}

//affiche l'oiseau et ajout 100 a uscore
function birdy(){
	$bird.style.display="block";
	$score = $score+ (100 * $nbClickB);
	$affichage.innerHTML = $score;
	explode(300, 300);

}



/////////////////////////////////////// "Partie Giclée sang" (JQUERY) /////////////////////////////////////////////////
function explode(x, y) {
  var particles = 15,
    // explosion container and its reference to be able to delete it on animation end
    explosion = $('<div class="explosion"></div>');

  // put the explosion container into the body to be able to get it's size
  $('body').append(explosion);

  // position the container to be centered on click
  explosion.css('left', x - explosion.width() / 2);
  explosion.css('top', y - explosion.height() / 2);

  for (var i = 0; i < particles; i++) {
    // positioning x,y of the particle on the circle (little randomized radius)
    var x = (explosion.width() / 2) + rand(80, 150) * Math.cos(2 * Math.PI * i / rand(particles - 10, particles + 10)),
      y = (explosion.height() / 2) + rand(80, 150) * Math.sin(2 * Math.PI * i / rand(particles - 10, particles + 10)),
      color = 255 + ', ' + 0 + ', ' + 0, // randomize the color rgb
        // particle element creation (could be anything other than div)
      elm = $('<div class="particle" style="' +
        'background-color: rgb(' + color + ') ;' +
        'top: ' + y + 'px; ' +
        'left: ' + x + 'px"></div>');
    if (i == 0) { // no need to add the listener on all generated elements
      // css3 animation end detection
      elm.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
        explosion.remove(); // remove this explosion container when animation ended
      });
    }
    explosion.append(elm);
  }
}

// get random number between min and max value
function rand(min, max) {
  return Math.floor(Math.random() * (max + 1)) + min;
}