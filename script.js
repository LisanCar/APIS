const baseUrl='https://cdn.thesimpsonsapi.com/500';
const displayDiv=document.querySelector('#display');

function obtenerNumeroAleatorio() {
    return Math.floor(Math.random() * 1182) + 1;
}

//Async/await
(async()=>{
    const loader = document.querySelector('.loader');
    loader.style.display = "block"; 

    const fetchCharacter = async (id = 1)=>{
        const response = await fetch(`https://thesimpsonsapi.com/api/characters/${id}`);
        const character = await response.json();
        return character;
    }
    
    // Agregamos un timeout artificial para ver el loader
    await new Promise(resolve => setTimeout(resolve, 1000));
    loader.style.display = "none";
    
    const [c1,c2,c3,c4,c5,c6] = await Promise.all([
        fetchCharacter(obtenerNumeroAleatorio()),
        fetchCharacter(obtenerNumeroAleatorio()),
        fetchCharacter(obtenerNumeroAleatorio()),
        fetchCharacter(obtenerNumeroAleatorio()),
        fetchCharacter(obtenerNumeroAleatorio()),
        fetchCharacter(obtenerNumeroAleatorio())
    ]);
    

    const c1Element= document.querySelector('#character1');
    c1Element.textContent=JSON.stringify(c1.name,null,2);
    const i1Element=document.querySelector('#character1_image');
    i1Element.src=`${baseUrl}${c1.portrait_path}`;

    const c2Element= document.querySelector('#character2');
    c2Element.textContent=JSON.stringify(c2.name,null,2);
    const i2Element=document.querySelector('#character2_image');
    i2Element.src=`${baseUrl}${c2.portrait_path}`;

    const c3Element= document.querySelector('#character3');
    c3Element.textContent=JSON.stringify(c3.name,null,2);
    const i3Element=document.querySelector('#character3_image');
    i3Element.src=`${baseUrl}${c3.portrait_path}`;
    
    const c4Element= document.querySelector('#character4');
    c4Element.textContent=JSON.stringify(c4.name,null,2);
    const i4Element=document.querySelector('#character4_image');
    i4Element.src=`${baseUrl}${c4.portrait_path}`;
    
    const c5Element= document.querySelector('#character5');
    c5Element.textContent=JSON.stringify(c5.name,null,2);
    const i5Element=document.querySelector('#character5_image');
    i5Element.src=`${baseUrl}${c5.portrait_path}`;
    
    const c6Element= document.querySelector('#character6');
    c6Element.textContent=JSON.stringify(c6.name,null,2);
    const i6Element=document.querySelector('#character6_image');
    i6Element.src=`${baseUrl}${c6.portrait_path}`;

    const boton = document.querySelector('#reload');
    boton.addEventListener('click', () => {
        location.reload();
    });
    
})();
