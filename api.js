class API {
    constructor(
        { renderSelect }
    ) {
        this.baseUrl = `https://api.imgflip.com/get_memes`;
        this.renderSelect = renderSelect;
        this.MemList = []
    }

    fetchMemPicture () {
        fetch (this.baseUrl)
        .then ((response) => {
            if (response.ok) {
                return response.json();
                }
            })
            .then((res) => {
                this.MemList = res.data.memes
                this.renderSelect(res.data.memes);
                }
            )
    }
}

