/**
 * A React functional component that starts a calculator program.
 *
 * This component will first prompt the user to enter two numbers and then
 * prompt the user to enter one of the following operators: delenje, mnozenje,
 * sobiranje, odzemanje. It will then calculate the result of the two numbers
 * with the given operator and logs the result to the console.
 */
const CalculatorProgram = () => {
    const [x, setX] = React.useState('');
    const [y, setY] = React.useState('');
    const [operator, setOperator] = React.useState('');

    const handleCalculate = () => {
        calculate(x, y, operator);
    };

    return (
        <>
            <input type="number" value={x} onChange={e => setX(e.target.value)} />
            <input type="number" value={y} onChange={e => setY(e.target.value)} />
            <select value={operator} onChange={e => setOperator(e.target.value)}>
                <option value="">Select operator</option>
                <option value="/">/ (delenje)</option>
                <option value="*">* (mnozenje)</option>
                <option value="+">+ (sobiranje)</option>
                <option value="-">- (odzemanje)</option>
            </select>
            <button onClick={handleCalculate}>Calculate</button>
        </>
    );
};

