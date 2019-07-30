$button = document.getElementById("bouton");
$affichage = document.getElementById("affichage");
$multiplicateur = document.getElementById("multiplicateur");
$autoclicker = document.getElementById("autoclicker");
$score = 0;
$compteur = 1;
$nextBuy = (50 * $compteur);
//$isAutoclicker = false;

$button.onclick = myFunction;
$multiplicateur.onclick = incrementer;
$multiplicateur.innerHTML = "Multiplicateur x "+$compteur+" (prochain achat : "+$nextBuy+")";
$autoclicker.innerHTML = "DPS : "+$compteur;
$autoclicker.onclick = autoclicker;


function myFunction(event) { 
	
	$score = $score + (1 * $compteur);
	$affichage.innerHTML = $score;
	
	console.log($score);
}

function incrementer(event){

	if($score >= (50 * $compteur)){
		$score = $score - (50 * $compteur);
		$compteur++;
		$affichage.innerHTML = $score;
		$multiplicateur.innerHTML = "Multiplicateur x "+$compteur;
		$nextBuy = (50 * $compteur);
		$multiplicateur.innerHTML = "Multiplicateur x "+$compteur+" (prochain achat : "+$nextBuy+")";
	}
	
}

function autoclicker(event){
	if($score >= 200 ){
		$score = $score - 200;
		$affichage.innerHTML = $score;
		setInterval(myFunction, 1000);
	}
}