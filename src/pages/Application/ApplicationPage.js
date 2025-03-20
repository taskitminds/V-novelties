import React from 'react'
import "./ApplicationPage.css"
import styled from 'styled-components';

var listcard = [{title:"",image:"",des:""}]


const Card = ({title,image,des}) => {
  return (
    <StyledWrapper>
      <div className="rareCard">
        <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.37 1277.39" clipRule="evenodd" fillRule="evenodd" imageRendering="optimizeQuality" textRendering="geometricPrecision" shapeRendering="geometricPrecision" version="1.1" height="100%" width="100%" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" className="rareImage">
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer" />
            <g id="_1421394342400">
              <g>
                <polygon points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54" fillRule="nonzero" fill="#343434" />
                <polygon points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33" fillRule="nonzero" fill="#8C8C8C" />
                <polygon points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89" fillRule="nonzero" fill="#3C3C3B" />
                <polygon points="392.07,1277.38 392.07,956.52 -0,724.89" fillRule="nonzero" fill="#8C8C8C" />
                <polygon points="392.07,882.29 784.13,650.54 392.07,472.33" fillRule="nonzero" fill="#141414" />
                <polygon points="0,650.54 392.07,882.29 392.07,472.33" fillRule="nonzero" fill="#393939" />
              </g>
            </g>
          </g>
        </svg>
        <div className="rareTextBox">
          <p className="rareHead">{title}</p>
          <p className="rareDescription">{des}</p>
          <p className="rarePrice">1.654,34€</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .rareCard {
    width: 195px;
    height: 285px;
    background: #313131;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    transition: 0.2s ease-in-out;
    position: relative;
    cursor: pointer;
  }

  .rareImage {
    height: 60%;
    position: absolute;
    transition: 0.2s ease-in-out;
    z-index: 1;
  }

  .rareTextBox {
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: end;
    width: 100%;
    height: 100%;
    gap: 0em;
    padding: 1em;
    z-index: 5;
    transition: 0.2s ease-in-out;
  }

  .rareTextBox > .rareHead {
    font-size: 1em;
    font-weight: bold;
  }

  .rareTextBox > .rarePrice {
    font-size: 1em;
    font-weight: bold;
  }

  .rareTextBox > .rareDescription {
    font-size: 0.8em;
    color: lightgrey;
    font-weight: light;
  }

  .rareCard:hover > .rareTextBox {
    opacity: 1;
    gap: 0.5em;
  }

  .rareCard:hover > .rareImage {
    filter: blur(3px);
    animation: anim 3s infinite ease-in-out;
  }

  @keyframes anim {
    50% {
      transform: translateY(-10%) rotate(5deg);
    }
  }

  .rareCard:hover {
    transform: scale(1.04);
  }
`;


export default function ApplicationPage() {
  return (
    <>
    <h1 className="rarePageTitle">Application</h1>
    
    <div className="rareCloudContainer">
        <div className="rareCloud">
            <p><strong>Industries, be in the service of/perform duties on</strong></p>
        </div>
        <div className="rareCloud">
            <p><strong>Formulated products that serve a vast range of industries but unbounded</strong></p>
        </div>
    </div>
    {
    <div className="rareCardContainer">
        {
            listcard.map((cad,index)=>(
                <Card title={cad.title} image={cad.image} des={cad.des} key={index}/>
            ))
        }
    </div>
}
    </>
  )
} 
