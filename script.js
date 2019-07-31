$button = document.getElementById("bouton");
$affichage = document.getElementById("affichage");
$multiplicateur = document.getElementById("multiplicateur");
$autoclicker = document.getElementById("autoclicker");
$score = 0;
$compteur = 1;
$nbClick = 1;
$nextBuy = (50 * $compteur);
$acNextbuy = 200 * $nbClick;
$img = document.getElementById("img");


$button.onclick = myFunction;
$multiplicateur.onclick = incrementer;
$multiplicateur.innerHTML = "Multiplicateur x "+$compteur+" (prochain achat : "+$nextBuy+")";
$autoclicker.innerHTML = "DPS : "+$compteur+" (prochain achat : "+$acNextbuy+")";
$autoclicker.onclick = autoclicker;

/*if($score >= (50 * $compteur)){
	$multiplicateur.disabled = false;
}else{
	$multiplicateur.disabled = true;
}	*/


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
		$autoclicker.innerHTML = "DPS : "+($compteur * $nbClick)+" (prochain achat : "+$acNextbuy+")";
	}
	
}

function autoclicker(event){
	if($score >= (200 * $nbClick) ){
		$score = $score - (200 * $nbClick);
		$nbClick++;
		$affichage.innerHTML = $score;
		$acNextbuy = (200 * $nbClick);
		$autoclicker.innerHTML = "DPS : "+$compteur * $nbClick+" (prochain achat : "+$acNextbuy+")";
		setInterval(myFunction, 1000);
	}
}
