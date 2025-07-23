import { Timeline } from "../secondary-components/Timeline";
import { experiences } from "../constants";


const Experiences = () => {
  return (
    <div className="w-full">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
