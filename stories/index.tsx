import { storiesOf } from "@storybook/react";
import * as React from "react";

// Import the presentation components.
import ComponentStateInitializersApp from "../patterns/ComponentStateInitializersApp/ComponentStateInitializersApp";
import CompoundApp from "../patterns/CompoundApp/CompoundApp";
import ControlledComponentsFirstIterationApp from "../patterns/ControlledComponentsFirstIterationApp/ControllerComponentsFirstIterationApp";
import ControlledComponentsSecondIterationApp from "../patterns/ControlledComponentsSecondIterationApp/ControlledComponentsSecondIterationApp";
import DefaultApp from "../patterns/DefaultApp/DefaultApp";
import FlexibleCompoundApp from "../patterns/FlexibleCompoundApp/FlexibleCompoundApp";
import HOCAppFirstIteration from "../patterns/HOCAppFirstIteration/HOCAppFirstIteration";
import HOCAppSecondIteration from "../patterns/HOCAppSecondIteration/HOCAppSecondIteration";
import HOCAppThirdIteration from "../patterns/HOCAppThirdIteration/HOCAppThirdIteration";
import PropGettersWithRenderPropsApp from "../patterns/PropGettersWithRenderPropsApp/PropGettersWithRenderPropsApp";
import ReactContextFirstIterationProviderApp from "../patterns/ReactContextProviderFirstIterationApp/ReactContextFirstIterationProviderApp";
import ReactContextSecondIterationProviderApp from "../patterns/ReactContextProviderSecondIterationApp/ReactContextProviderSecondIterationApp";
import ReduxApp from "../patterns/ReduxApp/ReduxApp";
import RenderPropsApp from "../patterns/RenderPropsApp/RenderPropsApp";

storiesOf("Advanced React Components", module)
  .add("Default", () => <DefaultApp />)
  .add("Compound Pattern", () => <CompoundApp />)
  .add("Flexible Compound Pattern", () => <FlexibleCompoundApp />)
  .add("Higher Order Component Pattern", () => <HOCAppFirstIteration />)
  .add(
    "HOC with props namespacing and developer friendly display names",
    () => <HOCAppSecondIteration />
  )
  .add("HOC with inner refs and static members hoisting", () => (
    <HOCAppThirdIteration />
  ))
  .add("Render props app", () => <RenderPropsApp />)
  .add("Render props with getter props app", () => (
    <PropGettersWithRenderPropsApp />
  ))
  .add("Component state intializers app", () => (
    <ComponentStateInitializersApp />
  ))
  .add("Controlled component's first iteration app", () => (
    <ControlledComponentsFirstIterationApp />
  ))
  .add("Controlled component's second iteration app", () => (
    <ControlledComponentsSecondIterationApp />
  ))
  .add("React provider example app", () => (
    <ReactContextFirstIterationProviderApp />
  ))
  .add("React provider example app with component update blocker", () => (
    <ReactContextSecondIterationProviderApp />
  ))
  .add("React redux app", () => <ReduxApp />);
