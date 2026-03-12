import figma from "@figma/code-connect";
import { Button } from "./Button";

/**
 * -- INSTRUCTIONS --
 * Replace the placeholder Figma URL below with the actual URL of your
 * Button component node in Figma:
 *   1. Open your Figma file in the browser.
 *   2. Right-click the Button component and choose "Copy link".
 *   3. Paste the link in place of the FIGMA_BUTTON_URL placeholder.
 *
 * Then run: npx figma connect publish --token <YOUR_FIGMA_TOKEN>
 */
figma.connect(
  Button,
  "FIGMA_BUTTON_URL", // Replace with your Figma component URL
  {
    props: {
      label: figma.string("Label"),
      variant: figma.enum("Variant", {
        Primary: "primary",
        Secondary: "secondary",
        Destructive: "destructive",
      }),
      size: figma.enum("Size", {
        Small: "sm",
        Medium: "md",
        Large: "lg",
      }),
      disabled: figma.boolean("Disabled"),
    },
    example: ({ label, variant, size, disabled }) => (
      <Button
        label={label}
        variant={variant}
        size={size}
        disabled={disabled}
      />
    ),
  }
);
