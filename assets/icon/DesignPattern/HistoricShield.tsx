import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const HistoricShield = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#131927"
        d="M4 15.528V2.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6v12.928a4 4 0 0 1-2.211 3.578l-5.52 2.76a.6.6 0 0 1-.537 0l-5.52-2.76A4 4 0 0 1 4 15.528"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
