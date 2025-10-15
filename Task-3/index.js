let display_bisi=0;
let display_neer=0;
let display_masala=0;
let display_akki=0;
let display_kesari=0;
let display_buns=0;
let display_idli=0;
let display_kadle=0;
let display_goli=0;
let display_pundi=0;
let display_chow=0;

function CheckDisplay(){
    let display=[display_bisi,display_neer,display_masala,display_akki,display_kesari,display_buns,display_idli,display_kadle,display_goli,display_pundi,display_chow];
    let count=0;
    for(let i=0;i<display.length;i++)
    {
        if(display[i] === 1)
            count++;
    }
    console.log(display);
    if(count > 1)
        return false;
    else
        return true;
}

document.getElementById("bisi").onclick= function() {
    if(display_bisi == 0)
    {
        main.style.display = "block";
        bisi_text.style.display="flex";
        bisi_title.style.display="flex";
        bisi_container.style.backgroundColor="rgb(26, 26, 26)";
        bisi_container.scrollIntoView({ behavior: "smooth", block: "center" });
        display_bisi=1;
    }
    else
    {
        if(CheckDisplay()){
            main.style.display = "grid";
        }
        bisi_text.style.display="none";
        bisi_title.style.display="none";
        bisi_container.style.backgroundColor = ""; 
        start.scrollIntoView({ behavior: "smooth" , block:"end"});
        display_bisi=0;
    }
}

document.getElementById("neer").onclick= function() {
    if(display_neer == 0)
    {
        main.style.display = "block";
        neer_text.style.display="flex";
        neer_title.style.display="flex";
        neer_container.style.backgroundColor="rgb(26, 26, 26)";
        neer_container.scrollIntoView({ behavior: "smooth", block: "center" });
        display_neer=1;
    }
    else
    {
        if(CheckDisplay()){
            main.style.display = "grid";
        }
        neer_text.style.display="none";
        neer_title.style.display="none";
        neer_container.style.backgroundColor = ""; 
        start.scrollIntoView({ behavior: "smooth" , block:"end"});
        display_neer=0;
    }
}

document.getElementById("masala").onclick= function() {
    if(display_masala == 0)
    {
        main.style.display = "block";
        masala_text.style.display="flex";
        masala_title.style.display="flex";
        masala_container.style.backgroundColor="rgb(26, 26, 26)";
        masala_container.scrollIntoView({ behavior: "smooth", block: "center" });
        display_masala=1;
    }
    else
    {
        if(CheckDisplay()){
            main.style.display = "grid";
        }
        masala_text.style.display="none";
        masala_title.style.display="none";
        masala_container.style.backgroundColor = ""; 
        start.scrollIntoView({ behavior: "smooth" , block:"end"});
        display_masala=0;
    }
}

document.getElementById("akki").onclick= function() {
    if(display_akki == 0)
    {
        main.style.display = "block";
        akki_text.style.display="flex";
        akki_title.style.display="flex";
        akki_container.style.backgroundColor="rgb(26, 26, 26)";
        akki_container.scrollIntoView({ behavior: "smooth", block: "center" });
        display_akki=1;
    }
    else
    {
        if(CheckDisplay()){
            main.style.display = "grid";
        }
        akki_text.style.display="none";
        akki_title.style.display="none";
        akki_container.style.backgroundColor = ""; 
        start.scrollIntoView({ behavior: "smooth" , block:"end"});
        display_akki=0;
    }
}

document.getElementById("kesari").onclick= function() {
    if(display_kesari == 0)
    {
        main.style.display = "block";
        kesari_text.style.display="flex";
        kesari_title.style.display="flex";
        kesari_container.style.backgroundColor="rgb(26, 26, 26)";
        kesari_container.scrollIntoView({ behavior: "smooth", block: "center" });
        display_kesari=1;
    }
    else
    {
        if(CheckDisplay()){
            main.style.display = "grid";
        }
        kesari_text.style.display="none";
        kesari_title.style.display="none";
        kesari_container.style.backgroundColor = ""; 
        start.scrollIntoView({ behavior: "smooth" , block:"end"});
        display_kesari=0;
    }
}

