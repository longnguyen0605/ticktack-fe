import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AdobeIllustrator = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M21 7v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4M16 12v4M16 9v.01" />
        <Path d="m7 16 1.125-3M13 16l-1.125-3m-3.75 0L10 8l1.875 5m-3.75 0h3.75" />
      </G>
    </Svg>
  );
};
