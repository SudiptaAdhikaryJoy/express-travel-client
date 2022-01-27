import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const carouselItem = [
        {
            hading: "Sweden the coastal Islands",
            name: "Swordfish",
            description: "This beautifully coloured swordfish is leaping the crest of a wave. John leaves natural wood showing through the swelling sea to create texture and depth.",
        },
        {
            hading: "The nature of Switzerland",
            name: "Silver Fruit Platter",
            description: "The middle of this lovely contoured platter has silver leaf detail. The cherries, plum, apples and pear are covered in distressed silver leaf which allows the black base to show through.",
        },
        {
            hading: "The northern nature of Finland",
            name: "Shire Horse",
            description: "From the flowing mane to the feathers on his fetlocks Sue captures perfectly the pleasure of this horse enjoying a good canter.",
        }
    ]

    return (
        <div className='bg-yellow-600'>
            <Slider className="w-11/12 mx-auto" {...settings}>
                {
                    carouselItem.map((item, i) => <div key={i}>
                        <div className="flex items-center justify-center rounded-3xl py-16 h-5/6">
                            <div className="px-4 text-center space-y-4">
                                <h1 className="text-white text-5xl font-bold">{item.hading}</h1>
                                <h3 className="font-bold text-2xl">{item.name}</h3>
                                <p className="w-8/12 mx-auto font-semibold text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    </div>)
                }
            </Slider>

        </div>
    );
};

export default HeroCarousel;