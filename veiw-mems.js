class View {
    constructor( {onNewMem, onNewPicture }) {
        this.memNode = document.getElementById('mem-wrapper');
        this.memTextNode = document.getElementById('mem__text');
        this.inputTextUpNode = document.getElementById('input__text-up');
        this.inputTextDownNode = document.getElementById('input__text-down');
        this.createBtnNode = document.getElementById('create-btn');
        this.memPictureNode = document.getElementById('mem__picture');
        this.inputColorNode = document.getElementById('input__color');
        // this.memTextUpColorNode = document.querySelector('.mem__text-up');
        // this.memTextDownColorNode = document.getElementById('.mem__text-down');

        
        this.selectNode = document.getElementById('select');

        this.onNewMem = onNewMem;
        this.onNewPicture = onNewPicture;

        this.createBtnNode.addEventListener('click', this.handleBtnClick);
        this.selectNode.addEventListener('change', this.handleSelect);
        this.inputColorNode.addEventListener('change', this.changeTextColor)
    }

    renderMem(mem) {
        this.memTextNode.innerHTML = `
            <div class="mem__text">
                <p id="mem__text-up" class="mem__text-up">${mem.textUp}</p>
                <p id="mem__text-down" class="mem__text-up">${mem.textDown}</p>
            </div>`;
    }
    changeTextColor = () => {
        const textColor = this.inputColorNode.value;
        this.memTextUpColorNode = document.getElementById('mem__text-up');
        this.memTextDownColorNode = document.getElementById('mem__text-down');
        this.memTextUpColorNode.style.color = textColor;
        this.memTextDownColorNode.style.color = textColor;       
    }
    isExitingValue (value) {
        if (!value) {
            alert ('введите текст'); 
            return true;
        }
    }

    handleBtnClick = () => {
        const textUp = this.inputTextUpNode.value;
        const textDown = this.inputTextDownNode.value;
        const unExitinngValue = this.isExitingValue(textUp) ||
        this.isExitingValue(textDown);
        if (unExitinngValue == true)
            { return }
     
        this.onNewMem(textUp, textDown);
        this.changeTextColor();
        // console.log(this.inputColorNode.value)
    }

    renderSelect = (memsList) => {
        this.selectNode.innerHTML = `<option hidden disabled selected>select picture</option>`;
        for (let i = 0; i < memsList.length; i++) {
            const memItem = document.createElement('option');
    
            memItem.setAttribute('id', memsList[i].id);
            memItem.innerText = memsList[i].name;
            this.selectNode.appendChild(memItem);
        }
    }  

    selectPicture = () => {
        const selectedPicture = this.selectNode.options[this.selectNode.selectedIndex];
            return selectedPicture.id;
    }

    handleSelect = (list) => {
        const selectedPicture = this.selectNode.options[this.selectNode.selectedIndex];
        this.onNewPicture(selectedPicture.id, list);
    }

    renderPicture = (id, memsList) => {
        for (let i = 0; i < memsList.length; i++) {
            if (memsList[i].id == id) {
                this.memPictureNode.src = memsList[i].url;
                return
            }    
        }
    }
}
