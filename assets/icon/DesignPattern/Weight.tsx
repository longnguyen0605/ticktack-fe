import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Weight = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M16.5 5h3.9a.6.6 0 0 1 .6.6v14.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V5.6a.6.6 0 0 1 .6-.6h3.9" />
        <Path d="m16.279 6.329.205-1.23a.6.6 0 0 0 0-.198l-.206-1.23A2 2 0 0 0 14.307 2H9.694a2 2 0 0 0-1.973 1.671l-.205 1.23a.6.6 0 0 0 0 .198l.205 1.23A2 2 0 0 0 9.694 8h4.612a2 2 0 0 0 1.973-1.671M12 8l-1-2.5" />
      </G>
    </Svg>
  );
};
