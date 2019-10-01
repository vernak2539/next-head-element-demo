import React from "react";
import PropTypes from "prop-types";
import NextHead from "next/head";

import CookieConsent from "./CookieConsent";

const Head = ({
  pageTitle = "default_page_title",
  ogTitle = "XXXX",
  image = {
    width: 1208,
    height: 630,
    src: "https://image.flaticon.com/icons/svg/220/220233.svg"
  }
}) => {
  return (
    <NextHead>
      <title>{pageTitle}</title>
      <meta name="nosnippet" />

      <meta property="og:title" content={ogTitle} />
      <meta property="twitter:image" content={image.src} />
      <CookieConsent />
    </NextHead>
  );
};

Head.propTypes = {
  pageTitle: PropTypes.string,
  ogTitle: PropTypes.string,
  image: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired
  })
};

Head.defaultProps = {
  pageTitle: undefined,
  ogTitle: undefined,
  image: undefined
};

export default Head;
