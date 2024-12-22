import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const SendDollars = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M10 8.23c-.8-.737-2.207-1.25-3.5-1.282M3 15.23c.752.925 2.15 1.453 3.5 1.498m0-9.781c-1.539-.038-2.917.604-2.917 2.36 0 3.23 6.417 1.615 6.417 4.846 0 1.842-1.708 2.634-3.5 2.575m0-9.781V5m0 11.729V19M13 12h8m0 0-3.84-4M21 12l-3.84 4" />
      </G>
    </Svg>
  );
};
