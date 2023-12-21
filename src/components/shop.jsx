// Shop.jsx
import React from 'react';
import './shop/shop.css';
import Button from './shop/shopbutton.jsx';

const Shop = () => {
    // Styling for images
    const imgStyle = {
        width: '100%', 
        height: '100%',
        objectFit: 'cover',
      };
    
    return (
        // Banner and description for the page
        <div className="shop-page">
          <div className="banner">
            <img
              src="./images/hangers.jpg"
              alt="Shop Banner"
              className="banner-image"
            />
          </div>
            <div className='page-description'>
                <p> 
                    Discover a diverse and trendy collection of plus size clothing 
                    meticulously curated for every body shape and style. Our shop is a 
                    celebration of inclusivity, offering an extensive range of affordable 
                    and fashionable pieces designed to empower and inspire. From chic 
                    dresses and cozy loungewear to statement-making accessories, each 
                    item is crafted with the utmost attention to detail to ensure a perfect 
                    fit and maximum comfort. Whether you're seeking everyday essentials or 
                    runway-worthy looks, KS Designs is your go-to destination for embracing 
                    your curves with confidence and flair. Explore the latest fashion trends 
                    reimagined for all sizes and experience the joy of expressing your unique 
                    style in every click. Welcome to a world where fashion truly has no 
                    boundaries!
                </p>
                <h1>WOMEN'S CLOTHES</h1>
            </div>
        
        {/* Code for images of tops */}
            <div className='tops'>
            <h2>TOPS</h2>
            <div className="tops-container">
                
                {/* Code for the short sleeve picture including popup description */}
                <figure>
                    <img
                        src='./images/shortSleeve.jpg'
                        alt='Short Sleeve Shirt'
                        style={imgStyle}
                        className='short-sleeve'
                    />

                    <figcaption>
                        <Button 
                            buttonText="Short Sleeves"
                            content={
                                <div>
                                    <img src={"./images/shortSleeve.jpg"} style={imgStyle} alt="Short Sleeve"/>
                                    <h2>Short Sleeve Blouse</h2>
                                    <p>The brown flow short sleeve shirt is a casual and versatile garment, 
                                        featuring a rich brown hue that adds warmth to its overall appearance. 
                                        With a comfortable and relaxed fit, the shirt is characterized by a subtle 
                                        flow pattern, contributing to a laid-back and stylish aesthetic suitable 
                                        for various occasions.
                                    </p>
                                    <p>Size: 
                                        <button className='size-button'>1X</button>
                                        <button className='size-button'>2X</button>
                                        <button className='size-button'>3X</button>
                                        <button className='size-button'>4X</button>
                                    </p>
                                    <p>Price: $25.99</p>
                                    <button className='size-button'>Add to Cart</button>
                                </div>
                            }
                        />
                    </figcaption>
                </figure>

                {/* Code for the cardigan picture including popup description */}
                <figure>
                    <img
                        src='./images/cardigan.jpg'
                        alt='Green Cardigan'
                        style={imgStyle}
                        className='cardigan'
                    />
                    <figcaption>
                        <Button 
                            buttonText="Cardigan"
                            content={
                                <div>
                                    <img src={"./images/cardigan.jpg"} style={imgStyle} alt="Green Cardigan"/>
                                    <h2>Cardigan</h2>
                                    <p>The green cardigan is a classic wardrobe staple, blending 
                                        comfort and style seamlessly. Its lush green color exudes 
                                        a sense of freshness, while the soft knit fabric provides 
                                        warmth and coziness. With a button-front design and a timeless 
                                        silhouette, this cardigan effortlessly elevates both casual 
                                        and semi-formal ensembles.
                                    </p>
                                    <p>Size: 
                                        <button className='size-button'>1X</button>
                                        <button className='size-button'>2X</button>
                                        <button className='size-button'>3X</button>
                                        <button className='size-button'>4X</button>
                                    </p>
                                    <p>Price: $35.99</p>
                                    <button className='size-button'>Add to Cart</button>
                                </div>
                            }
                        />
                    </figcaption>
                </figure>

                {/* Code for the long sleeve picture including popup description */}
                <figure>
                    <img
                        src='./images/blouse.jpg'
                        alt='Blouse'
                        style={imgStyle}
                        className='blouse'
                    />
                    <figcaption>
                        <Button 
                            buttonText="Blouse"
                            content={
                                <div>
                                    <img src={"./images/blouse.jpg"} style={imgStyle} alt="Long Sleeve Blouse"/>
                                    <h2>Long Sleeve Blouse</h2>
                                    <p>The long sleeve blouse is an elegant and versatile wardrobe essential, 
                                        offering a polished look for various occasions. Crafted with attention 
                                        to detail, its sleeves provide added coverage while maintaining a 
                                        graceful silhouette. The blouse is designed to be both comfortable and 
                                        stylish, making it a go-to choice for professional settings or 
                                        sophisticated casual wear.
                                    </p>
                                    <p>Size: 
                                        <button className='size-button'>1X</button>
                                        <button className='size-button'>2X</button>
                                        <button className='size-button'>3X</button>
                                        <button className='size-button'>4X</button>
                                    </p>
                                    <p>Price: $30.99</p>
                                    <button className='size-button'>Add to Cart</button>
                                    
                                </div>
                            }
                        />
                    </figcaption>
                </figure>
            </div>
            </div>

        
        {/* Code for images of pants */}
            <div className='tops'>
                <h2>BOTTOMS</h2>
                <div className="tops-container">
            
            {/* Code for the black pants picture including popup description */}
            <figure>
                <img
                    src='./images/pants.jpg'
                    alt='Black Pants'
                    style={imgStyle}
                    className='black-pants'
                />

                <figcaption>
                    <Button 
                        buttonText="Pants"
                        content={
                            <div>
                                <img src={"./images/pants.jpg"} style={imgStyle} alt="Black Pants"/>
                                <h2>Pants</h2>
                                <p>Classic black pants are a timeless wardrobe staple that 
                                    effortlessly combines sophistication with versatility. 
                                    Tailored for a polished fit, these pants offer a sleek and 
                                    streamlined silhouette suitable for a range of occasions, 
                                    from formal events to everyday wear. The neutral black hue 
                                    ensures easy pairing with various tops and accessories, 
                                    making them an essential foundation piece for any wardrobe.
                                </p>
                                <p>Size: 
                                    <button className='size-button'>1X</button>
                                    <button className='size-button'>2X</button>
                                    <button className='size-button'>3X</button>
                                    <button className='size-button'>4X</button>
                                </p>
                                <p>Price: $25.99</p>
                                <button className='size-button'>Add to Cart</button>
                            </div>
                        }
                    />
                </figcaption>
            </figure>

            {/* Code for the jeans picture including popup description */}
            <figure>
                <img
                    src='./images/jeans.jpg'
                    alt='Jeans'
                    style={imgStyle}
                    className='jeans'
                />
                <figcaption>
                    <Button 
                        buttonText="Jeans"
                        content={
                            <div>
                                <img src={"./images/Jeans.jpg"} style={imgStyle} alt="Jeans"/>
                                <h2>Jeans</h2>
                                <p>Classic jeans are a wardrobe essential, 
                                    embodying a timeless and casual style that 
                                    transcends trends. Crafted from durable denim, 
                                    these versatile pants provide both comfort and 
                                    durability for everyday wear. Their iconic blue 
                                    hue and timeless design make them a go-to choice 
                                    for a laid-back yet stylish look that seamlessly 
                                    transitions from day to night.
                                </p>
                                <p>Size: 
                                    <button className='size-button'>18</button>
                                    <button className='size-button'>20</button>
                                    <button className='size-button'>22</button>
                                    <button className='size-button'>24</button>
                                </p>
                                <p>Price: $45.99</p>
                                <button className='size-button'>Add to Cart</button>
                            </div>
                        }
                    />
                </figcaption>
            </figure>

            {/* Code for the skirt picture including popup description */}
            <figure>
                <img
                    src='./images/skirt.jpg'
                    alt='skirt'
                    style={imgStyle}
                    className='skirt'
                />
                <figcaption>
                    <Button 
                        buttonText="Skirt"
                        content={
                            <div>
                                <img src={"./images/skirt.jpg"} style={imgStyle} alt="Skirt"/>
                                <h2>Skirt</h2>
                                <p>The classic skirt is a feminine and versatile garment that 
                                    effortlessly complements various styles and occasions. With 
                                    its timeless design and tailored silhouette, it offers a chic 
                                    and graceful look. Whether paired with a blouse for a professional 
                                    setting or a casual top for a more relaxed vibe, the classic skirt 
                                    remains a wardrobe staple that seamlessly blends fashion and 
                                    versatility.
                                </p>
                                <p>Size: 
                                    <button className='size-button'>1X</button>
                                    <button className='size-button'>2X</button>
                                    <button className='size-button'>3X</button>
                                    <button className='size-button'>4X</button>
                                </p>
                                <p>Price: $30.99</p>
                                <button className='size-button'>Add to Cart</button>
                                
                            </div>
                        }
                    />
                </figcaption>
            </figure>
         </div>
            </div>

        {/* Code for images of accessories */}
            <div className='tops'>
                <h2>ACCESSORIES</h2>
                <div className="tops-container">
            
            {/* Code for the belts picture including popup description */}
            <figure>
                <img
                    src='./images/belt.jpg'
                    alt='Belts'
                    style={imgStyle}
                    className='belts'
                />

                <figcaption>
                    <Button 
                        buttonText="Belts"
                        content={
                            <div>
                                <img src={"./images/belt.jpg"} style={imgStyle} alt="Belt"/>
                                <h2>Belts</h2>
                                <p>A classic belt is a functional accessory that adds a 
                                    touch of refinement to any outfit. Crafted from durable 
                                    materials like leather or fabric, it not only serves the 
                                    practical purpose of securing clothing but also enhances 
                                    the overall aesthetic. Whether cinching the waist of a 
                                    dress or adding a finishing touch to a pair of trousers, 
                                    the classic belt is a timeless accessory that effortlessly 
                                    combines style and utility.
                                </p>
                                <p>Size: 
                                    <button className='size-button'>1X</button>
                                    <button className='size-button'>2X</button>
                                    <button className='size-button'>3X</button>
                                    <button className='size-button'>4X</button>
                                </p>
                                <p>Price: $15.99</p>
                                <button className='size-button'>Add to Cart</button>
                            </div>
                        }
                    />
                </figcaption>
            </figure>

            {/* Code for the purses picture including popup description */}
            <figure>
                <img
                    src='./images/purse.jpg'
                    alt='Purse'
                    style={imgStyle}
                    className='purse'
                />
                <figcaption>
                    <Button 
                        buttonText="Purses"
                        content={
                            <div>
                                <img src={"./images/purse.jpg"} style={imgStyle} alt="Purse"/>
                                <h2>Purses</h2>
                                <p>A classic purse is an essential accessory that combines both style 
                                    and practicality. Crafted with attention to detail and often made 
                                    from high-quality materials such as leather, it serves as a versatile 
                                    companion for various occasions. With its timeless design and 
                                    functional compartments, a classic purse not only adds a touch of 
                                    sophistication to an outfit but also provides a practical solution 
                                    for carrying essentials with ease and elegance.
                                </p>
                                <p>Color: 
                                    <button className='size-button'>Black</button>
                                    <button className='size-button'>White</button>
                                    <button className='size-button'>Beige</button>
                                    <button className='size-button'>Brown</button>
                                </p>
                                <p>Price: $45.99</p>
                                <button className='size-button'>Add to Cart</button>
                            </div>
                        }
                    />
                </figcaption>
            </figure>

            {/* Code for the hats picture including popup description */}
            <figure>
                <img
                    src='./images/hat.jpg'
                    alt='hat'
                    style={imgStyle}
                    className='hat'
                />
                <figcaption>
                    <Button 
                        buttonText="Hats"
                        content={
                            <div>
                                <img src={"./images/hat.jpg"} style={imgStyle} alt="Hat"/>
                                <h2>Hats</h2>
                                <p>A floppy summer hat is a stylish and practical accessory that 
                                    exudes laid-back elegance. Crafted from lightweight materials 
                                    like straw or cotton, it features a wide, brimmed silhouette 
                                    that provides ample shade and a breezy feel during warm weather. 
                                    With its relaxed and versatile design, the floppy summer hat 
                                    effortlessly complements beach attire or casual summer outfits, 
                                    making it a go-to accessory for both sun protection and a chic, 
                                    relaxed vibe.
                                </p>
                                <p>Size: 
                                    <button className='size-button'>1X</button>
                                    <button className='size-button'>2X</button>
                                    <button className='size-button'>3X</button>
                                    <button className='size-button'>4X</button>
                                </p>
                                <p>Price: $30.99</p>
                                <button className='size-button'>Add to Cart</button>
                                
                            </div>
                        }
                    />
                </figcaption>
            </figure>
         </div>
        </div>



    </div>
  );
}

export default Shop;