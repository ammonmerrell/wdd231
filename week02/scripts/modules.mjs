import byuiCourse from './course';
import { setSectionSelection } from './sections';
import { setTitle, renderSections } from './output.mjs';


function setSectionSelection() {
    const sectionSelect = document.querySelector("#sectionNumber");
    byuiCourse.sections.forEach((section) => {
        const option = document.createElement("option");
        option.value = section.sectionNumber;
        option.textContent = `${section.sectionNumber}`;
        sectionSelect.appendChild(option);
    });
}





setTitle(byuiCourse);
setSectionSelection(byuiCourse.sections);
renderSections(byuiCourse.sections);