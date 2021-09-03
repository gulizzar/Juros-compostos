function calculojuros() {
    var vf, pmt, i, n, nome;

    
    nome = String($("#gustavo").val(""));
    pmt= ($("#valor").val());
    i= 0.03;
    n= ($("#tempo").val());
    

    vf= (pmt* (1+i) *((Math.pow(1+i,n)-1)/i)).toFixed(2);

    
    
    $("#isso").addClass("d-none");
    $("#result").removeClass("d-none");
    $(".mensalidaderesult").html(parseInt(pmt));
    $(".formula").html(parseInt(vf));
    $(".data").html(parseInt(n));
    $("#nameresult").html(parseInt(nome));

    


}
function voltar(){

    pmt= ($("#valor").val(""));
    n= ($("#tempo").val(""));
    
    
    $("#isso").removeClass("d-none");
    $("#result").addClass("d-none");
    

}