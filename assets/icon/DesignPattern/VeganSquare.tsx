import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const VeganSquare = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6" />
        <Path d="M14.5 10.5C12.75 12.382 11 17 11 17s-2.5-6.5-5-8" />
        <Path d="m18.017 6.73.296 3.08c.192 1.998-1.306 3.777-3.304 3.97-1.96.188-3.736-1.245-3.925-3.205a3.566 3.566 0 0 1 3.208-3.892l3.284-.316a.404.404 0 0 1 .44.363" />
      </G>
    </Svg>
  );
};
