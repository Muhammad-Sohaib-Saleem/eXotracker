import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import ActivityImg from "../Images/activity.svg";
// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch(
      "https://kind-puce-meerkat.cyclic.app/api/workouts/" + workout._id,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <>
      <div className="col my-2">
        <div className="card p-3">
          <img
            src={ActivityImg}
            className="img-fluid w-100"
            alt="Hollywood Sign on The Hill"
          />
          <div className="card-body">
            <h5 className="card-title primary-text fs-2 fw-semibold text-uppercase">
              {workout.title}
            </h5>
            <p className="card-text fs-6 lh-1 text-muted">
              <strong className="gray-text">Description: </strong>
              {workout.description}
            </p>
            <p className="card-text fs-6 lh-1 text-muted">
              <strong className="gray-text">Duration: </strong>
              {workout.duration} mins
            </p>
            <div className="d-flex justify-content-between">
              <p className="gray-text">
                {formatDistanceToNow(new Date(workout.createdAt), {
                  addSuffix: true,
                })}
              </p>
              <div className="d-flex gap-3">
                <button className="btn primary-btn ">
                  <i
                    className="fa-solid fa-pen-to-square text-white"
                    onClick={handleClick}
                  ></i>
                </button>
                <button className="btn primary-btn">
                  <i
                    className="fa-solid fa-trash text-white"
                    onClick={handleClick}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkoutDetails;
