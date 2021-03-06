<<<<<<< HEAD
import mongoose from 'mongoose';
import Show from './models/show';

const shows = [
    {
        title: 'Pilot',
        season: 1,
        episode: 1,
        show: 'Arrow',
        showIcon: '',
        showNum: 1,
        universeNum: 1,
        airDate: 'October 10, 2012',
        synopsis: 'In the series premiere, billionaire Oliver Queen returns to Starling City after being stranded on a remote island for five years and adopts the persona of Arrow to fight crime.',
        watched: false,
        rating: 0,
    },
    {
        title: 'Honor Thy Father',
        season: 1,
        episode: 2,
        show: 'Arrow',
        showIcon: '',
        showNum: 2,
        universeNum: 2,
        airDate: 'October 17, 2012',
        synopsis: 'When Oliver sets his sights on a criminal with ties to the Chinese Triad, the villains send their top mercenary, China White (guest star KELLY HU) to face The Arrow.',
        watched: false,
        rating: 0,
    },
    {
        title: 'Lone Gunman',
        season: 1,
        episode: 3,
        show: 'Arrow',
        showIcon: '',
        showNum: 3,
        universeNum: 3,
        airDate: 'October 24, 2012',
        synopsis: 'When someone shoots and kills one of his targets, Oliver searches for the gunman, Deadshot, who’s taking out businessmen – and Walter is one of his targets.',
        watched: false,
        rating: 0,
    },
    {
        title: 'An Innocent Man',
        season: 1,
        episode: 4,
        show: 'Arrow',
        showIcon: '',
        showNum: 4,
        universeNum: 4,
        airDate: 'October 31, 2012',
        synopsis: 'Realizing that an innocent man (LANE EDWARDS) has been framed by one of the targets on his list, Oliver (as Arrow) asks Laurel to help prove the man’s innocence.',
        watched: false,
        rating: 0,
    },
    {
        title: 'Damaged',
        season: 1,
        episode: 5,
        show: 'Arrow',
        showIcon: '',
        showNum: 5,
        universeNum: 5,
        airDate: 'November 7, 2012',
        synopsis: 'Laurel represents Oliver, when he is arrested by her father for murder. Subjugated to a polygraph test, Oliver recalls his struggles against Deathstroke on the island.',
        watched: false,
        rating: 0,
    },
    {
        title: 'Legacies',
        season: 1,
        episode: 6,
        show: 'Arrow',
        showIcon: '',
        showNum: 6,
        universeNum: 6,
        airDate: 'November 14, 2012',
        synopsis: 'When the Royal Flush Gang robs a local bank, Diggle suggests that Oliver deviates from his father’s list and helps the citizens of Starling City.',
        watched: false,
        rating: 0,
    },
    {
        title: 'Muse of Fire',
        season: 1,
        episode: 7,
        show: 'Arrow',
        showIcon: '',
        showNum: 7,
        universeNum: 7,
        airDate: 'November 28, 2012',
        synopsis: 'Oliver encounters a mysterious woman, Helena Bertinelli (JESSICA DeGOUW), who he can finally be himself with, but soon comes to realize she’s hiding dangerous secrets of her own.',
        watched: false,
        rating: 0,
    },
    {
        title: 'Vendetta',
        season: 1,
        episode: 8,
        show: 'Arrow',
        showIcon: '',
        showNum: 8,
        universeNum: 8,
        airDate: 'December 5, 2012',
        synopsis: 'As Oliver and Helena grow closer, he trains her to be his ally to Diggle’s dismay. But when her quest for revenge proves to be too strong for Oliver, all hell breaks loose.',
        watched: false,
        rating: 0,
    },
    {
        title: "Year's End",
        season: 1,
        episode: 9,
        show: 'Arrow',
        showIcon: '',
        showNum: 9,
        universeNum: 9,
        airDate: 'December 12, 2012',
        synopsis: 'Determined to make up for all the lost holidays, Oliver decides to throw the family a Christmas party. Meanwhile, Tommy asks Laurel to spend Christmas with him.',
        watched: false,
        rating: 0,
    },
    {
        title: 'Burned',
        season: 1,
        episode: 10,
        show: 'Arrow',
        showIcon: '',
        showNum: 10,
        universeNum: 10,
        airDate: 'January 16, 2013',
        synopsis: 'After being beaten by the Dark Archer, Oliver hangs up his hood. When Laurel calls Arrow for help, however, he reluctantly agrees but his hesitation almost costs him his life.',
        watched: false,
        rating: 0,
    }
];

//Connect to MongoDB
mongoose.connect('mongodb://localhost/shows');

//Go  through each show
shows.map(data => {
    //Initialize a model with show data
    const show = new Show(data);
    //and save it into the database
    show.save();
});

