image_array = [
    'RoseNY.webp',
    'Hortensia.webp',
    'Lilje.webp',
    'Nelliker.webp',
    'Peony.webp',
    'chrysanthemumNY.webp'
]

function Skift_hele_lortet(){ //function der har flere forskellige funktioner

    //Blomster generatoren
   
    random_index = Math.floor(Math.random() * image_array.length); //Denne linje generer et tilfældigt heltal i intervallet fra 0 til længden af vores image array.

    selected_image = image_array[random_index] //Tildeler værdien af image_array[random_index] til variablen selected_image

    document.getElementById('dinblomst').src = `${selected_image}` //opdatere src-attributten for html elementet 'dinblomst' og ændre billedkilden til selected_image


    document.getElementById('tekstSkifter').innerHTML = "Du blev en..."; //ændre indholdet i det id der hedder tekstskifter til "du blev en..."

    document.getElementById("knap").addEventListener("click", function()
    { this.style.display="none"; //addEventListener bruges til at registrer når der bliver trykket på knappen. når der trykkes på knappen forsvinder den.
    
});
    
}