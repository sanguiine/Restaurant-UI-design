function ukryj()
{
    document.getElementById('strona_glowna').style.display = 'none';
    document.getElementById('oferta').style.display = 'none';
    document.getElementById('o_nas').style.display = 'none';
    document.getElementById('kontakt').style.display = 'none';              
}

function wymienTresc(id)
{
    ukryj();
    document.getElementById(id).style.display = 'block';
}