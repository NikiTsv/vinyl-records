import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isLoading: false,
    items: [{
        id: '1',
        artist: 'Disturbed',
        album: 'Believe',
        pic: 'https://upload.wikimedia.org/wikipedia/en/2/23/Disturbed_Believe.jpg',
        tracks: [{
            name: 'Prayer',
            duration: '3:25',
            isFavorite: true
        },
        {
            name: 'Awaken',
            duration: '3:15',
            isFavorite: false
        },
        {
            name: 'Liberate',
            duration: '4:11',
            isFavorite: false
        },
        {
            name: 'Remember',
            duration: '4:15',
            isFavorite: false
        }
        ]
    },
    {
        id: "3",
        artist: "Godsmack",
        album: "Faceless",
        pic: "https://upload.wikimedia.org/wikipedia/de/thumb/1/16/Godsmack-logo.svg/905px-Godsmack-logo.svg.png",
        tracks: [{
            name: 'Straight out of line',
            duration: '3:25',
            isFavorite: true
        },
        {
            name: 'I stand alone',
            duration: '3:15',
            isFavorite: false
        },
        ]
    }
]
}

const records = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.RECORD_ADDED:
            return {
               ...state,
               items: [...state.items, action.payload]
            };
        case actionTypes.LOADING_RECORDS:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.RECORD_DELETED:
            return {
                ...state,
                items: state.items.filter(r=> r.id != action.payload.id)
            };
            case actionTypes.RECORDS_LOADED:
                return {
                    ...state,
                    items: action.payload,
                    isLoading: false
                };
        default:
            return state;
    }
}

export default records