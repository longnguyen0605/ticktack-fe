import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const HomeSale = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M14 9.846c-1-.923-3.667-1.23-3.667.615 0 1.847 3.667.924 3.667 2.77s-3 1.846-4 .615M12 14.702V16M12 9.113V8M2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8" />
        <Path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
      </G>
    </Svg>
  );
};
