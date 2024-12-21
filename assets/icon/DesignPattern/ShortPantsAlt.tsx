import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ShortPantsAlt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="M12 16.8h6.966a.6.6 0 0 0 .596-.53l1.36-11.6a.6.6 0 0 0-.596-.67H3.659a.6.6 0 0 0-.597.656l1.387 14.8a.6.6 0 0 0 .597.544H11.4a.6.6 0 0 0 .6-.6V12"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
