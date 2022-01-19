import { textStyles } from '../../src/primitives/textStyles';

type Styles = typeof textStyles;
type TypographicClass = keyof Styles;
type StyleMap = {
  [K in TypographicClass as K extends string ? K : never]: keyof Styles[K];
};
type TypographicStyleStringMap = {
  [K in keyof StyleMap]: `${K}:${StyleMap[K]}`;
};
export type TypographicStyleString =
  TypographicStyleStringMap[keyof TypographicStyleStringMap];
type ExactStyle<T extends TypographicStyleString> =
  T extends `${infer C}:${infer S}`
    ? C extends keyof Styles
      ? S extends keyof Styles[C]
        ? Styles[C][S]
        : never
      : never
    : never;

/**
 * The text style format generated by generateTextStyles does not support the stitches format.
 * This helper takes the text style format and converts it to the stitches format.
 * Falls back to the default text style if the text style is not found.
 *
 * @param textStyle The name of the text style to convert, must be a string delimited by a ':' containing:
 * - the typography class (eg body)
 * - the typography style (eg regular)
 * @returns The text style in the stitches compatible format.
 */
export const getStitchesTextStyle = <T extends TypographicStyleString>(
  textStyle: T
): ExactStyle<T> => {
  const [typographyClass, typographyStyle] = textStyle.split(':');
  if (typographyClass && typographyStyle) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (textStyles as any)[typographyClass][typographyStyle];
  }

  // Fallback to the default text style
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (textStyles as any).body.regular;
};
