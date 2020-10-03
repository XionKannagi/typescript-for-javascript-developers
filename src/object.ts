export {}

let profile1: object = { name: 'Ham' };
profile1 = {birthday: 1976};
console.log( {profile1} );

let profile2: {name: string;} = { name: 'Ham' };
console.log( { profile2 } );

//profile2 = {birthday: 1976};
profile2 = { name: 'Another name' };
console.log( {profile2} );
