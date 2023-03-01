import resume from "../assets/Resume.pdf";

function Button(props) {
  const { text, color, padding, type, download, onClick } = props;

  const buttonClasses = `py-${padding} px-${padding} rounded-md font-semibold text-white text-[16px] lg5:text-[13px] lg7:w-full transition duration-500 ${
    color === "orange"
      ? "bg-orange-100 hover:bg-orange-200"
      : "bg-blue-100 hover:bg-blue-200"
  } `;

  const buttonStyle = {
    padding: `${padding}px`,
  };
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = download;
    link.download = "Thank you for download.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClick = () => {
    if (download) {
      handleDownload();
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div>
      <button
        type={type || "button"}
        className={buttonClasses}
        style={buttonStyle}
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
