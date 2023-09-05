export type Styles = {
  animateFromRight: string;
  animateFromTop: string;
  flexinessRoot: string;
  fromRight: string;
  fromTop: string;
  icon: string;
  isAdmin: string;
  isCobalt: string;
  isDanger: string;
  isDebug: string;
  isInfo: string;
  isPrimary: string;
  isQuaternary: string;
  isSecondary: string;
  isSmall: string;
  isStacked: string;
  isSuccess: string;
  isTertiary: string;
  isTertiaryDark: string;
  isTertiaryLight: string;
  isVolumeControl: string;
  isWarning: string;
  isWhite: string;
  knob: string;
  placeHolderShimmer: string;
  progress: string;
  progressBar: string;
  progressCircle: string;
  progressCircleBackgroundEmpty: string;
  progressCircleBackgroundSecondary: string;
  progressCircleBackgroundTertiary: string;
  progressCircleBackgroundWarning: string;
  progressCircleContent: string;
  progressCircleSlice: string;
  progressCircleSub: string;
  progressCircleTitle: string;
  spinAround: string;
  wrapper: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
