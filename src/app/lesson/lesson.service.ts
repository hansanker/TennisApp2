import { Injectable } from '@angular/core';

export class Lesson {
    constructor(public id: number, public name: string, public time: string, public date: string) { }
}

let LESSONS = [
    new Lesson(11, 'WO-11-MR', '11:00', '01-07-2016'),
    new Lesson(11, 'WO-11-MR', '12:00', '01-07-2016'),
    new Lesson(11, 'WO-11-MR', '11:00', '08-07-2016'),
    new Lesson(11, 'WO-11-MR', '12:00', '08-07-2016'),
    new Lesson(11, 'DO-11-MR', '18:00', '09-07-2016')
  
];

let lessonPromise = Promise.resolve(LESSONS);

@Injectable()
export class LessonService {
    getLessons() { return lessonPromise; };

    getLesson(id: number | string) {
        return lessonPromise
            .then(lessons => lessons.filter(l => l.id === +id)[0]);
    }
}
