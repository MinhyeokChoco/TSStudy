// 게시판의 구조를 정의
interface IBorder {
    title: string;
    content: string;
}

class Border implements IBorder {
    index: number;
    title: string;
    content: string;
    constructor(index: number, title: string, content: string) {
        this.index = index;
        this.title = title;
        this.content = content;
    }

    getIndex(): number {
        return this.index + 1;
    }

    getTitle(): string {
        return this.title;
    }

    getContent(): string {
        return this.content;
    }
}
class BorderManager {
    borders: Border[];
    constructor() {
        this.borders = [];
    }

    setCreateBorder(_border: Border) {
        this.borders.push(_border);
    }

    getBorder(index: number, title: string, content: string): Border {
        return this.borders[index];
    }
}

let arr = [];

function createContent(index: any, title: string, content: string) {
    let _li = document.createElement("li")
    let _span01 = document.createElement("span")
    let _span02 = document.createElement("span")
    let _span03 = document.createElement("span")
    _span01.innerHTML = index;
    _span02.innerHTML = title;
    _span03.innerHTML = content;
    _li.append(_span01);
    _li.append(_span02);
    _li.append(_span03);
    document.querySelector(".content").append(_li);
}

function render() {
    document.querySelector(".content")!.innerHTML = `
        <li>
            <span>번호</span>
            <span>제목</span>
            <span>내용</span>
        </li>
    `;
    for (let i = 0; i < arr.length; i++) {
        createContent(arr[i].index, arr[i].title, arr[i].content);
    }
};

render();

function postContent() {
    let _content_textarea: any = document.querySelector("#content_input")
    let _content: any = _content_textarea.value
    const content = {
        index: arr.length + 1,
        title: "맥북",
        content: _content,
    }
    arr.push(content);
    render();
}


const border01: Border = new Border(1, "title", "content");
border01.getContent;
const borderManager: BorderManager = new BorderManager();
borderManager.setCreateBorder(border01);
