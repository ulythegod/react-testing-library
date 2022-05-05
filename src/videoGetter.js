export const videoGetter = {
    get play() {
        return true;
    }
};

export const audio = {
    _volume: false,
    set volume(value) {
        this._volume = value;
    },
    get volume() {
        return this._volume;
    },
};
