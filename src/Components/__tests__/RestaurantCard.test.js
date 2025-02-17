const { render, screen } = require("@testing-library/react");
import ResturantCard from "../ResturantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props data", () => {
  render(<ResturantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});

// it("Should render RestaurantCard component with Opened Label" ,()=>{

// })
