import React from "react";
import { H4, Paragraph } from "../Heading";
import { Div } from "../Sections";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Carousel from "../Carousel";

const Gallery = ({
  heading,
  paragraph,
  images,
  customSettingsCarousel,
  widthImage,
  heightImage,
  previousArrow,
  nextArrow,
  horizontal,
}) => {
  return (
    <>
      <Div
        flexDirection="column"
        padding="20px 20px"
        padding_md="40px 80px"
        padding_lg="40px 0px"
        padding_tablet="40px 40px 10px 40px"
        margin_tablet="0 auto 30px auto"
        margin="0 0 36px 0"
        maxWidth={"1280px"}
      >
        {heading && (
          <Div
            alignItems="start"
            flexDirection="column"
            flexDirection_tablet="row"
            padding_lg="0 5%"
            gap="24px"
          >
            <Div width_tablet="30%">
              <H4
                fontSize="30px"
                lineHeight="36px"
                fontWeight="700"
                textAlign="center"
                textAlign_tablet="start"
              >
                {heading}
              </H4>
            </Div>
            <Div width_tablet="70%">
              <Paragraph
                textAlign="center"
                textAlign_tablet="start"
                margin="0 0 50px 0"
              >
                {paragraph}
              </Paragraph>
            </Div>
          </Div>
        )}
        <Div
          alignItems="center"
          justifyContent="between"
          position="relative"
          display="block"
        >
          <Carousel
            settings={
              customSettingsCarousel || {
                dotsClass: "slick-dots-staff",
                slidesToShow: 3,
                slidesToScroll: 3,
                className: "carousel-class ", // staff-class | carousel-class-noprev-arrow | carousel-class-nonext-arrow | carousel-class-noarrow
                responsive: [
                  {
                    breakpoint: 1439,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      infinite: false,
                      dots: true,
                    },
                  },
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      infinite: false,
                      dots: true,
                    },
                  },
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      infinite: false,
                      dots: true,
                    },
                  },
                  {
                    breakpoint: 450,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: false,
                      dots: true,
                    },
                  },
                ],
              }
            }
            previousArrow={previousArrow}
            nextArrow={nextArrow}
          >
            {Array.isArray(images) &&
              images.map((item, index) => {
                return (
                  <Div
                    width={widthImage || "100%"}
                    height={heightImage || "100%"}
                  >
                    <GatsbyImage
                      image={getImage(
                        item.path && item.path.childImageSharp.gatsbyImageData
                      )}
                      style={{
                        height: "100%",
                        //width: "220px",
                        //minWidth: "100%",
                        backgroundSize: `cover`,
                      }}
                      alt={item.alt}
                    />
                  </Div>
                );
              })}
          </Carousel>
        </Div>
      </Div>
    </>
  );
};

export default Gallery;
