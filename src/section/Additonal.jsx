import { achievements } from "../constants";

const Additonal = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text font-heading text-white">
        Achivements and Additonal Work
      </h3>
      <div className="client-container">
        {achievements.map(({ id, image, title, description }) => (
          <div key={id} className="client-review">
            <div>
              <img
                src={image}
                className="w-128 h-64 rounded-sm object-contain"
              />
            </div>
            <div className="mt-5">
              <p className="grid-headtext font-outfit text-center">{title}</p>
              <p className="grid-subtext font-mono">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Additonal;
