function useStateCreate() {
    let state = undefined;
    return (initState) => {
        if (state === undefined)
            state = initState;
        const setState = (newState) => {
            // 리렌더링
            state = newState;
            render();
        };
        return [state, setState];
    };
}
const useState = useStateCreate();
// 컴포넌트라고 부를것.
function Content() {
    const [text, setText] = useState("안녕하세요");
    window.increment = () => setText(text === "안녕하세요" ? "잘가세요" : "안녕하세요");
    return `
        <div class="content">
            <span>카운트 : ${text}</span>
            <button onclick="increment()">증가</button>
        </div>
    `;
}
function render() {
    const app = document.querySelector('#app');
    app.innerHTML = Content();
}
render();