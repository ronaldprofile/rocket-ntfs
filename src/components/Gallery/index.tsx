import { Image } from "./Image";
import * as Images from "../../assets";
import { Container } from "./styles";

export function Gallery() {
  return (
    <Container>
      <div className="wrapper">
        <ul>
          <li>
            <Image src={Images.gallery1} alt="Photo Gallery" customDelay={0} />
          </li>
          <li>
            <Image src={Images.gallery2} alt="Photo Gallery" customDelay={1} />
          </li>
          <li>
            <Image src={Images.gallery3} alt="Photo Gallery" customDelay={2} />
          </li>
          <li>
            <Image src={Images.gallery4} alt="Photo Gallery" customDelay={3} />
          </li>
          <li>
            <Image src={Images.gallery5} alt="Photo Gallery" customDelay={4} />
          </li>
          <li>
            <Image src={Images.gallery6} alt="Photo Gallery" customDelay={5} />
          </li>
          <li>
            <Image src={Images.gallery7} alt="Photo Gallery" customDelay={6} />
          </li>
          <li>
            <Image src={Images.gallery8} alt="Photo Gallery" customDelay={7} />
          </li>
        </ul>
      </div>
    </Container>
  );
}
