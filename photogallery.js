var allimgs=document.images;
console.log(allimgs);
for(i=0;i<=allimgs.length-1;i++){
    allimgs[i].src=`./Images/${i+1}.jpg`;
}
function fun(imagepath){
    document.getElementById("bigcontainer").style.backgroundImage=`url(${imagepath})`;
}