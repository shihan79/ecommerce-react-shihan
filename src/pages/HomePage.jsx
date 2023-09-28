import Container from "../components/Container"
import Flex from "../components/Flex"
import Product from "../components/Product"
import SubHeading from "../components/SubHeading"


const HomePage = () => {
  return (
    <Container>
      <SubHeading text="Our Bestsellers"/>
      <Flex>
        <div className="w-13">
        <Product heading='Product 1'/>
        </div>
        <div className="w-13">
        <Product heading='Product 2'/>
        </div>
        <div className="w-13">
        <Product heading='Product 3'/>
        </div>
        <div className="w-13">
        <Product heading='Product 4'/>
        </div>
      </Flex>
    </Container>
  )
}

export default HomePage