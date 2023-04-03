import React from 'react';
import { gql } from '@apollo/client';

export default function LunaB01HomeHero(props) {
  const { attributes } = props;
  const { outline = 'Get', heading = 'Clarity', summary } = attributes;

  return (
    <article className="alignfull wp-luna-block no-margin">
      <div className="container">
        <h1 className="heading">
          { outline &&
            <span className="outline">{ outline }</span>
          }
          { heading &&
            <span className="solid">{ heading }</span>
          }
        </h1>
        { summary &&
          <p className="summary">{ summary }</p>
        }
      </div>
    </article>
  );
}

LunaB01HomeHero.fragments = {
  entry: gql`
    fragment LunaB01HomeHeroFragment on LunaB01HomeHero {
      attributes {
        outline
        heading
        summary
      }
    }
  `,
  key: `LunaB01HomeHeroFragment`,
};