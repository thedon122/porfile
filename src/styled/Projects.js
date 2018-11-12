import React, { Component } from 'react';
import { Card, Col, CardTitle, Row, Modal, Button } from 'react-materialize';
import styled from 'styled-components';
import ConnectFour from './Screen_Shot_2018_07_03_at_8.20.30_PM.png';
import EventPlaner from './Screen_Shot_2018-06-05_at_12.50.54_PM.png';
import Resume from './Screen_Shot_2018-07-03_at_8.12.47_PM.png';
import { Document, Page } from 'react-pdf';
import FullResume from './Donovan-s_Resume.pdf';

const BodyContainer = styled.div`
margin: auto;
width: 90vw;
height: 90vh;
overflow: scroll;
`
const CardContainer = styled.div`

`
const CP = styled.div`
overflow: scroll;
font-size: 12px;
`
class Projects extends Component {
    state = {
        trigger: false,
        numPages: null,
        pageNumber: 1,
    };
    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;
        return (
            <div>
                <BodyContainer>
                    <Row>
                        <Col m={4} s={12}>
                            <CardContainer>
                                <Card className='Small'
                                    header={<CardTitle image={ConnectFour}></CardTitle>}
                                    actions={[<a href='http://angry-liskov-b1ef76.bitballoon.com/' key={0}><Button>Link for App</Button></a>]}>
                                    <CP>Connect Four is a two player game in which players take turns droping disc from the top of a a seven-column by six-row vertically. The game will start when a player clicks on new game</CP>
                                </Card>
                            </CardContainer>
                        </Col>
                        <Col m={4} s={12}>
                            <CardContainer>
                                <Card className='Small'
                                    header={<CardTitle image={EventPlaner}></CardTitle>}
                                    actions={[<a href='https://young-fjord-21221.herokuapp.com/' key={0}><Button>Link for App</Button></a>]}>
                                    <CP>This application is used to help users plan activities for event. Many people may have trouble firguring out what activities they would like to prioritize during an event.</CP>
                                </Card>
                            </CardContainer>
                        </Col>
                        <Col m={4} s={12}>
                            <CardContainer>
                                <Card className='Small'
                                    header={<CardTitle image={Resume}></CardTitle>}
                                    actions={[<Modal 
                                        key={0}
                                        header='Resume'
                                        trigger={<Button>Resume Pop-up</Button>}>
                                        <Document
                                            file={FullResume}
                                            onLoadSuccess={this.onDocumentLoad}
                                        >
                                            <Page pageNumber={pageNumber} />
                                        </Document>
                                        <p>Page {pageNumber} of {numPages}</p>
                                    </Modal>]}>
                                    <CP>This application is used to help users plan activities for event. Many people may have trouble firguring out what activities they would like to prioritize during an event.</CP>
                                </Card>
                            </CardContainer>
                        </Col>

                    </Row>
                </BodyContainer>
            </div>
        )
    }
}

export default Projects