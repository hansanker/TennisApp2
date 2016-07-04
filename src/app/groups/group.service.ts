import { Injectable } from '@angular/core';

export class Group {
    constructor(public id: number, public name: string) { }
}

let GROUPS = [
    new Group(11, 'Mr. Nice'),
    new Group(12, 'Narco'),
    new Group(13, 'Bombasto'),
    new Group(14, 'Celeritas'),
    new Group(15, 'Magneta'),
    new Group(16, 'RubberMan')
];

let groupPromise = Promise.resolve(GROUPS);

@Injectable()
export class GroupService {
    getGroups() { return groupPromise; }
    getGroup(id: number | string) {
        return groupPromise
            .then(groups => groups.filter(g => g.id === +id)[0]);
    }
}
