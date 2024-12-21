import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const RemoveDatabaseScript = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M22 14V8.5M6 13V6a3 3 0 0 1 3-3h5M18 4h4M12 21H6a4 4 0 0 1 0-8h12a4 4 0 1 0 4 4v-3" />
      </G>
    </Svg>
  );
};
