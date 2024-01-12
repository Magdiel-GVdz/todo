import Models from './models.js';
import View from './view.js';

document.addEventListener('DOMContentLoaded', () => {
    const model = new Models();
    const view = new View();
    model.setView(view);
    view.setModel(model);
    
    view.render();
});