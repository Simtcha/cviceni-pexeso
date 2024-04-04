/*
console.log('Funguju!')
const karticky = document.querySelectorAll('.karticka')
karticky[0].classList.remove('otocena') */

/*
Upravte soubor app.js tak, aby pomocí metody querySelectorAll prošel všechny prvky se třídou karticka a přidal jim posluchač události na kliknutí.
Pokud událost nastane odeberte nebo přidejte kartičce třídu otocena. Styly už máte nachystané. Kartička s třídou otocena uživateli obrázek skrývá. 
Po odebrání této třídy se obrázek ukáže.

Bonusy
Pokud jsou dvě kartičky otočené tak, že ukazují obrázek, zařiďte, aby se po jedné sekundě vrátily do původního stavu.

Neotáčejte zpět kartičky, u kterých uživatel našel celý pár. Kartičkám přidejte vlastnost disabled, aby na ně ani nešlo znovu kliknout.
Že jsou kartičky ze stejného páru poznáte tak, že mají uvnitř obrázek <img> se stejnou hodnotou v atributu src.*/


let seznamek = []

// pridani kliknutych karticek do seznamku 
const selectKarticka = (event) => {
    event.target.classList.toggle('otocena')
    const vybrane = document.querySelectorAll('.karticka:not(.otocena)')
    seznamek = Array.from(vybrane)
    console.log(seznamek)
    timer() 
    }

// pridani eventlisteneru ke vsem kartickam
const karticky = document.querySelectorAll('.karticka')
karticky.forEach((kart) => {
    kart.addEventListener('click', selectKarticka)
})


// nalezeny par se zablokuje, ale nezustane obrazkem nahoru, ale otoci se dolu, nelze na nej kliknout, ale ja chci, aby byl obrazkem nahoru :(
const otaceni = () => {
        seznamek.forEach((item) => {
            if (seznamek.length === 2 && seznamek[0].querySelector('img').src === seznamek[1].querySelector('img').src) {
                item.classList.remove('otocena')
                item.setAttribute('disabled','')
            } else { 
                item.classList.add('otocena') }
            })}
     

// timer pro funkci otaceni na 2s
let timerId = null
const timer = () => {
        clearTimeout(timerId) 
        timerId = setTimeout(otaceni, 2000)    
        }
     