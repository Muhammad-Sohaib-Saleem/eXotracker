import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [duration, setduration] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const workout = { title, description, duration };

    const response = await fetch("https://kind-puce-meerkat.cyclic.app/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setTitle("");
      setdescription("");
      setduration("");
      setError(null);
      setEmptyFields([]);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <>
      <div className="container my-3">
        <div className="d-flex justify-content-between">
          <div className="fs-3 fw-semibold primary-text">My Activities</div>
          <button
            type="button"
            className="btn primary-btn text-white"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            New Activity
          </button>
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-4" id="staticBackdropLabel">
                    New Activity
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit} className="row g-3">
                    {error && <div className="error">{error}</div>}
                    <div className="col-md-12">
                      <label
                        htmlFor="validationCustom01"
                        className="form-label"
                      >
                        Activity Name
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        className={emptyFields.includes("title") ? "error" : ""}
                        id="validationCustom01"
                      />
                    </div>
                    <div className="col-md-12">
                      <label
                        htmlFor="validationCustom02"
                        className="form-label"
                      >
                        Description
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setdescription(e.target.value)}
                        value={description}
                        className={
                          emptyFields.includes("description") ? "error" : ""
                        }
                        id="validationCustom02"
                      />
                    </div>
                    <div className="col-md-12">
                      <label
                        htmlFor="validationCustom03"
                        className="form-label"
                      >
                        Duration
                      </label>
                      <input
                        type="number"
                        onChange={(e) => setduration(e.target.value)}
                        value={duration}
                        className={
                          emptyFields.includes("duration") ? "error" : ""
                        }
                        id="validationCustom03"
                      />
                    </div>

                    <div className="col-md-12">
                      <input
                        type="submit"
                        className="btn primary-btn text-white btn-lg w-100"
                        data-bs-dismiss="modal"
                        value="Enter"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>

        <label>Excersize Title:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={emptyFields.includes("title") ? "error" : ""}
        />

        <label>Description: </label>
        <input
          type="text"
          onChange={(e) => setdescription(e.target.value)}
          value={description}
          className={emptyFields.includes("description") ? "error" : ""}
        />

        <label>Duration:</label>
        <input
          type="number"
          onChange={(e) => setduration(e.target.value)}
          value={duration}
          className={emptyFields.includes("duration") ? "error" : ""}
        />

        <button>Add Workout</button>
        {error && <div className="error">{error}</div>}
      </form> */}
    </>
  );
};

export default WorkoutForm;
