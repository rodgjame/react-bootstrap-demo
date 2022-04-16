import { 
    Button,
    Card
 } from 'react-bootstrap';

function FancyCard() {
    return (
        <div >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://media.giphy.com/media/H4KX18qpW7giqwtdVc/giphy-downsized.gif" />
                <Card.Body>
                    <Card.Title>Swear Trek</Card.Title>
                    <Card.Text>
                        Here is an example gif you could send to someone at the end of the work day. 
                        To see more swear trek gifs, click the button below!
                    </Card.Text>
                    <Button variant="primary" onClick={()=> window.open("https://giphy.com/Swear_Trek", "_blank")}>Swear Trek!!!</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default FancyCard;