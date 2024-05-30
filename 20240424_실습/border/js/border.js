class Border {
    constructor(index, title, content) {
        this.index = index;
        this.title = title;
        this.content = content;
    }
    getIndex() {
        return this.index + 1;
    }
    getTitle() {
        return this.title;
    }
    getContent() {
        return this.content;
    }
}
class BorderManager {
    constructor() {
        this.borders = [];
    }
    setCreateBorder(_border) {
        this.borders.push(_border);
    }
    getBorder(index, title, content) {
        return this.borders[index];
    }
}
let arr = [];
function createContent(index, title, content) {
    let _li = document.createElement("li");
    let _span01 = document.createElement("span");
    let _span02 = document.createElement("span");
    let _span03 = document.createElement("span");
    _span01.innerHTML = index;
    _span02.innerHTML = title;
    _span03.innerHTML = content;
    _li.append(_span01);
    _li.append(_span02);
    _li.append(_span03);
    document.querySelector(".content").append(_li);
}
function render() {
    document.querySelector(".content").innerHTML = `
        <li>
            <span>번호</span>
            <span>제목</span>
            <span>내용</span>
        </li>
    `;
    for (let i = 0; i < arr.length; i++) {
        createContent(arr[i].index, arr[i].title, arr[i].content);
    }
}
;
render();
function postContent() {
    let _content_textarea = document.querySelector("#content_input");
    let _content = _content_textarea.value;
    const content = {
        index: arr.length + 1,
        title: "맥북",
        content: _content,
    };
    arr.push(content);
    render();
}
const border01 = new Border(1, "title", "content");
border01.getContent;
const borderManager = new BorderManager();
borderManager.setCreateBorder(border01);