=======
import mongoose from 'mongoose';
import Show from './models/show';

const shows = [
    {
        title: 'Pilot',
        season: 1,
        episode: 1,
        show: 'Arrow',
        showIcon: '',
        showNum: 1,
        universeNum: 1,
        airDate: 'October 10, 2012',
        synopsis: 'In the series premiere, billionaire Oliver Queen returns to Starling City after being stranded on a remote island for five years and adopts the persona of Arrow to fight crime.',
        watched: false,
        rating: 0,
    },
    {
        title: 'Honor Thy Father',
        season: 1,
        episode: 2,
        show: 'Arrow',
        showIcon: '',
        showNum: 2,
        universeNum: 2,
        airDate: 'October 17, 2012',
        synopsis: 'When Oliver sets his sights on a criminal with ties to the Chinese Triad, the villains send their top mercenary, China White (guest star KELLY HU) to face The Arrow.',
        watched: false,
        rating: 0,
    },
    {
        title: 'Lone Gunman',
        season: 1,
        episode: 3,
        show: 'Arrow',
        showIcon: '',
        showNum: 3,
        universeNum: 3,
        airDate: 'October 24, 2012',
        synopsis: 'When someone shoots and kills one of his targets, Oliver searches for the gunman, Deadshot, who’s taking out businessmen – and Walter is one of his targets.',
        watched: false,
        rating: 0,
    },
    {
        title: 'An Innocent Man',
        season: 1,
        episode: 4,
        show: 'Arrow',
        showIcon: '',
        showNum: 4,
        universeNum: 4,
        airDate: 'October 31, 2012',
        synopsis: 'Realizing that an innocent man (LANE EDWARDS) has been framed by one of the targets on his list, Oliver (as Arrow) asks Laurel to help prove the man’s innocence.',
        watched: false,
        rating: 0,
    },
    {
        title: 'Damaged',
        season: 1,
        episode: 5,
        show: 'Arrow',
        showIcon: '',
        showNum: 5,
        universeNum: 5,
        airDate: 'November 7, 2012',
        synopsis: 'Laurel represents Oliver, when he is arrested by her father for murder. Subjugated to a polygraph test, Oliver recalls his struggles against Deathstroke on the island.',
        watched: false,
        rating: 0,
    },
    {
        title: 'Legacies',
        season: 1,
        episode: 6,
        show: 'Arrow',
        showIcon: '',
        showNum: 6,
        universeNum: 6,
        airDate: 'November 14, 2012',
        synopsis: 'When the Royal Flush Gang robs a local bank, Diggle suggests that Oliver deviates from his father’s list and helps the citizens of Starling City.',
        watched: false,
        rating: 0,
    },
    {
        title: 'Muse of Fire',
        season: 1,
        episode: 7,
        show: 'Arrow',
        showIcon: '',
        showNum: 7,
        universeNum: 7,
        airDate: 'November 28, 2012',
        synopsis: 'Oliver encounters a mysterious woman, Helena Bertinelli (JESSICA DeGOUW), who he can finally be himself with, but soon comes to realize she’s hiding dangerous secrets of her own.',
        watched: false,
        rating: 0,
    },
    {
        title: 'Vendetta',
        season: 1,
        episode: 8,
        show: 'Arrow',
        showIcon: '',
        showNum: 8,
        universeNum: 8,
        airDate: 'December 5, 2012',
        synopsis: 'As Oliver and Helena grow closer, he trains her to be his ally to Diggle’s dismay. But when her quest for revenge proves to be too strong for Oliver, all hell breaks loose.',
        watched: false,
        rating: 0,
    },
    {
        title: "Year's End",
        season: 1,
        episode: 9,
        show: 'Arrow',
        showIcon: '',
        showNum: 9,
        universeNum: 9,
        airDate: 'December 12, 2012',
        synopsis: 'Determined to make up for all the lost holidays, Oliver decides to throw the family a Christmas party. Meanwhile, Tommy asks Laurel to spend Christmas with him.',
        watched: false,
        rating: 0,
    },
    {
        title: 'Burned',
        season: 1,
        episode: 10,
        show: 'Arrow',
        showIcon: '',
        showNum: 10,
        universeNum: 10,
        airDate: 'January 16, 2013',
        synopsis: 'After being beaten by the Dark Archer, Oliver hangs up his hood. When Laurel calls Arrow for help, however, he reluctantly agrees but his hesitation almost costs him his life.',
        watched: false,
        rating: 0,
    }
];

//Connect to MongoDB
mongoose.connect('mongodb://localhost/shows');

//Go  through each show
shows.map(data => {
    //Initialize a model with show data
    const show = new Show(data);
    //and save it into the database
    show.save();
});

>>>>>>> 9374ee941516a47c0e9dcfc6f11e4acff2ee717a
