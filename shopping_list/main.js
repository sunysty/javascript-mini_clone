const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
    //1. 사용자가 입력한 텍스트를 받아옴
    const text = input.value;

    //2. 새로운 아이템을 만듬(텍스트 + 삭제 버튼)
    const item = createItem(text);
    
    //3. items 컨테이너 안에 새로 만든 아이템을 추가함
    items.appendChild(item);
    item.scrollIntoView({block:'center'});
    
    //4. 인풋을 초기화함
    input.value='';
    input.focus();
}

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item__row');

    const item = document.createElement('div');
    item.setAttribute('class','item');

    const name = document.createElement('span');
    name.setAttribute('class', 'item__name');
    name.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete');
    deleteBtn.innerHTML = `<i class="far fa-trash-alt"></i>`;
    deleteBtn.addEventListener("click", ()=>{
        items.removeChild(itemRow);//removeChild
    });

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');


    item.appendChild(name);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);    
    return itemRow;
};

addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') onAdd();
});

    