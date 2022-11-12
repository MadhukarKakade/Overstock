const banners= [];
for(let i=1;i<=3;i++){
    banners.push(require(`../Images/HomePage/Banner/Banner${i}.png`) )
}

const titles=["select rugs","select dining room furniture","select bedding and bath","select lightning and celling fans","select home decor","select bedroom furniture"];
 const offers=[];
 for(let i=1;i<=6;i++){
    let obj={}
    obj["image"]=require(`../Images/HomePage/Images/Image${i}.png`);
    obj["title"] =titles[i-1]
    offers.push(obj )
}
 export  {banners,offers}