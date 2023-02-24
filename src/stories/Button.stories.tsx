import React from "react";
import plane from "../asset/search-plane2.svg";
import { Button } from "./Button";
import Image from "next/image";

export default {
  title: "Example/Button",
  component: Button,
};

const Template = (args: any) => <Button {...args}>Label</Button>;

export const Default = Template.bind({});

export const Hover: any = Template.bind({});
Hover.parameters = { pseudo: { hover: true } };

export const DirectSelector = () => (
  <>
    <div className="story-grid">
      <Button>
        <Image alt="search-plane" width={50} height={50} src={plane} />
      </Button>
      <Button data-hover>Hover</Button>
    </div>
    <h3>Multiple hovered button grouped</h3>
    <div data-hover-group>
      <Button>Hovered 1</Button>
      <Button>Hovered 2</Button>
      <Button>Hovered 3</Button>
    </div>
  </>
);

DirectSelector.parameters = {
  pseudo: {
    hover: ["[data-hover]", "[data-hover-group] button"],
  },
};
