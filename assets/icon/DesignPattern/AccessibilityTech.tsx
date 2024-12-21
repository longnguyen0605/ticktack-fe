import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AccessibilityTech = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path d="M3 19V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
        <Path
          d="m12.5 12.16 4-.16-.5 4.5M11.833 12 13.5 9.538 10.833 8 9.5 9.846"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          fill="#131927"
          d="M15.5 7.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.5 18a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
