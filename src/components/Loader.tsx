import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="cansvas-load"></span>
      <p
        style={{
          color: "#f1f1f1",
          fontSize: "14px",
          fontWeight: "800",
          marginTop: "40px",
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
