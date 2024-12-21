import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const VerifiedUser = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path
          d="M2 20v-1a7 7 0 0 1 7-7v0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M15.804 12.314a1.62 1.62 0 0 1 2.392 0c.325.356.79.549 1.272.526a1.62 1.62 0 0 1 1.692 1.692c-.023.481.17.947.526 1.272.705.642.705 1.75 0 2.392-.356.325-.549.79-.526 1.272a1.62 1.62 0 0 1-1.692 1.692 1.62 1.62 0 0 0-1.272.526 1.62 1.62 0 0 1-2.392 0 1.62 1.62 0 0 0-1.272-.526 1.62 1.62 0 0 1-1.692-1.692 1.62 1.62 0 0 0-.527-1.272 1.62 1.62 0 0 1 0-2.392c.357-.325.55-.79.527-1.272a1.62 1.62 0 0 1 1.692-1.692c.481.023.947-.17 1.272-.527Z" />
        <Path
          d="m15.363 17 1.091 1.09 2.182-2.18M9 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
