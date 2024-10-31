export default function HomePage() {
  return (
    <main className="flex flex-col items-center gap-8">
      <img src="logo.svg" alt="splitter logo" className="w-2/3" />
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
