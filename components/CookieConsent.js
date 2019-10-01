import React, { Fragment } from "react";
import PropTypes from "prop-types";

const CookieConsent = () => {
  const scriptSrc =
    "https://cdn.cookielaw.org/consent/381823a8-df24-4eb8-bb20-bab727e5f464.js";

  return (
    <Fragment>
      <script src={scriptSrc} type="text/javascript" charSet="UTF-8" />
    </Fragment>
  );
};

CookieConsent.propTypes = {
  tld: PropTypes.string,
  locale: PropTypes.string
};

CookieConsent.defaultProps = {
  tld: undefined,
  locale: undefined
};

export default CookieConsent;
