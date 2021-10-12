import { Injectable } from '@nestjs/common';
const universities = require('./china_mainland_universities.json');

const _universityies: string[] = []
for (const key in universities) {
  _universityies.push(...universities[key].all)
}


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  checkUniversity(name): string[] {
    if (!name.trim()) return [];
    return _universityies.filter(uname => uname.includes(name))
  }
}
