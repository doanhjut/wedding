import React from 'react'

import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import Grid from '../components/Grid'
import heroSliderData from '../assets/fake-data/hero-slider'
import { Link, animateScroll as scroll } from "react-scroll";

import banner from '../assets/images/banner.png'
import Header from '../components/Header'
import BannerSlider from '../components/BannerSlider'

const Home = () => {

    const scrollToComponent = (value) => {
        if (value === "Trang chủ") {
            scroll.scrollTo(0); // Cuộn đến vị trí 0
        } else if (value === "Sản phẩm") {
            scroll.scrollTo(978); // Cuộn đến vị trí 500
        }
    }

    return (
        <Helmet title="Trang chủ">
            <Header scrollToComponent={scrollToComponent} />
            {/* hero slider */}
            {/* <HeroSlider
                data={heroSliderData}
                control={true}
                auto={true}
                timeOut={5000}
            /> */}
            {/* end hero slider */}
            <BannerSlider />
            {/* banner */}
            <Section>
                <SectionBody>
                    {/* <Link to="/catalog">
                        <img src={banner} alt="" />
                    </Link> */}
                </SectionBody>
            </Section>
            {/* end banner */}
            {/* end popular product section */}
        </Helmet>
    )
}

export default Home
