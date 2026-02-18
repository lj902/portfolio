import { Component } from '@angular/core';

import { AchievementsInfoComponent } from "./achievements-info.component/achievements-info.component";
import { ContactInfoComponent } from "./contact-info.component/contact-info.component";
import { EducationalInfoComponent } from "./educational-info.component/educational-info.component";
import { ExperienceInfoComponent } from "./experience-info.component/experience-info.component";
import { PersonalInfoComponent } from "./personal-info.component/personal-info.component";
import { ProjectsInfoComponent } from "./projects-info.component/projects-info.component";
import { ReferencesInfoComponent } from "./references-info.component/references-info.component";
import { SkillsInfoComponent } from "./skills-info.component/skills-info.component";

@Component({
  selector: 'app-resume',
  imports: [
    AchievementsInfoComponent,
    ContactInfoComponent,
    EducationalInfoComponent,
    ExperienceInfoComponent,
    PersonalInfoComponent,
    ProjectsInfoComponent,
    ReferencesInfoComponent,
    SkillsInfoComponent
  ],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {

}
