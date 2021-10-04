import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEgg } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import Count from "./Count";

const MenuItems = ({items }) => {
    
    return items.map((a, id) => {    
      return (
        <div className="col mb-3">
          <Card
            key={id}
            border="primary"
            style={{ width: "19rem", textAlign: "center" }}
           >
            <Card.Header key={Math.random()} style={{ fontWeight: "bold" }}>
              {" "}
              {a.itemName}
            </Card.Header>
            <Card.Body key={Math.random()}>
              <Card.Title key={Math.random()}> {a.itemRate}/- </Card.Title>
              <Card.Text key={Math.random()}>
                {a.foodTypeName === "Veg" && (
                  <FontAwesomeIcon icon={faSeedling} size="2x" color="green" />
                )}
                {a.foodTypeName === "Non Veg" && (
                  <FontAwesomeIcon icon={faEgg} size="2x" color="red" />
                )}
              </Card.Text>

              <Count />
            </Card.Body>
          </Card>
        </div>
      );
    }
     );
    }


    export default MenuItems;