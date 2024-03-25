<script>
    //price_1Oy4yWSBHpAPnnz8ROAp7UJr
     const Moviename = "Batman"
     const MoviePrice = 1000
     const quantity = 1
     const imageUrl = "https://m.economictimes.com/thumb/msid-106423144,width-1600,height-900,resizemode-4,imgsize-40242/batman-2.jpg"
    

     async function checkOut(){
        await fetch("api/stripeCheckout",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                items:[
                    {
                        id: "price_1Oy4yWSBHpAPnnz8ROAp7UJr",
                        name: Moviename,
                        price: MoviePrice,
                        image: imageUrl,
                        quantity: quantity,
                    }
                ]
            })
        }).then((data)=>{
            return data.json()
        }).then((data)=>{
            window.location.replace(data.url);
        })
    }


</script>


<div class="moviecom">
    <img src="https://m.economictimes.com/thumb/msid-106423144,width-1600,height-900,resizemode-4,imgsize-40242/batman-2.jpg" alt="" />
    <div class="innertext">
        <h3 class="title">Batman</h3>
    </div>
    <div class="pricing">
       <p>₹1000</p>
       <button class="btn" on:click={()=>checkOut()} >BUY</button>
    </div>
</div>

<style>
    .moviecom{
        background-color: rgb(213, 207, 207);
       
        width: 300px;
        max-width: 300px;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }
    img{
        width: 100%;
        height: 100%;
    }
    .innertext{
        padding-top: 20px;
    }
    .pricing{
        padding-top: 20px;
        padding-bottom: 30px;
        display: flex;
        gap: 30px;
        align-items: center;
    }
    .btn{
  padding: 10px 40px;
  outline: none;
  border: none;
  background-color: rgb(221, 119, 119);
  color: black;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
}
p{
  color: rgb(68, 67, 67);
  font-size: 1.4rem;
}
</style>