function atualizarRanking() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'url_do_seu_endpoint_para_obter_o_ranking', true);
    xhr.onload = function() {
        if (xhr.status == 200) {
            document.getElementById('rankjs').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}


setInterval(atualizarRanking, 5000);
