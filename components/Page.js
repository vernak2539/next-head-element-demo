import React, { Component } from "react";
import PropTypes from "prop-types";
import NextHead from "next/head";

import Head from "./Head";

export class Page extends Component {
  render() {
    const { children, renderWrapper, pageTitle, ogTitle, image } = this.props;

    const { ENVIRONMENT_NAME: environment } = process.env;

    return (
      <React.Fragment>
        <Head pageTitle={pageTitle} ogTitle={ogTitle} image={image} />
        <NextHead>
          {environment !== "production" && (
            <meta name="robots" content="noindex" />
          )}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        </NextHead>
        {renderWrapper(children)}
      </React.Fragment>
    );
  }
}

Page.propTypes = {
  ...Head.propTypes,
  children: PropTypes.node.isRequired,
  renderWrapper: PropTypes.func
};

Page.defaultProps = {
  ...Head.defaultProps,
  renderWrapper: children => <div>{children}</div>
};

export default Page;
