import React from 'react';
import {Container,  CardColumns, Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody} from 'reactstrap';

const Resources = () => {
    return (
        <div>
            <h2>Weather Info</h2>

            <h2>Local Restraunts</h2>

            <h2>Nearby Hotels</h2>

            <h2>Grocery, Drug, Sporting Goods Stores?</h2>

            <h2>Find Your Next Race!</h2>
            <Container>
            <CardColumns> 
            {/* <CardDeck> */}
                <Card>
                    <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5" className="text-primary" >Spartan Race</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText className="text-muted">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <Button a href="https://www.spartan.com/" target="blank">Spartan Race</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5" className="text-primary">Tough Mudder</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText className="mb-2 text-muted">This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button a href="https://toughmudder.com/" target="blank">Tough Mudder</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5" className="text-primary" >Savage Race</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText className="mb-2 text-muted">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                    <Button a href="https://savagerace.com/" target="blank">Saveage Race</Button>
                    </CardBody>
                </Card>                
                <Card>
                    <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5" className="text-primary" >OCR World Championships</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText className="text-muted">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <Button a href="https://ocrworldchampionships.com/" target="blank">OCR World Championships</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5" className="text-primary">Rugged Maniac</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText className="mb-2 text-muted">This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button a href="https://ruggedmaniac.com/" target="blank">Rugged Maniac</Button>
                    </CardBody>
                </Card>
                {/* <Card>
                    <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5" className="text-primary" >Race</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText className="mb-2 text-muted">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                    <Button a href="#" target="blank"> Race</Button>
                    </CardBody>
                </Card> */}
                {/* </CardDeck> */}

            </CardColumns>
            </Container>

            <h2>Other Helpful Links (Door Dash, Uber, MudRunGuide, Obstacle Course Racing Media, etc.)</h2>

        </div>
    );
}

export default Resources;