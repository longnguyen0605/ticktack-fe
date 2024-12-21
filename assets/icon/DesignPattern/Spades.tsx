import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Spades = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinecap="round" strokeWidth="1.5">
        <Path
          d="M12 14.5c3 4.5 9 4.47 9-.5 0-4-4-7-9-12-5 5-9 8-9 12 0 4.97 6 5 9 .5"
          strokeLinejoin="round"
        />
        <Path d="m11.47 15.493-3 5.625A.6.6 0 0 0 9 22h6a.6.6 0 0 0 .53-.882l-3-5.625a.6.6 0 0 0-1.06 0Z" />
      </G>
    </Svg>
  );
};
