import figma from "@figma/code-connect";
import { Card } from "./Card";

/**
 * -- INSTRUCTIONS --
 * Replace the placeholder Figma URL below with the actual URL of your
 * Card component node in Figma:
 *   1. Open your Figma file in the browser.
 *   2. Right-click the Card component and choose "Copy link".
 *   3. Paste the link in place of the FIGMA_CARD_URL placeholder.
 *
 * Then run: npx figma connect publish --token <YOUR_FIGMA_TOKEN>
 */
figma.connect(
  Card,
  "FIGMA_CARD_URL", // Replace with your Figma component URL
  {
    props: {
      title: figma.string("Title"),
      description: figma.string("Description"),
      elevated: figma.boolean("Elevated"),
    },
    example: ({ title, description, elevated }) => (
      <Card title={title} description={description} elevated={elevated} />
    ),
  }
);
