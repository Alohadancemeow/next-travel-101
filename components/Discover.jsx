import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
import "swiper/components/effect-coverflow/effect-coverflow.min.css"

const Discover = () => {

    // # install Swiper modules
    SwiperCore.use([EffectCoverflow, Autoplay]);

    const discoverData = [
        {
            id: 1,
            title: 'Muk',
            imageUrl: '/images/v-images/v-image1.jpg',
            desc: '24 hours available'
        },
        {
            id: 2,
            title: 'Muk',
            imageUrl: '/images/v-images/v-image2.jpg',
            desc: '24 hours available'
        },
        {
            id: 3,
            title: 'Muk',
            imageUrl: '/images/v-images/v-image3.jpg',
            desc: '24 hours available'
        },
        {
            id: 4,
            title: 'Muk',
            imageUrl: '/images/v-images/v-image4.jpg',
            desc: '24 hours available'
        },
        {
            id: 5,
            title: 'Muk',
            imageUrl: '/images/v-images/v-image5.jpg',
            desc: '24 hours available'
        },
        {
            id: 6,
            title: 'Muk',
            imageUrl: '/images/v-images/v-image6.jpg',
            desc: '24 hours available'
        },
        {
            id: 7,
            title: 'Muk',
            imageUrl: '/images/v-images/v-image7.jpg',
            desc: '24 hours available'
        },
        {
            id: 8,
            title: 'Muk',
            imageUrl: '/images/v-images/v-image8.jpg',
            desc: '24 hours available'
        },
        {
            id: 9,
            title: 'Muk',
            imageUrl: '/images/v-images/v-image9.jpg',
            desc: '24 hours available'
        },
        {
            id: 10,
            title: 'Muk',
            imageUrl: '/images/v-images/v-image10.jpg',
            desc: '24 hours available'
        },
        {
            id: 11,
            title: 'Muk',
            imageUrl: '/images/v-images/v-image11.jpg',
            desc: '24 hours available'
        },
        {
            id: 12,
            title: 'Muk',
            imageUrl: '/images/v-images/v-image12.jpg',
            desc: '24 hours available'
        },
        {
            id: 13,
            title: 'Muk',
            imageUrl: '/images/v-images/v-image13.jpg',
            desc: '24 hours available'
        },
        {
            id: 14,
            title: 'Muk',
            imageUrl: '/images/v-images/v-image14.jpg',
            desc: '24 hours available'
        },
        {
            id: 15,
            title: 'Muk',
            imageUrl: '/images/v-images/v-image15.jpg',
            desc: '24 hours available'
        },
        {
            id: 16,
            title: 'Muk',
            imageUrl: '/images/v-images/v-image16.jpg',
            desc: '24 hours available'
        },
        {
            id: 17,
            title: 'Muk',
            imageUrl: '/images/v-images/v-image17.jpg',
            desc: '24 hours available'
        },
        {
            id: 18,
            title: 'Muk',
            imageUrl: '/images/v-images/v-image18.jpg',
            desc: '24 hours available'
        },
        {
            id: 19,
            title: 'Muk',
            imageUrl: '/images/v-images/v-image19.jpg',
            desc: '24 hours available'
        },
        {
            id: 20,
            title: 'Muk',
            imageUrl: '/images/v-images/v-image20.jpg',
            desc: '24 hours available'
        },

    ]

    return (
        <DiscoverSection id="discover">
            <DiscoverTitle>
                Discover <br />
                <p>You can go anywhere you want, <br /> But don't forget your toothbrush.</p>
            </DiscoverTitle>
            <DiscoverContainer>
                <Swiper
                    effect='coverflow'
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={true}
                    spaceBetween={32}
                    coverflowEffect={{
                        rotate: 0,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                >
                    {
                        discoverData.map(item => (
                            <SwiperSlide key={item.id}>
                                <DiscoverCard>
                                    <ImageBox>
                                        <img src={item.imageUrl} alt="discover-images" />
                                    </ImageBox>
                                    <TextBox>
                                        <Title>{item.title}</Title>
                                        <Description>{item.desc}</Description>
                                    </TextBox>
                                </DiscoverCard>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </DiscoverContainer>
        </DiscoverSection >
    )
}

export default Discover


// # Styled-components
const DiscoverSection = styled.section`
    padding: 4.5rem 0 2.5rem;

    @media screen and (min-width: 768px) {
        padding: 7rem 0 2rem;
    }
`

const DiscoverTitle = styled.h2`
    font-size: 1.25rem;
    color: hsl(190, 64%, 18%);
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 2rem;

    p {
        margin-top: .75rem;
        text-transform: none;
        font-size: .75rem;
        font-weight: 500;
    }
`

const DiscoverContainer = styled.div`
    max-width: 968px;
    margin-left: 1rem;
    margin-right: 1rem;
    position: relative;

    @media screen and (min-width: 768px) {
        padding-top: 2rem;
        width: 610px;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 1024px) {
        /* width: 700px; */
         width: auto;
    }

    @media screen and (min-width: 1200px) {
        max-width: 1024px;
        width: 100%;
    }
`

const DiscoverWrapper = styled.div``

const DiscoverCard = styled.div`
    position: relative;
    width: auto;
    /* width: 200px; */
    overflow: hidden;


    @media screen and (min-width: 1024px) {
        /* width: 237px; */
        width: auto;
    }
`

const ImageBox = styled.div`
    /* width: 100%; */

    img {
        /* max-width: fit-content; */
        /* height: 350px; */
        /* height: fit-content; */
        transition: 0.3s;

        &:hover {
            transform: scale(1.1);
        }
    }
`

const TextBox = styled.div`
    position: absolute;
    bottom: 1.5rem;
    left: 1rem;
`

const Title = styled.h2`
    color: #fff;
    font-size: 1rem;
    margin-bottom: 0.25rem;

    @media screen and (min-width: 1024px) {
        font-size: 1.75rem;
    }
`

const Description = styled.span`
    color: #fff;
    font-size: 0.75rem;
    display: block;
`
