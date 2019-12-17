const initState = {
    projects: [
        {id: '1', title: 'JavaScript', content: 'A JavaScript tutorial'},
        {id: '2', title: 'React', content: 'A React tutorial'},
        {id: '3', title: 'Redux', content: 'A Redux tutorial'},
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;