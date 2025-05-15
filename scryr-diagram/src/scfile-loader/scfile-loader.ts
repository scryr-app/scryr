import * as fs from 'fs';
import * as path from 'path';

interface ScryrComponent {
    name: string;
    description: string;
    // ... other properties
}

export function loadScryrFile(filePath: string): ScryrComponent {
    const absolutePath = path.join(filePath);
    const fileContent = fs.readFileSync(absolutePath, 'utf-8');
    const scryrComponent: ScryrComponent = JSON.parse(fileContent);
    return scryrComponent;
}

const component = loadScryrFile('../data/test_component.json');
console.log(component);