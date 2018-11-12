import styled from 'styled-components';
import React, { Component } from 'react';
import MyImg from './IMG_0781.JPG';


const FlexContainer = styled.div`
display: flex;
flex-direction: row;
width: 90vw;
text-align:center;
overflow: scroll;
margin:auto;
align-content:center;
justify-content:center;
@media (max-width: 600px){
    flex-direction: column;
};
`
const Aboutmetext = styled.p`
display: flex;
font-size: 12px;
padding: 3% 3% 3% 3%;
width: 35vw;
height: 60vh;
overflow: scroll;
@media (max-width: 600px){
    width: 90vw;
    height: 60vh;
    padding: 3% 3% 3% 3%;
    font-size:14px;
};
`
const AboutMeImg = styled.img`
display: flex;
border-radius: 50%;
padding: 3% 3% 3% 3%;
width: 35vw;
height: 60vh;
@media (max-width: 600px){
    height: 50vh;
    width: 90vw;
    padding: 3% 3% 3% 3%;
};
`

class Aboutme extends Component {
    render() {
        return (
            <FlexContainer>
                <div>
                    <AboutMeImg src={MyImg} />
                </div>
                <div>
                    <Aboutmetext>I am a full stack web developer with several years of experience in the IT field. I am a good problem solver, able to grasp new concepts quickly and have a desire for life long learning. I enjoy solving problems because I am not afraid to fail one way if it helps me succeed in the end. Although my time at General Assembly was short I have pickup a host of skills like express, react, and ruby on rails. I constantly read books, often watch documentaries, and constantly taking new classes like real estate, and project management . I have spent over a year as a database administrator and have used that time to build up my skills managing database, building up my programming skills in c# and SQL. My current goals are two fold.  Obtain a position where I can maximize my, quality assurance, program development, and training experience. I also want to foster my life long passion for learning.
            </Aboutmetext>
                </div>
            </FlexContainer>
        )
    }
}

export default Aboutme