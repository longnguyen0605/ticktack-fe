import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const HistoricShieldAlt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m11.732 21.866-5.52-2.76A4 4 0 0 1 4 15.528V2.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6v12.928a4 4 0 0 1-2.211 3.578l-5.52 2.76a.6.6 0 0 1-.537 0M12 10V2M4 10h16" />
      </G>
    </Svg>
  );
};
