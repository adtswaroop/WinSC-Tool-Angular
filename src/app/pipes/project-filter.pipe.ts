import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../classes/project';

@Pipe({
  name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {

  transform(projects: Project[], keyword: string): any {
    if (!projects) {
      return [];
    }

    if (!keyword || keyword.length == 0) {
      return projects;
    }

    return projects.filter((project) => {
        return  project.name.toLowerCase().includes(keyword.toLowerCase());
    });
  }

}
