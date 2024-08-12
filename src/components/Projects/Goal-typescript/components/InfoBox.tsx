import {type ReactNode } from "react";
type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};
type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

export default function InfoBox(props: HintBoxProps | WarningBoxProps) {
  //we can desturcher at this point bucuse severity can exist and cant exist
  const { mode, children } = props;
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint animate__animated animate__rubberBand animate__delay-2s">
        <p>{children}</p>
      </aside>
    );
  }
  const { severity } = props;

  return (
    <aside
      className={`infobox infobox-warning warning--medium warning--${severity} animate__animated animate__rubberBand`}
    >
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
