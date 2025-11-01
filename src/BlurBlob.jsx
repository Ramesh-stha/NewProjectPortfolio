import React from "react";
import PropTypes from "prop-types";

const BlurBlob = ({ position, size }) => {
  const { top, left } = position;
  const { height, width } = size;

  return (
    <div
      className="absolute"
      style={{
        top: top,
        left: left,
        height: height,
        width: width,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-full h-full bg-purple-500 opacity-20 rounded-full blur-3xl animate-blob origin-center"></div>
    </div>
  );
};

// Correct propTypes assignment
BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired,
  }),
  size: PropTypes.shape({
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  }),
};

export default BlurBlob;
