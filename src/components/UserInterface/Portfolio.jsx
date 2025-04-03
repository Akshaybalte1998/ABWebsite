import React, { useState, useEffect } from 'react';
import data from "../../assets/dada/portfolioData";
import Modal from './Modal';
import Header from '../Header/Header';

const Portfolio = () => {
    const [nextItems, setNextItems] = useState(6);
    const [portfolios, setPortfolios] = useState(data);
    const [selectTab, setSelectTab] = useState('ALL');
    const [showModal, setShowModal] = useState(false);
    const [activeID, setActiveID] = useState(null);

    const showModalHandler = id => {
        setShowModal(true);
        setActiveID(id);
    };

    useEffect(() => {
        if (selectTab === 'ALL') {
            setPortfolios(data);
        } else if (selectTab === 'Web Design') {
            const filteredData = data.filter(item => item.category === 'Web Design');
            setPortfolios(filteredData);
        } else if (selectTab === 'Ux Design') {
            const filteredData = data.filter(item => item.category === 'Ux');
            setPortfolios(filteredData);
        }
    }, [selectTab]);

    return (
        <div id="Portfolio">
            <div className="container">
                {/* Header Section */}
                <div className="header" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#4CAF50', padding: '10px' }}>
                <h2 className="title" style={{ fontFamily: 'Arial, sans-serif', fontStyle: 'italic', color: '#FFFFFF', margin: 0 }}>Credentials & Certificates</h2>

                </div>

                {/* Portfolio Grid Section */}
                <div className='portfolio-grid'>
                    {/* Display first 3 items in the top section */}
                    {portfolios?.slice(0, 3)?.map((portfolio, index) => (
                        <div key={index} className='portfolio-item'>
                            <figure>
                                <img className="portfolio-img" src={portfolio.imgUrl} alt="" />
                            </figure>
                            <div className='overlay'>
                                <div className='overlay-content'>
                                    <button onClick={() => showModalHandler(portfolio.id)} className='details-button'>
                                        See details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Display next 2 items in the bottom section */}
                <div className='portfolio-grid'>
                    {portfolios?.slice(3, 5)?.map((portfolio, index) => (
                        <div key={index} className='portfolio-item'>
                            <figure>
                                <img className="portfolio-img" src={portfolio.imgUrl} alt="" />
                            </figure>
                            <div className='overlay'>
                                <div className='overlay-content'>
                                    <button onClick={() => showModalHandler(portfolio.id)} className='details-button'>
                                        See details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal that appears below the header */}
                {showModal && (
                    <div className="modal-container">
                        <Modal setShowModal={setShowModal} activeID={activeID} />
                    </div>
                )}

            </div>

            {/* Styles */}
            <style jsx>{`
                #Portfolio {
                    font-family: Arial, sans-serif;
                }

                .container {
                    width: 90%;
                    margin: 0 auto;
                }

                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }

                .title {
                    font-size: 2rem;
                    font-weight: 700;
                    color: #333;
                }

                .portfolio-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1rem;
                    margin-bottom: 2rem;
                }

                .portfolio-item {
                    position: relative;
                    overflow: hidden;
                    border-radius: 8px;
                    transition: transform 0.3s;
                }

                .portfolio-item:hover {
                    transform: scale(1.05);
                }

                .portfolio-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s;
                }

                .portfolio-item:hover .overlay {
                    opacity: 1;
                }

                .overlay-content {
                    text-align: center;
                }

                .details-button {
                    background-color: #333;
                    color: #fff;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }

                .details-button:hover {
                    background-color: #555;
                }

                /* Modal Container */
                .modal-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.3); /* Semi-transparent background */
                    z-index: 9999;
                    padding-top: 60px;
                }

                /* Modal */
                .modal-content {
                    background-color: #fff;
                    border-radius: 8px;
                    padding: 20px;
                    width: 70%;
                    max-width: 500px;
                    text-align: center;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                }
            `}</style>
        </div>
    );
};

export default Portfolio;
