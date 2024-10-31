export default function HomePage() {
  return (
    <main className="">
      <img src="" alt="splitter logo" />
      <TipCalculator className="bg-white" />
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
  return <h2>Input Goes Here</h2>;
}
function CalculatorTotal() {
  return <h2>Total Goes Here</h2>;
}
