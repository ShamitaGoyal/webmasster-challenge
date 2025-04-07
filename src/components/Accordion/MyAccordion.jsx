import Accordion from 'react-bootstrap/Accordion';

function MyAccordion({ items }) {
  return (
    <Accordion defaultActiveKey="0">
      {items.map((item, index) => (
        <Accordion.Item eventKey={index.toString()} key={index}>
          <Accordion.Header>{item.name}</Accordion.Header>
          <Accordion.Body>{item.description}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default MyAccordion;
