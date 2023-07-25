class Controller {
    constructor() {
        this.model =new Model({
            onMemChanged: this.handleModelMemChanged
        });
        this.view = new View({
            onNewMem: this.handleNewMem,
            onNewPicture: this.handleMemPictureChanged
        });
        this.api = new API(
            {renderSelect: this.handlePictureMem,
            }
        );
    }
    init() {
        this.api.fetchMemPicture()
    }
    handlePictureMem = (list) => {
        this.view.renderSelect(list)
    }
    handleModelMemChanged = (mem) => {
        this.view.renderMem(mem);
    }

    handleNewMem = (textUp, textDown) => {
        this.model.createMem(textUp, textDown);
    }

    handleMemPictureChanged = (id, list) => {
        this.view.renderPicture (id, this.api.MemList)
    }

}


 





// class Controller {
//     constructor() {
//         this.model = new Model({
//             onMemChanged: this.handleModelMemChanged
//         });
//         this.View = new View({
//             onNewMem: this.handleVeiwNewMem
//         });
//     }

//     handleModelMemChanged = (mem) => {
//         this.view.renderMem(mem);
//     }
//     handleVeiwNewMem = (textUp, textDown) => {
//         this.model.createMem(textUp, textDown)
//     }
// }