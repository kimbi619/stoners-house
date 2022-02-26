import Carousel from 'react-elastic-carousel';
import OpenProductItem from './OpenProductItem';
import { IoStarSharp } from 'react-icons/io5'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 320, itemsToShow: 1, itemsToScroll: 1 },
    { width: 500, itemsToShow: 1 },
    { width: 650, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 }
  ];


  const Opened = ({ isLoading, product }) => {
      
    
    
      if (isLoading){
          return <div className="preloader"></div>
        }
        
        const {name, description, price, rating} = product;
        let medias = [];
        if(product.productImage){
            product.productImage.forEach(elt => {
                medias.push(elt.fields.file.url);
            });
        }
          const stars = Array(5).fill(0);
              const colors={
                blue: "#EFAD15",
                gray: "#a9a9a9"
              }
          
    

    return (
        <div className='openedProduct'>
            <div className="productFlexWrapper">
                <div className="flexItem">
                    <div className="imgWrapper">
                        <Carousel 
                            enableAutoPlay autoPlaySpeed={2500} 
                            breakPoints={breakPoints} 
                            alternate
                            renderPagination={({ pages, activePage, onClick }) => {
                                return (
                                    <>
                                    </>
                                )
                            }}
                            className="carouselWrapper"
                            >
                            {
                                medias.map(media=>(
                                    <OpenProductItem>
                                    <div className="productPageImgWrapper">
                                        <img src={media} alt={name} />
                                    </div>
                                    </OpenProductItem>
                                ))
                            }
                        </Carousel>
                    </div>

                </div>
                <div className="flexItem flexItemTwo">
                    <div className="price-rate">
                        <h2 className="name">{name}</h2>
                        <div className="rating">
                            {stars.map((_, index)=>(
                                <IoStarSharp className="star"
                                    key = {index} 
                                    color={(rating) > index ? colors.blue: colors.gray}
                                />
                            ))}
                            <span> - {price} reviews</span>
                        </div>
                    </div>
                    <div className="openedItemDescription">
                        <h4 className="title">Description</h4>
                        <p>{description} </p>
                    </div>
                    <div className="inlineButton">
                        <button className="buyBtn openedButton productPlaceOrder">Place order</button>
                        <button className="buyBtn openedButton addToCart">Add to cart</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Opened
