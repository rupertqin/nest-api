import { Injectable } from '@nestjs/common';
import universities from './china_mainland_universities.json';

const _universityies: string[] = [];
for (const key in universities) {
  const cities = universities[key].all || universities[key];
  _universityies.push(...cities);
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  searchUniversity(name): string[] {
    if (!name.trim()) return [];
    return _universityies.filter((uname) => uname.includes(name));
  }
}
