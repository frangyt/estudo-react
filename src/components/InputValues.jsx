export default function InputValues({ inputValues, onChangeValue }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={inputValues.initialInvestment}
            onChange={(event) =>
              onChangeValue("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={inputValues.annualInvestment}
            onChange={(event) =>
              onChangeValue("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={inputValues.expectedReturn}
            onChange={(event) =>
              onChangeValue("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={inputValues.duration}
            onChange={(event) => onChangeValue("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
