export default function HomePage() {
  return (
    <main className="flex flex-col items-center gap-8">
      <img src="logo.svg" alt="splitter logo" className="w-2/3" />
      <TipCalculator className="rounded-t-lg bg-white p-4" />
    </main>
  );
}
type TipCalculatorProps = {
  className?: string;
};
function TipCalculator(props: TipCalculatorProps) {
  return (
    <>
      <div className={props.className}>
        <CalculatorInput />
        <CalculatorTotal />
      </div>
    </>
  );
}
function CalculatorInput() {
  return (
    <>
      <form action="">
        <div className="flex flex-col bg-red-500">
          <label htmlFor="money">Bill</label>
          <input type="tel" id="money" />
        </div>

        <div className="flex flex-col bg-red-500">
          <fieldset>
            <legend>Select a maintenance drone:</legend>
            <CustomRadioBtn id="5%" name="tip" text="5%" />
            <CustomRadioBtn id="10%" name="tip" text="10%" />
            <CustomRadioBtn id="15%" name="tip" text="15%" />
            <CustomRadioBtn id="25%" name="tip" text="25%" />
            <CustomRadioBtn id="50%" name="tip" text="50%" />
            <CustomTipBtn id="custom" name="tip" text="Custom" />
          </fieldset>
        </div>

        <div className="flex flex-col bg-red-500">
          <label htmlFor="people">Number of People</label>
          <input type="tel" id="people" />
        </div>
      </form>
    </>
  );
}
type CustomRadioBtnProps = {
  id: string;
  text: string;
  name: string;
};
function CustomTipBtn(props: CustomRadioBtnProps) {
  return (
    <div>
      <input
        type="radio"
        id={props.id}
        name={props.name}
        value={props.text}
        checked
      />
      <label htmlFor={props.id}>
        <input type="tel" />
      </label>
    </div>
  );
}
function CustomRadioBtn(props: CustomRadioBtnProps) {
  return (
    <div>
      <input
        type="radio"
        id={props.id}
        name={props.name}
        value={props.text}
        checked
      />
      <label htmlFor={props.id}>{props.text}</label>
    </div>
  );
}
function CalculatorTotal() {
  return <h2>Total Goes Here</h2>;
}
