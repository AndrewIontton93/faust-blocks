import React from 'react';
import { gql } from '@apollo/client';

export default function CustomHeading(props) {
  const { attributes } = props;
  const { content = '' } = attributes;

  return (
    <h2
      style={{
        padding: '1em',
        backgroundColor: '#f8f8f8'
      }}
      className="custom-heading-block"
    >
      { content }
    </h2>
  );
}

CustomHeading.fragments = {
  entry: gql`
    fragment CoreHeadingFragment on CoreHeading {
      attributes {
        content
      }
    }
  `,
  key: `CoreHeadingFragment`,
};