
.header {
    display: flex;
    justify-content: space-between;
    border : 2px solid black;
    background-color: rgba(255, 0, 0, 0.804);
}

.body{
    border: 1px solid black;
}

.logo-img {
    width: 120px;
    padding: 5px;
}


.nav-items > ul { 
    display: flex;
    list-style-type: none ;
    padding: 0px 20px;
    font-size: 20px;
}
.nav-items > ul > li {
    padding: 10px;
    margin: 10px;
}
.res-img{
    width: 90%;
    height: 200px;
    padding: 5px;
    border-radius: 15;
}

.search{
    padding: 15px;
}
.res-card{
    width: 300px;
    /* height: 420px; */
    margin: 5px;
    padding: 5px;
    background-color: #f0f0f0e1;
}
.res-card:hover {
    cursor: pointer;
    border: 1px solid black;
}

.resturent-container{
    display: flex;
    flex-wrap: wrap;
    border: 1px solid black;
    background-color: rgba(255, 235, 205, 0.939);
}
.res-card > h3{
    color: red;
}

.filter-btn{
    margin: 10px;
    cursor: pointer;
    /* flex:2;
    align-items: center;
    justify-content: center; */
    border-radius: 12;
}

.cart-btn{
    cursor: pointer;
    color: red;
    font-size: 18;
    padding: 10px;
    border-radius: 10;
}
.shimmer-container{
    display: flex;
    flex-wrap: wrap;
}

.shimmer-card{
    width: 300px;
    height: 350px;
    background-color: #f0f0f0e1;
    margin: 20px;


}

.login-btn{
    padding: 0 20px;
    font-size: 18;
    font-style: oblique;
    border-radius: 12;
    cursor: pointer;
    font-weight: 600;
}
.filter{
    display: flex;
}
.search-btn{
    cursor: pointer;
    border-radius: 10;
}

.user-card{
    padding: 10px;
    border: 2px solid black ;
    border-radius: 10;
    margin: 7;
}
.res-Img{
    width: 250;
    height: 250;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    border-radius: 14;
}
.item-img{
    width: 100; 
    height: 100; 
    /* margin: 10; */
    padding: 10px;
    /* display: flex; */
    flex: 1;
    justify-content: flex-end;
}
.itemList{
    border-radius: 10;
    margin: 10;
    border: 1px solid black;
    padding: 10;
    /* display: flex; */
}

 {resturant.info.isOpen ? (<OpenedRestaurant resData={resturant} /> : <ResturantCard  resData={resturant}/> )}


  <h2 className="font-bold text-2xl">Menu :</h2>
            <ul>
               {itemCards.map((item)=>
               // <li >{item.card.info.name} -{/** {item.card.info.price/100}*/ }</li>
               <li className="border-2 border-gray-100 m-2 p-1" key={item.card.info.id} >
                {item.card.info.name} - {"Rs."}{item.card.info.price/100 || item.card.info.defaultPrice/100} 
                <img className="w-40" src={CDN_URL + item.card.info.imageId} />
                </li>
               )}
            </ul>