document.getElementById("buns").onclick= function() {
    if(display_buns == 0)
    {
        main.style.display = "block";
        buns_text.style.display="flex";
        buns_title.style.display="flex";
        buns_container.style.backgroundColor="rgb(26, 26, 26)";
        buns_container.scrollIntoView({ behavior: "smooth", block: "center" });
        display_buns=1;
    }
    else
    {
        if(CheckDisplay()){
            main.style.display = "grid";
        }
        buns_text.style.display="none";
        buns_title.style.display="none";
        buns_container.style.backgroundColor = ""; 
        start.scrollIntoView({ behavior: "smooth" , block:"end"});
        display_buns=0;
    }
}

document.getElementById("goli").onclick= function(){
    if(display_goli == 0)
    {
        main.style.display = "block";
        goli_text.style.display="flex";
        goli_title.style.display="flex";
        goli_container.style.backgroundColor="rgb(26, 26, 26)";
        goli_container.scrollIntoView({ behavior: "smooth", block: "center" });
        display_goli=1;
    }
    else
    {
        if(CheckDisplay()){
            main.style.display = "grid";
        }
        goli_text.style.display="none";
        goli_title.style.display="none";
        goli_container.style.backgroundColor = ""; 
        start.scrollIntoView({ behavior: "smooth" , block:"end"});
        display_goli=0;
    }
}

document.getElementById("chow").onclick= function() {
    if(display_chow == 0)
    {
        main.style.display = "block";
        chow_text.style.display="flex";
        chow_title.style.display="flex";
        chow_container.style.backgroundColor="rgb(26, 26, 26)";
        chow_container.scrollIntoView({ behavior: "smooth", block: "center" });
        display_chow=1;
    }
    else
    {
        if(CheckDisplay()){
            main.style.display = "grid";
        }
        chow_text.style.display="none";
        chow_title.style.display="none";
        chow_container.style.backgroundColor = ""; 
        start.scrollIntoView({ behavior: "smooth" , block:"end"});
        display_chow=0;
    }
}

document.getElementById("pundi").onclick= function() {
    if(display_pundi == 0)
    {
        main.style.display = "block";
        pundi_text.style.display="flex";
        pundi_title.style.display="flex";
        pundi_container.style.backgroundColor="rgb(26, 26, 26)";
        pundi_container.scrollIntoView({ behavior: "smooth", block: "center" });
        display_pundi=1;
    }
    else
    {
        if(CheckDisplay()){
            main.style.display = "grid";
        }
        pundi_text.style.display="none";
        pundi_title.style.display="none";
        pundi_container.style.backgroundColor = ""; 
        start.scrollIntoView({ behavior: "smooth" , block:"end"});
        display_pundi=0;
    }
}

document.getElementById("kadle").onclick= function() {
    if(display_kadle == 0)
    {
        main.style.display = "block";
        kadle_text.style.display="flex";
        kadle_title.style.display="flex";
        kadle_container.style.backgroundColor="rgb(26, 26, 26)";
        kadle_container.scrollIntoView({ behavior: "smooth", block: "center" });
        display_kadle=1;
    }
    else
    {
        if(CheckDisplay()){
            main.style.display = "grid";
        }
        kadle_text.style.display="none";
        kadle_title.style.display="none";
        kadle_container.style.backgroundColor = ""; 
        start.scrollIntoView({ behavior: "smooth" , block:"end"});
        display_kadle=0;
    }
}

document.getElementById("idli").onclick= function() {
    if(display_idli == 0)
    {
        main.style.display = "block";
        idli_text.style.display="flex";
        idli_title.style.display="flex";
        idli_container.style.backgroundColor="rgb(26, 26, 26)";
        idli_container.scrollIntoView({ behavior: "smooth", block: "center" });
        display_idli=1;
    }
    else
    {
        if(CheckDisplay()){
            main.style.display = "grid";
        }
        idli_text.style.display="none";
        idli_title.style.display="none";
        idli_container.style.backgroundColor = ""; 
        start.scrollIntoView({ behavior: "smooth" , block:"end"});
        display_idli=0;
    }
}
