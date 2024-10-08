import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Nandhana Palace");

  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard componnet with Promoted Label", () => {
  //Home Work - test HOC : withPromotedLabel()

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  render(<RestaurantCardPromoted resData={MOCK_DATA} />);

  const labelName = screen.getByText("Promoted");

  expect(labelName).toBeInTheDocument();
});
