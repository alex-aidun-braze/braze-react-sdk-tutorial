import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CustomContentCard from '../components/CustomContentCard';
import * as braze from "@braze/web-sdk";


function ContentCards({ cards }) {

    useEffect(() => {
        // TODO: render the standard content cards feed into the 'content-cards' div
        braze.showContentCards(document.getElementById('content-cards'));
    }, [])

    return (
        <ContentCardsContainer>
            <Feed>
                <div>Custom Feed</div>
                <Cards>
                    {/* TODO: loop through cards and only display a CustomContentCard if the KVP 'feed' is 'custom' */}
                    {cards.filter(card => card.extras['feed'] == 'custom').map(card =>
                        <CustomContentCard key={card.id} imageUrl={card.imageUrl} title={card.title} description={card.description} />
                    )}
                </Cards>
            </Feed>
            <Feed>
                <div>Standard Feed</div>
                <Cards>
                    <div id={'content-cards'} />
                </Cards>
            </Feed>
        </ContentCardsContainer>
    )
}

const ContentCardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const Cards = styled.div`
    margin-top: 20px;
`;

const Feed = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 25px;
    margin-top: 60px;
    padding-top: 60px;
    min-width: 400px;
    padding: 10px;
    border: 1px solid grey;
    border-radius: 3px;
`;

export default ContentCards