import * as actionTypes from '../actions/actionTypes';

const initialState = {
    items: [{
        id: '1',
        artist: 'Disturbed',
        album: 'Believe',
        pic: 'https://upload.wikimedia.org/wikipedia/en/2/23/Disturbed_Believe.jpg',
        tracks: ['Prayer', 'Awaken', 'Liberate', 'Rise']
    },
    {
        id: "2",
        artist: "Linkin Park",
        album: "Meteora",
        pic: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Linkin_Park_logo_2014.jpg",
        tracks: ["Hit the floor", "Dont stay"]
    },
    {
        id: "3",
        artist: "Godsmack",
        album: "Faceless",
        pic: "https://upload.wikimedia.org/wikipedia/de/thumb/1/16/Godsmack-logo.svg/905px-Godsmack-logo.svg.png",
        tracks: ["Straight out of line", "I stand alone"]
    },
    {
        id: "4",
        artist: "A Perfect Circle",
        album: "eMotive",
        pic: "https://upload.wikimedia.org/wikipedia/en/f/f8/A.perfect.circle.mer.de.noms.jpg",
        tracks: ["Passive", "Imagine"]
    },
]
}

const records = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RECORD_ADDED:
            return {
               ...state,
               items: [...state.items, action.payload]
            };
        case actionTypes.RECORD_DELETED:
            return {
                ...state,
                items: state.items.filter(r=> r.id != action.payload.id)
            };
        default:
            return state;
    }
}

export default records