function displayValue(val)
{   
    var inp = document.getElementById("display").value
    inp+=val
    document.getElementById("display").value=inp
}

function clearSrn()
{
    document.getElementById("display").value=""
}

function resultValue()
{
    var opr = document.getElementById("display").value
    var result = eval(opr)
    document.getElementById("display").value=result
}
