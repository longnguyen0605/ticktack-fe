import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ChromecastActive = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="m2 20.01.01-.011M15 20h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v1M2 16c2 .5 3.5 2 4 4M2 12c4 .5 7.5 4 8 8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        fill="#131927"
        d="M5.002 7.63a.6.6 0 0 1 .6-.6h12.804a.6.6 0 0 1 .6.6v8.832a.6.6 0 0 1-.6.6H13.44a.62.62 0 0 1-.556-.355c-.422-.892-1.622-3.26-3.07-4.707-1.42-1.419-3.572-2.444-4.435-2.82a.62.62 0 0 1-.378-.569z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </Svg>
  );
};
