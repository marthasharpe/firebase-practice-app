const initState = {
    projects: [
        {id: '1', title: 'JavaScript', content: 'A JavaScript tutorial'},
        {id: '2', title: 'React', content: 'A React tutorial'},
        {id: '3', title: 'Redux', content: 'A Redux tutorial'},
    ]
};

const projectReducer = (state = initState, action) => {
    return state;
}

export default projectReducer;