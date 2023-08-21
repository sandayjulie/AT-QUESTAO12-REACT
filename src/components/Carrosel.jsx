import Carousel from 'react-bootstrap/Carousel';
import img1 from '../IMG/1.png'
import img2 from '../IMG/2.png'
import img3 from '../IMG/3.png'

function Carrosel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Primeiro slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Segundo slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Primeiro Slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrosel;