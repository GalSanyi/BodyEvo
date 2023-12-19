// chest-img.js
import DumbbellBenchPress from "../assets/chest-img/Dumbbell Bench Press.gif";
import Pushups from "../assets/chest-img/Pushups.gif";
import Closegripbenchpress from "../assets/chest-img/close-grip bench press.gif";
import DumbbellFlyes from "../assets/chest-img/DUMBBELL FLY.gif";
import BarbellBenchPress from "../assets/chest-img/Barbell Bench Press.gif";
import ChestDip from "../assets/chest-img/chest dip.gif";
import DeclineDumbbellFlyes from "../assets/chest-img/Decline Dumbbell Flyes.gif";
import InclinedumbbellbenchPress from "../assets/chest-img/dumbbell incline bench press.gif";
import LowCableCrossOver from "../assets/chest-img/Low-cable cross-over.gif";
import BodyweightFlyes from "../assets/chest-img/Bodyweight Flyes.gif";

import InclineHammerCurls from "../assets/biceps-img/Incline Hammer Curls.gif";
import Widegripbarbellcurl from "../assets/biceps-img/Wide-grip barbell curl.gif";
import EZBarSpiderCurl from "../assets/biceps-img/EZ-bar spider curl.gif";
import HammerCurls from "../assets/biceps-img/Hammer Curls.gif";
import EZBarCurl from "../assets/biceps-img/EZ-Bar Curl.gif";
import ZottmanCurl from "../assets/biceps-img/Zottman Curl.gif";
import BicepsCurlToShoulderPress from "../assets/biceps-img/Biceps curl to shoulder press.gif";
import BarbellCurl from "../assets/biceps-img/Barbell Curl.gif";
import ConcentrationCurl from "../assets/biceps-img/Concentration curl.gif";
import FlexorInclineDumbbellCurls from "../assets/biceps-img/Flexor Incline Dumbbell Curls.gif";

// triceps-img.js
import TricepsDip from "../assets/triceps-img/triceps dip.gif";
import DeclineEZBarSkullcrusher from "../assets/triceps-img/Decline EZ-bar skullcrusher.gif";
import DumbbellFloorPress from "../assets/triceps-img/Dumbbell floor press.gif";
import CableVBarPushDown from "../assets/triceps-img/Cable V-bar push-down.gif";
import WeightedBenchDip from "../assets/triceps-img/Weighted bench dip.gif";
import EZBarSkullcrusher from "../assets/triceps-img/EZ-Bar Skullcrusher.gif";
import ReverseGripTricepsPushdown from "../assets/triceps-img/Reverse Grip Triceps Pushdown.gif";
import PushUpsCloseTricepsPosition from "../assets/triceps-img/Push-Ups - Close Triceps Position.gif";
import KneelingCableTricepsExtension from "../assets/triceps-img/kneeling-cable-triceps.gif";
import SingleArmCableTricepsExtension from "../assets/triceps-img/Single-arm cable triceps extension.gif";

// calves-img.js
import BalanceBoard from "../assets/calves-img/Balance Board.gif";
import BarbellSeatedCalfRaise from "../assets/calves-img/Barbell Seated Calf Raise.gif";
import CalfPressOnLegPressMachine from "../assets/calves-img/Calf Press On The Leg Press Machine.gif";
import CalfPress from "../assets/calves-img/Calf Press.gif";
import StandingCalfRaises from "../assets/calves-img/Standing Calf Raises.gif";
import RockingStandingCalfRaise from "../assets/calves-img/Rocking Standing Calf Raise.gif";
import SeatedCalfRaise from "../assets/calves-img/Seated Calf Raise.gif";
import StandingBarbellCalfRaise from "../assets/calves-img/Standing barbell calf raise.gif";
import SmithMachineCalfRaise from "../assets/calves-img/Smith Machine Calf Raise.gif";
import WeightedDonkeyCalfRaise from "../assets/calves-img/Weighted donkey calf raise.gif";

// glute-img
import BarbellGlute from "../assets/glute-img/Barbell glute bridge.gif";
import BarbellHipThrust from "../assets/glute-img/Barbell Hip Thrust.gif";
import SingleLegCableHipExtension from "../assets/glute-img/Single-leg cable hip extension.gif";
import GluteBridge from "../assets/glute-img/Glute bridge.gif";
import SingleLegGluteBridge from "../assets/glute-img/Single-leg glute bridge.gif";
import StepUpWithKneeRaise from "../assets/glute-img/Step-up with knee raise.gif";
import KettlebellThruster from "../assets/glute-img/Kettlebell thruster.gif";
import KneelingSquat from "../assets/glute-img/Kneeling Squat.gif";
import FlutterKicks from "../assets/glute-img/Flutter Kicks.gif";
import GluteKickback from "../assets/glute-img/Glute Kickback.gif";

// chest-img
const chestImgFiles = [
  DumbbellBenchPress,
  Pushups,
  Closegripbenchpress,
  DumbbellFlyes,
  InclinedumbbellbenchPress,
  LowCableCrossOver,
  BarbellBenchPress,
  ChestDip,
  DeclineDumbbellFlyes,
  BodyweightFlyes,
];

export const chestImg = chestImgFiles.map((filename, index) => ({
  id: index + 1,
  filename,
}));

// biceps-img
const bicepsImgFiles = [
  InclineHammerCurls,
  Widegripbarbellcurl,
  EZBarSpiderCurl,
  HammerCurls,
  EZBarCurl,
  ZottmanCurl,
  BicepsCurlToShoulderPress,
  BarbellCurl,
  ConcentrationCurl,
  FlexorInclineDumbbellCurls,
];

export const bicepsImg = bicepsImgFiles.map((filename, index) => ({
  id: index + 1,
  filename,
}));
const tricepsImgFiles = [
  TricepsDip,
  DeclineEZBarSkullcrusher,
  DumbbellFloorPress,
  CableVBarPushDown,
  WeightedBenchDip,
  EZBarSkullcrusher,
  ReverseGripTricepsPushdown,
  PushUpsCloseTricepsPosition,
  KneelingCableTricepsExtension,
  SingleArmCableTricepsExtension,
];

export const tricepsImg = tricepsImgFiles.map((filename, index) => ({
  id: index + 1,
  filename,
}));

const calvesImgFiles = [
  BalanceBoard,
  BarbellSeatedCalfRaise,
  CalfPressOnLegPressMachine,
  CalfPress,
  StandingCalfRaises,
  RockingStandingCalfRaise,
  SeatedCalfRaise,
  StandingBarbellCalfRaise,
  SmithMachineCalfRaise,
  WeightedDonkeyCalfRaise,
];

export const calvesImg = calvesImgFiles.map((filename, index) => ({
  id: index + 1,
  filename,
}));

const gluteImgFiles = [
  BarbellGlute,
  BarbellHipThrust,
  FlutterKicks,
  GluteBridge,
  GluteKickback,
  KettlebellThruster,
  KneelingSquat,
  SingleLegCableHipExtension,
  SingleLegGluteBridge,
  StepUpWithKneeRaise,
];
export const gluteImg = gluteImgFiles.map((filename, index) => ({
  id: index + 1,
  filename,
}));
