export {};

let name='Atsushi';

name='Ham';

let nickname='Ham' as const;
// nickname = 'Hamtaro'

let profile = {
    name:'atsushi',
    height:178
} as const; //readonlyに変わる

// profile.name='Ham';
// profile.height = 180;