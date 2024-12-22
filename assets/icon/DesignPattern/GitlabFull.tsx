import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const GitlabFull = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="M17.057 2.544a.2.2 0 0 1 .378-.008l3.114 8.31 1.398 3.73a.2.2 0 0 1-.07.232l-9.76 7.106a.2.2 0 0 1-.235 0l-9.76-7.106a.2.2 0 0 1-.069-.231l1.398-3.73.167-.45 2.944-7.861a.2.2 0 0 1 .378.008l2.47 7.6a.2.2 0 0 0 .19.137h4.8a.2.2 0 0 0 .19-.138z"
        clipRule="evenodd"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
