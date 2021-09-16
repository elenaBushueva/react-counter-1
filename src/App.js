import Counter from "./Counter";

function App() {
    return (
        <div>
            <Counter initialValue={0} step={1}/>
            <Counter initialValue={3} step={10}/>
            <Counter initialValue={7} step={0.5}/>
            <Counter />
        </div>
    )


}

export default App;
