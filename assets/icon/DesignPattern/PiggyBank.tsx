import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PiggyBank = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeLinejoin="round" strokeWidth="1.5">
        <Path
          d="M14.5 8.5c-.78-.202-1.866-.5-2.735-.5C7.476 8 4 10.668 4 13.958c0 1.891 1.148 3.577 2.938 4.668l-.485 1.6a.6.6 0 0 0 .574.774h1.764a.6.6 0 0 0 .36-.12l1.395-1.047h2.437l1.395 1.047a.6.6 0 0 0 .36.12h1.764a.6.6 0 0 0 .574-.774l-.485-1.6c1.067-.65 1.905-1.511 2.409-2.501M14.5 8.5 19 7l-.084 3.628L21 11.5V15l-1.926 1"
          strokeLinecap="round"
        />
        <Path
          fill="#131927"
          d="M15.5 13a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"
          strokeLinecap="round"
        />
        <Path d="M2 10s0 2.4 2 3" strokeLinecap="round" />
        <Path d="M12.8 7.753c.13-.372.2-.772.2-1.188C13 4.596 11.433 3 9.5 3S6 4.596 6 6.565c0 .941.358 1.798.944 2.435" />
      </G>
    </Svg>
  );
};
