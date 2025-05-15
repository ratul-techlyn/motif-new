export const FONT_SIZE = {
    head1: "42px",
    head3: "30px",
    head5: "24px",
    head6: "20px",
    para1: "15px",
    para3: "12px",
    para4: "11px",

    title_lg: "calc(100vw/32)",
    //start custom design class
    animated_contact_2xl: "75px",
    animated_contact_lg: "75px",
    animated_contact_md: "75px",
    animated_contact_sm: "25px",
    home_hero_title_2xl: "calc(100vw/32)",
    home_hero_title_lg: "calc(100vw/30)",
    home_hero_title_md: "calc(100vw/20)",
    home_hero_title_sm: "calc(4.16667vw)",
    hero_title_lg: "calc(100vw/34)",
    hero_title_md: "calc(100vw/24)",
    hero_title_sm: "calc(4.16667vw)",
    other_hero_title_sm: "calc(4.16667vw)",
    other_hero_title_md: "calc(100vw/24)",
    other_hero_title_lg: "calc(100vw/34)",
    other_hero_title_2xl: "calc(100vw/34)",
    hero_subtitle_2xl: "calc(100vw/68)",
    hero_subtitle_lg: "calc(100vw/68)",
    hero_subtitle_md: "calc(100vw/64)",
    hero_subtitle_sm: "calc(100vw/24)",
    section_title_2xl: "calc(100vw/180)",
    section_title_lg: "calc(100vw/120)",
    float_card_text_desc_2xl: "15px",
    float_card_text_desc_lg: "15px",
    float_card_text_desc_md: "15px",
    float_card_text_desc_sm: "15px",
    float_card_text_title_2xl: "1vw",
    float_card_text_title_lg: "1vw",
    float_card_text_title_md: "1vw",
    float_card_text_title_sm: "1vw",


    section_title_md: "calc(100vw/120)",
    section_title_sm: "calc(100vw/40)",
    section_subtitle_2xl: "calc(100vw/120)",
    section_subtitle_lg: "calc(100vw/75)",
    section_subtitle_md: "calc(100vw/48)",
    section_subtitle_sm: "calc(100vw/30)",
    section_heading_2xl: "calc(100vw/40)",
    section_heading_lg: "calc(100vw/40)",
    section_heading_md: "calc(100vw/52)",
    section_heading_sm: "calc(100vw/12)",

    lft_section_heading_2xl: "calc(100vw/65)",
    lft_section_heading_lg: "calc(100vw/65)",
    lft_section_heading_md: "calc(100vw/55)",
    lft_section_heading_sm: "calc(100vw/55)",

    cart_title_2xl: "calc(100vw/82)",
    cart_title_lg: "calc(100vw/86)",
    cart_title_md: "calc(100vw/42)",
    cart_title_sm: "calc(100vw/24)",

    persp_title_2xl: "calc(100vw/75)",
    persp_title_lg: "calc(100vw/85)",
    persp_title_md: "calc(100vw/95)",
    persp_title_sm: "calc(100vw/24)",

    large_para_2xl: "calc(100vw/68)",
    large_para_lg: "calc(100vw/34)",
    large_para_md: "calc(100vw/24)",
    large_para_sm: "calc(100vw/16)",
    testimonial_2xl: "1.7vw",
    testimonial_lg: "1.7vw",
    testimonial_md: "1.5vw",
    testimonial_sm: "4.5vw",
    accordion_question: "calc(100vw/60)",
    accordin_title: "calc(100vw/52)",
  }

  export const LINE_HEIGHT = {
    // This object is currently empty
  }

  export const LETTER_SPACING = {
    // This object is currently empty
  }

  // New content starts here
  export const RESPONSIVE_FONT_SIZES = {
    base: {
      mobile: "14px",
      tablet: "15px",
      desktop: "15px",
      largeDesktop: "16px",
    },
    // Add more responsive font sizes as needed
  }

  export const BREAKPOINTS = {
    mobile: 0,
    tablet: 640,
    desktop: 1024,
    largeDesktop: 1400,
  }

  export function getResponsiveFontSize(size: keyof typeof RESPONSIVE_FONT_SIZES) {
    const fontSizes = RESPONSIVE_FONT_SIZES[size]
    return `
          font-size: ${fontSizes.mobile};
          @media (min-width: ${BREAKPOINTS.tablet}px) {
              font-size: ${fontSizes.tablet};
          }
          @media (min-width: ${BREAKPOINTS.desktop}px) {
              font-size: ${fontSizes.desktop};
          }
          @media (min-width: ${BREAKPOINTS.largeDesktop}px) {
              font-size: ${fontSizes.largeDesktop};
          }
      `
  }