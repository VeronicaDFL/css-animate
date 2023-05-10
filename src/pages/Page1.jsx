import { Container,Row,Col } from "react-bootstrap";


export default function Page1() {

    return(
<section>
    <Container>
        <Row>
            <Col>H2: Element</Col>
        </Row>


        <Row>
            <Col>
            <div className= "box scale">
                <p classname= "text-center text-white">Scale</p>
            </div>
            </Col>


            <Col>
            <div className= "box scale-x">
                <p classname= "text-center text-white">Scale X</p>
            </div>
            </Col>


            <Col>
            <div className= "box rotate">
                <p classname= "text-center text-white">Rotate</p>
            </div>
            </Col>


            <Col>
            <div className= "box skew">
                <p classname= "text-center text-white">Skew</p>
            </div>
            </Col>

            <Col>
            <div className= "box skew-2">
                <p classname= "text-center text-white">Skew-2</p>
            </div>
            </Col>

            <Col>
            <div className= "box translate">
                <p classname= "text-center text-white">Translate</p>
            </div>
            </Col>
        </Row>


        <Row>
            <Col>
            <div className= "box1 bgcolor1">
                <p classname= "text-center text-white">bgcolor 1</p>
            </div>
            </Col>


            <Col>
            <div className= "box1 bgcolor2">
                <p classname= "text-center text-white">bgcolor 2</p>
            </div>
            </Col>


            <Col>
            <div className= "boxrace race1">Linear</div>
            <div className= "boxrace race2">Ease</div>
            <div className= "boxrace race3">Ease-in</div>
            <div className= "boxrace race4">Ease-out</div>
            <div className= "boxrace race5">Ease-in-out</div>
            </Col>
        </Row>


            
    </Container>
</section>
    )
}










