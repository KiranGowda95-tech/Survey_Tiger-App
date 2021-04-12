const Published = ({ questions }) => {
  return (
    <>
      <div className="mt-5 text-left">
        {questions.length > 0 ? (
          questions.map((q, key) => (
            <div key={key}>
              <h3 className="my-3"> {q.qtext} </h3>
              {q.options.map((opt) =>
                q.qtype === 1 ? (
                  <div className="form-check" key={opt.uid}>
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                      />
                      {opt.value}
                    </label>
                  </div>
                ) : (
                  <div className="form-check" key={opt.uid}>
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="random"
                      />
                    </label>
                  </div>
                )
              )}
              <div className="text-right">
                <button className="btn btn-primary">Confirm</button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <h2>No Questions Added</h2>
          </div>
        )}
      </div>
    </>
  );
};
export default Published;