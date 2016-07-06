import { Injectable } from '@angular/core';

export class Group {
    constructor(public id: number, public name: string, public day: string) { }
}

let GROUPS = [
    new Group(11, 'MA-12-MR', 'Maandag'),
    new Group(12, 'MA-18-MR', 'Maandag'),
    new Group(13, 'WO-11-MR', 'Woensdag'),
    new Group(14, 'WO-12-MR', 'Woensdag'),
    new Group(15, 'VR-19-MR', 'Vrijdag'),
    new Group(16, 'VR-20-MR', 'Vrijdag')
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
