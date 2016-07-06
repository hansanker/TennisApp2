import { Injectable } from '@angular/core';

export class Lesson {
    constructor(public id: number, public name: string) { }
}

let LESSONS = [
    new Lesson(11, 'sdfkdnfkljsklfj'),
    new Lesson(12, 'Narco'),
    new Lesson(13, 'Bombasto'),
    new Lesson(14, 'Celeritas'),
    new Lesson(15, 'Magneta'),
    new Lesson(16, 'RubberMan')
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
