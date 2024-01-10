import '../static/index.css'

import React, { useEffect, useState } from 'react'

import Recipes from '../products'
import axios from 'axios'

const Home = () => {

    const [search, setSearch] = useState("")
    const [recipe, setRecipe] = useState([]);
    const [cartItems, SetcartItems] = useState([]);
    const [totalCart, SetTotalCart] = useState(0);


    const url = {
        method: 'GET',
        url: 'https://the-birthday-cake-db.p.rapidapi.com/',
        headers: {
            'X-RapidAPI-Key': '6710de5924msh91015ff8e3df3cfp18985ajsn4fe3c94ff3a7',
            'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
        }
    };

    //let url = 'https://fakestoreapi.com/products';

    console.log(recipe, 'recipeeeeeeee');
    const FetchRecipes = async () => {
        try {
            const response = await axios.request(url);
            console.log(response.data);
            setRecipe(response.data);

        } catch (error) {
            console.log(error, 'Woops! error error');
        }
    }
    useEffect(() => {
      FetchRecipes()
    }, [])

    const addToCart = (item) => {
        SetcartItems([...cartItems, item]);
        SetTotalCart(totalCart + item.price);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }
    const filteredItems = recipe.filter(items => {
        return items.title.toLowerCase().includes(search.toLowerCase());
    })
    return (
        <main>

            <section className='search-container'>
                <div className='card'>
                    <h1>Your Best <br /> <span>Cake Collection</span></h1>
                </div>
                <div className='heading-one'>
                    <h1>Your Best <span>Cake Collection</span></h1>
                </div>
                <div className='card'>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={search}
                            onChange={handleChange}
                            placeholder='Search cake'
                        />
                        <button type='submit'>Search</button>
                    </form>
                </div>
            </section>
            <section className='recipes-section'>
                {
                    filteredItems.map((item)=>{
                        return (
                            <div key={ item.id} className='recipes-wrapper'>
                                <img src={ item.image } alt="" />
                                <div className='recipes-box'>
                                    <h4>{item.title}</h4>
                                    <p>₦{item.price}</p>
                                    <p>{ item.description}</p>
                                    <p>{ item.category}</p>
                                    <button onClick={()=>addToCart(item)}>Order</button>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
            <section className="cart-section">

            </section>

        </main>
    )
}

export default Home
