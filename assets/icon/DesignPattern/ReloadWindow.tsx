import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ReloadWindow = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeLinecap="round" strokeWidth="1.5">
        <Path d="M11 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7" />
        <Path
          d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011M21.667 16.667C21.048 15.097 19.635 14 17.99 14c-1.759 0-3.253 1.255-3.794 3"
          strokeLinejoin="round"
        />
        <Path
          d="M19.996 16.772h1.405a.6.6 0 0 0 .6-.6V14.55M14.333 19.333C14.952 20.903 16.365 22 18.01 22c1.759 0 3.253-1.255 3.794-3"
          strokeLinejoin="round"
        />
        <Path
          d="M16.006 19.228H14.6a.6.6 0 0 0-.6.6v1.622"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
