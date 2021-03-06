import * as React from 'react';
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

interface Props {
    title?: string,
    img?: string
}

function LogoCard({title, img}: Props) {
    return (
        <Card className="text-center mx-2 my-4">
            <Card.Body className="mx-auto">
                <Image src={img} alt={`${title} Logo`} height={75}/>
            </Card.Body>
            <Card.Footer>
                <Card.Text className="lead">{title}</Card.Text>
            </Card.Footer>
        </Card>
    )
}

export default LogoCard
