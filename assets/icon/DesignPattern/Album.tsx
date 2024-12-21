import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Album = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z" />
        <Path
          d="M12 15.5V7.6a.6.6 0 0 1 .6-.6H15m-3 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
};
