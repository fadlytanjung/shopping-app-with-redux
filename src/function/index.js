export const formatRupiah = (num)=> {
    num = Math.round(num)
    var p = num.toFixed(2).split(".");
    return "Rp. " + p[0].split("").reverse().reduce(function(acc, num, i, orig) {
        return  num==="-" ? acc : num + (i && !(i % 3) ? "." : "") + acc;
    }, "");
    }
export const cekExistCart = (data,id)=>{
    let cek = data.filter(el=>el.id === id);
    if(cek.length > 0){
        return true
    }else{
        return false
    }
}