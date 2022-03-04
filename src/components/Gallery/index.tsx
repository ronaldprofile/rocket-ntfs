import * as Images from "../../assets";

import { Container } from "./styles";

export function Gallery() {
  return (
    <Container>
      <div className="wrapper">
        <ul>
          <li>
            <img src={Images.gallery1} alt="Photo Gallery" />
          </li>
          <li>
            <img src={Images.gallery2} alt="Photo Gallery" />
          </li>
          <li>
            <img src={Images.gallery3} alt="Photo Gallery" />
          </li>
          <li>
            <img src={Images.gallery4} alt="Photo Gallery" />
          </li>
          <li>
            <img src={Images.gallery5} alt="Photo Gallery" />
          </li>
          <li>
            <img src={Images.gallery6} alt="Photo Gallery" />
          </li>
          <li>
            <img src={Images.gallery7} alt="Photo Gallery" />
          </li>
          <li>
            <img src={Images.gallery8} alt="Photo Gallery" />
          </li>
        </ul>
      </div>
    </Container>
  );
}
