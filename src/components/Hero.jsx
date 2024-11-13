import heroImage from "/shop.jpg";

export const Hero = () => {
  return (
    <div className="overflow-hidden flex justify-center items-center">
      <img
        src={heroImage}
        alt="myszop image"
        className="max-w-full rounded-lg shadow-md"
      />
    </div>
  );
};
